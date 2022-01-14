
const { RTCPeerConnection } = require('wrtc');

var username = "USER"
var credential = "PASSWORD"
var port = 3478
var url = "123.57.22.64" // you will have to change this

var myPeerConnection = null;    // RTCPeerConnection
var clientID;

async function createPeerConnection() {
    console.log("Setting up a connection...");

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
    myPeerConnection.oniceconnectionstatechange = handleICEConnectionStateChangeEvent;
    myPeerConnection.onicegatheringstatechange = handleICEGatheringStateChangeEvent;
    myPeerConnection.onsignalingstatechange = handleSignalingStateChangeEvent;
    myPeerConnection.onnegotiationneeded = handleNegotiationNeededEvent;
    myPeerConnection.ontrack = handleTrackEvent;
}