
var WebSocketClient = require('websocket').client;
const { RTCPeerConnection, getUserMedia, RTCSessionDescription, RTCIceCandidate } = require('wrtc');

var username = "USER"
var credential = "PASSWORD"
var port = 3478
var url = "stun.delinapi.top" // you will have to change this


var client = new WebSocketClient();
var myHostname = 'webrtc-from-chat.glitch.me';


// WebSocket chat/signaling channel variables.
var clientID = 0;

var mediaConstraints = {
    audio: false,            // We want an audio track
    video: {
        aspectRatio: {
            ideal: 1.333333     // 3:2 aspect is preferred
        }
    }
};

var myUsername = null;
var targetUsername = null;      // To store username of other peer
var myPeerConnection = null;    // RTCPeerConnection
var transceiver = null;         // RTCRtpTransceiver
var webcamStream = null;        // MediaStream from webcam
var wsConnection = null;

var sendChannel = null;       // RTCDataChannel for the local (sender)

function connect() {

    client.on('connectFailed', function (error) {
        console.log('Connect Error: ' + error.toString());
    });

    client.on('connect', function (connection) {
        console.log('WebSocket Client Connected');
        wsConnection = connection;
        connection.on('error', function (error) {
            console.log("Connection Error: " + error.toString());
        });
        connection.on('close', function () {
            console.log('echo-protocol Connection Closed');
        });
        connection.on('message', function (message) {
            if (message.type === 'utf8') {
                message = JSON.parse(message.utf8Data);
                delete message.utf8Data;
            }
            var text = "";
            console.log("Message received: ");
            var time = new Date(message.date);
            var timeStr = time.toLocaleTimeString();
            switch (message.type) {
                case "id":
                    clientID = message.id;
                    setUsername();
                    break;
                case "username":
                    text = "<b>User <em>" + message.name + "</em> signed in at " + timeStr + "</b><br>";
                    break;
                case "message":
                    text = "(" + timeStr + ") <b>" + message.name + "</b>: " + message.text + "<br>";
                    break;
                case "rejectusername":
                    myUsername = message.name;
                    text = "<b>Your username has been set to <em>" + myUsername +
                        "</em> because the name you chose is in use.</b><br>";
                    break;
                case "userlist":      // Received an updated user list
                    handleUserlistMsg(message);
                    break;
                // Signaling messages: these messages are used to trade WebRTC
                // signaling information during negotiations leading up to a video
                // call.
                case "video-offer":  // Invitation and offer to chat
                    handleVideoOfferMsg(message);
                    break;

                case "video-answer":  // Callee has answered our offer
                    handleVideoAnswerMsg(message);
                    break;

                case "new-ice-candidate": // A new ICE candidate has been received
                    handleNewICECandidateMsg(message);
                    break;

                case "hang-up": // The other peer has hung up the call
                    handleHangUpMsg(message);
                    break;

                // Unknown message; output to console for debugging.

                default:
                    console.err("Unknown message received:");
                    console.err(message);
            }

            // If there's text to insert into the chat buffer, do so now, then
            // scroll the chat panel so that the new text is visible.

            if (text.length) {
                // chatBox.innerHTML += text;
                // chatBox.scrollTop = chatBox.scrollHeight - chatBox.clientHeight;
            }

        });
    });
    client.connect('wss://' + myHostname, 'json', "https://" + myHostname,
        {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
        }
    );
}

// Given a message containing a list of usernames, this function
// populates the user list box with those names, making each item
// clickable to allow starting a video call.

function handleUserlistMsg(msg) {
    var i;

    // Add member names from the received list.

    msg.users.forEach(function (username, index) {
        console.log(index, username);
    });
}



// Called when the "id" message is received; this message is sent by the
// server to assign this login session a unique ID number; in response,
// this function sends a "username" message to set our username for this
// session.
function setUsername() {
    myUsername = new Date().toISOString().substring(13, 23);
    sendToServer({
        name: myUsername,
        date: Date.now(),
        id: clientID,
        type: "username"
    });
}
var log = () => { }


function sendToServer(msg) {
    console.log('send', msg)
    var msgJSON = JSON.stringify(msg);
    wsConnection.sendUTF(msgJSON);
}
connect()


// Output logging information to console.

function log(text) {
    var time = new Date();

    console.log("[" + time.toLocaleTimeString() + "] " + text);
}

// Output an error message to console.

function log_error(text) {
    var time = new Date();

    console.trace("[" + time.toLocaleTimeString() + "] " + text);
}


