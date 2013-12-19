var WebSocketServer = require('ws').Server,
    http = require('http');


var server = http.createServer(function(req, res) {
  res.writeHead(201);
  res.end();
});

server.listen(process.env.PORT || 5000);

var wss = new WebSocketServer({ server: server });

wss.on('connection', function(ws) {
  ws.on('message', function(message) {
    console.log(message);
    ws.send("You sent:"+message);
  });
});
