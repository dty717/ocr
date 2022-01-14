const { RTCPeerConnection } = require('wrtc');


var USERNAME = "USER"
var PASSWORD = "PASSWORD"
var PORT = 3478
var IP = "123.57.22.64" // you will have to change this

function checkTURNServer(turnConfig, timeout) {

    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            if (promiseResolved) return;
            resolve(false);
            promiseResolved = true;
        }, timeout || 5000);

        var promiseResolved = false
            , pc = new RTCPeerConnection({ iceServers: [turnConfig] })
            , noop = function () { };
        
        pc.onicecandidate = function (ice) {  //listen for candidate events
            if (promiseResolved || !ice || !ice.candidate || !ice.candidate.candidate || !(ice.candidate.candidate.indexOf('typ relay') > -1)) return;
            promiseResolved = true;
            resolve(true);
        };
        pc.createDataChannel("");    //create a bogus data channel
        pc.createOffer(function (sdp) {
            if (sdp.sdp.indexOf('typ relay') > -1) { // sometimes sdp contains the ice candidates...
                promiseResolved = true;
                resolve(true);
            }
            pc.setLocalDescription(sdp, noop, noop);
        }, noop);    // create offer and set local description

    });
}

checkTURNServer({
    urls: `turn:${IP}:${PORT}?transport=tcp`,
    username: USERNAME,
    credential: PASSWORD,
}).then(e=>{
    console.log('TURN server reachable on TCP?', e )
})

checkTURNServer({
    urls: `turn:${IP}:${PORT}?transport=udp`,
    username: USERNAME,
    credential: PASSWORD,
}).then(e=>{
    console.log('TURN server reachable on UDP?', e )
})