// Handles a click on the Send button (or pressing return/enter) by
// building a "message" object and sending it to the server.
function handleSendButton() {
    var msg = {
        text: 'text',
        type: "message",
        id: clientID,
        date: Date.now()
    };
    sendToServer(msg);
    // document.getElementById("text").value = "";
}

// Handler for keyboard events. This is used to intercept the return and
// enter keys so that we can call send() to transmit the entered text
// to the server.
function handleKey(evt) {
    if (evt.keyCode === 13 || evt.keyCode === 14) {
        // if (!document.getElementById("send").disabled) {
        //     handleSendButton();
        // }
    }
}

// Create the RTCPeerConnection which knows how to talk to our
// selected STUN/TURN server and then uses getUserMedia() to find
// our camera and microphone and add that stream to the connection for
// use in our video call. Then we configure event handlers to get
// needed notifications on the call.

async function createPeerConnection() {
    log("Setting up a connection...");

    // Create an RTCPeerConnection which knows to use our chosen
    // STUN server.

    myPeerConnection = new RTCPeerConnection({
        iceServers: [     // Information about ICE servers - Use your own!
            {
                urls: "turn:" + url + ":" + port,  // A TURN server
                username,
                credential
            }
        ]
    });

    // Set up event handlers for the ICE negotiation process.

    myPeerConnection.onicecandidate = handleICECandidateEvent;
    myPeerConnection.ontrack = handleTrackEvent;

    myPeerConnection.onsignalingstatechange = handleSignalingStateChangeEvent;
    myPeerConnection.onnegotiationneeded = handleNegotiationNeededEvent;
    myPeerConnection.oniceconnectionstatechange = handleICEConnectionStateChangeEvent;
    myPeerConnection.onicegatheringstatechange = handleICEGatheringStateChangeEvent;

    sendChannel = myPeerConnection.createDataChannel("sendChannel");
    sendChannel.onopen = handleSendChannelStatusChange;
    sendChannel.onclose = handleSendChannelStatusChange;
    setTimeout(()=>{
        myPeerConnection.videoState = true;
    },3000);
}

function handleSendChannelStatusChange(event) {
    if (sendChannel) {
        var state = sendChannel.readyState;
        console.log({ state });
    }
}

// onconnectionstatechange: null,
// ondatachannel: null,


// Called by the WebRTC layer to let us know when it's time to
// begin, resume, or restart ICE negotiation.

async function handleNegotiationNeededEvent() {
    log("*** Negotiation needed");

    try {
        log("---> Creating offer");
        const offer = await myPeerConnection.createOffer();

        // If the connection hasn't yet achieved the "stable" state,
        // return to the caller. Another negotiationneeded event
        // will be fired when the state stabilizes.

        if (myPeerConnection.signalingState != "stable") {
            log("     -- The connection isn't stable yet; postponing...")
            return;
        }

        // Establish the offer as the local peer's current
        // description.

        log("---> Setting local description to the offer");
        await myPeerConnection.setLocalDescription(offer);

        // Send the offer to the remote peer.

        log("---> Sending the offer to the remote peer");
        sendToServer({
            name: myUsername,
            target: targetUsername,
            type: "video-offer",
            sdp: myPeerConnection.localDescription
        });
    } catch (err) {
        log("*** The following error occurred while handling the negotiationneeded event:");
        reportError(err);
    };
}

// Called by the WebRTC layer when events occur on the media tracks
// on our WebRTC call. This includes when streams are added to and
// removed from the call.
//
// track events include the following fields:
//
// RTCRtpReceiver       receiver
// MediaStreamTrack     track
// MediaStream[]        streams
// RTCRtpTransceiver    transceiver
//
// In our case, we're just taking the first stream found and attaching
// it to the <video> element for incoming media.

function handleTrackEvent(event) {
    log("*** Track event");
    // document.getElementById("received_video").srcObject = event.streams[0];
    // document.getElementById("hangup-button").disabled = false;
}

// Handles |icecandidate| events by forwarding the specified
// ICE candidate (created by our local ICE agent) to the other
// peer through the signaling server.

function handleICECandidateEvent(event) {
    if (event.candidate) {
        log("*** Outgoing ICE candidate: " + event.candidate.candidate);

        sendToServer({
            type: "new-ice-candidate",
            target: targetUsername,
            candidate: event.candidate
        });
    }
}

// Handle |iceconnectionstatechange| events. This will detect
// when the ICE connection is closed, failed, or disconnected.
//
// This is called when the state of the ICE agent changes.

