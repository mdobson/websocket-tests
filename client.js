var dgram = require('dgram');
var message = new Buffer("Some bytes");
var client = dgram.createSocket("udp4");


module.exports = function sendPacket(done){

  client.once("error", function (err) {
    console.log("server error:\n" + err.stack);
    client.close();
  });

  var buf = new Buffer([0x03,0x02,0xEE]);
  client.send(buf, 0, buf.length, 3000, "192.168.1.13", function(err, bytes) {
    client.once("message", function (msg, rinfo) {
      console.log(msg);
      client.close();
    });
  });
}

sendPacket();


