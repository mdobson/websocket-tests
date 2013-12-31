var WebSocket = require('ws'),
    ws = new WebSocket('ws://argosocktest.herokuapp.com/'),
    client = require('./client.js');

ws.on('open', function() {
  ws.send('Send some data to echo!');
});


ws.on('message', function(data, flags) {
  client();
  console.log(arguments);
});