function handleICEConnectionStateChangeEvent(event) {
    log("*** ICE connection state changed to " + myPeerConnection.iceConnectionState);

    switch (myPeerConnection.iceConnectionState) {
        case "closed":
        case "failed":
        case "disconnected":
            closeVideoCall();
            break;
    }
}

// Set up a |signalingstatechange| event handler. This will detect when
// the signaling connection is closed.
//
// NOTE: This will actually move to the new RTCPeerConnectionState enum
// returned in the property RTCPeerConnection.connectionState when
// browsers catch up with the latest version of the specification!

function handleSignalingStateChangeEvent(event) {
    log("*** WebRTC signaling state changed to: " + myPeerConnection.signalingState);
    switch (myPeerConnection.signalingState) {
        case "closed":
            closeVideoCall();
            break;
    }
}

// Handle the |icegatheringstatechange| event. This lets us know what the
// ICE engine is currently working on: "new" means no networking has happened
// yet, "gathering" means the ICE engine is currently gathering candidates,
// and "complete" means gathering is complete. Note that the engine can
// alternate between "gathering" and "complete" repeatedly as needs and
// circumstances change.
//
// We don't need to do anything when this happens, but we log it to the
// console so you can see what's going on when playing with the sample.

function handleICEGatheringStateChangeEvent(event) {
    log("*** ICE gathering state changed to: " + myPeerConnection.iceGatheringState);
}

// Close the RTCPeerConnection and reset variables so that the user can
// make or receive another call if they wish. This is called both
// when the user hangs up, the other user hangs up, or if a connection
// failure is detected.

function closeVideoCall() {
    // var localVideo = document.getElementById("local_video");

    log("Closing the call");

    // Close the RTCPeerConnection

    if (myPeerConnection) {
        log("--> Closing the peer connection");

        // Disconnect all our event listeners; we don't want stray events
        // to interfere with the hangup while it's ongoing.

        myPeerConnection.ontrack = null;
        myPeerConnection.onnicecandidate = null;
        myPeerConnection.oniceconnectionstatechange = null;
        myPeerConnection.onsignalingstatechange = null;
        myPeerConnection.onicegatheringstatechange = null;
        myPeerConnection.onnotificationneeded = null;

        // Stop all transceivers on the connection

        myPeerConnection.getTransceivers().forEach(transceiver => {
            transceiver.stop();
        });

        // // Stop the webcam preview as well by pausing the <video>
        // // element, then stopping each of the getUserMedia() tracks
        // // on it.

        // if (localVideo.srcObject) {
        //     localVideo.pause();
        //     localVideo.srcObject.getTracks().forEach(track => {
        //         track.stop();
        //     });
        // }

        // Close the peer connection

        myPeerConnection.close();
        myPeerConnection = null;
        webcamStream = null;
    }

    // Disable the hangup button

    // document.getElementById("hangup-button").disabled = true;
    targetUsername = null;
}

// Handle the "hang-up" message, which is sent if the other peer
// has hung up the call or otherwise disconnected.

function handleHangUpMsg(msg) {
    log("*** Received hang up notification from other peer");

    closeVideoCall();
}

// Hang up the call by closing our end of the connection, then
// sending a "hang-up" message to the other peer (keep in mind that
// the signaling is done on a different connection). This notifies
// the other peer that the connection should be terminated and the UI
// returned to the "no call in progress" state.

function hangUpCall() {
    closeVideoCall();

    sendToServer({
        name: myUsername,
        target: targetUsername,
        type: "hang-up"
    });
}

// Handle a click on an item in the user list by inviting the clicked
// user to video chat. Note that we don't actually send a message to
// the callee here -- calling RTCPeerConnection.addTrack() issues
// a |notificationneeded| event, so we'll let our handler for that
// make the offer.

async function invite(clickedUsername) {
    log("Starting to prepare an invitation");
    if (myPeerConnection) {
        alert("You can't start a call because you already have one open!");
    } else {

        // Don't allow users to call themselves, because weird.

        if (clickedUsername === myUsername) {
            alert("I'm afraid I can't let you talk to yourself. That would be weird.");
            return;
        }

        // Record the username being called for future reference

        targetUsername = clickedUsername;
        log("Inviting user " + targetUsername);

        // Call createPeerConnection() to create the RTCPeerConnection.
        // When this returns, myPeerConnection is our RTCPeerConnection
        // and webcamStream is a stream coming from the camera. They are
        // not linked together in any way yet.

        log("Setting up connection to invite user: " + targetUsername);
        createPeerConnection();

        // Get access to the webcam stream and attach it to the
        // "preview" box (id "local_video").

        try {
            webcamStream = await getUserMedia(mediaConstraints);
        } catch (err) {
            handleGetUserMediaError(err);
            return;
        }

        // Add the tracks from the stream to the RTCPeerConnection

        try {
            webcamStream.getTracks().forEach(
                transceiver = track => myPeerConnection.addTransceiver(track, { streams: [webcamStream] })
            );
        } catch (err) {
            handleGetUserMediaError(err);
        }
    }
}

