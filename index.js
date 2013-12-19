var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port:process.env.PORT || 3000});

wss.on('connection', function(ws) {
  ws.on('message', function(message) {
    console.log(message);
    ws.send("You sent:"+message);
  });
});