// Accept an offer to video chat. We configure our local settings,
// create our RTCPeerConnection, get and attach our local camera
// stream, then create and send an answer to the caller.

async function handleVideoOfferMsg(msg) {
    targetUsername = msg.name;

    // If we're not already connected, create an RTCPeerConnection
    // to be linked to the caller.

    log("Received video chat offer from " + targetUsername);
    if (!myPeerConnection) {
        createPeerConnection();
    }

    // We need to set the remote description to the received SDP offer
    // so that our local WebRTC layer knows how to talk to the caller.

    var desc = new RTCSessionDescription(msg.sdp);

    // If the connection isn't stable yet, wait for it...

    if (myPeerConnection.signalingState != "stable") {
        log("  - But the signaling state isn't stable, so triggering rollback");

        // Set the local and remove descriptions for rollback; don't proceed
        // until both return.
        await Promise.all([
            myPeerConnection.setLocalDescription({ type: "rollback" }),
            myPeerConnection.setRemoteDescription(desc)
        ]);
        return;
    } else {
        log("  - Setting remote description");
        await myPeerConnection.setRemoteDescription(desc);
    }

    // Get the webcam stream if we don't already have it

    if (!webcamStream) {
        try {
            webcamStream = await getUserMedia(mediaConstraints);
        } catch (err) {
            handleGetUserMediaError(err);
            return;
        }

        // document.getElementById("local_video").srcObject = webcamStream;

        // Add the camera stream to the RTCPeerConnection

        try {
            webcamStream.getTracks().forEach(
                transceiver = track => myPeerConnection.addTransceiver(track, { streams: [webcamStream] })
            );
        } catch (err) {
            handleGetUserMediaError(err);
        }
    }

    log("---> Creating and sending answer to caller");

    await myPeerConnection.setLocalDescription(await myPeerConnection.createAnswer());

    sendToServer({
        name: myUsername,
        target: targetUsername,
        type: "video-answer",
        sdp: myPeerConnection.localDescription
    });
}

// Responds to the "video-answer" message sent to the caller
// once the callee has decided to accept our request to talk.

async function handleVideoAnswerMsg(msg) {
    log("*** Call recipient has accepted our call");

    // Configure the remote description, which is the SDP payload
    // in our "video-answer" message.

    var desc = new RTCSessionDescription(msg.sdp);
    await myPeerConnection.setRemoteDescription(desc).catch(reportError);
}

// A new ICE candidate has been received from the other peer. Call
// RTCPeerConnection.addIceCandidate() to send it along to the
// local ICE framework.

async function handleNewICECandidateMsg(msg) {
    var candidate = new RTCIceCandidate(msg.candidate);

    log("*** Adding received ICE candidate: " + JSON.stringify(candidate));
    try {
        await myPeerConnection.addIceCandidate(candidate)
    } catch (err) {
        reportError(err);
    }
}

// Handle errors which occur when trying to access the local media
// hardware; that is, exceptions thrown by getUserMedia(). The two most
// likely scenarios are that the user has no camera and/or microphone
// or that they declined to share their equipment when prompted. If
// they simply opted not to share their media, that's not really an
// error, so we won't present a message in that situation.

function handleGetUserMediaError(e) {
    log_error(e);
    switch (e.name) {
        case "NotFoundError":
            alert("Unable to open your call because no camera and/or microphone" +
                "were found.");
            break;
        case "SecurityError":
        case "PermissionDeniedError":
            // Do nothing; this is the same as the user canceling the call.
            break;
        default:
            alert("Error opening your camera and/or microphone: " + e.message);
            break;
    }

    // Make sure we shut down our end of the RTCPeerConnection so we're
    // ready to try again.

    closeVideoCall();
}

// Handles reporting errors. Currently, we just dump stuff to console but
// in a real-world application, an appropriate (and user-friendly)
// error message should be displayed.

function reportError(errMessage) {
    log_error(`Error ${errMessage.name}: ${errMessage.message}`);
}

const server = dgram.createSocket('udp4');

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
    if(myPeerConnection&&myPeerConnection.videoState&&(sendChannel.readyState=='open')){
        sendChannel.send(msg);
    }
//   console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(49999);
