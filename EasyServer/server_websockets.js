
const WebSocket = require('ws');
var concurrentClientCount = 0;

const server = new WebSocket.Server({ port: 28563 });

server.on('connection', function connection(ws) {
  concurrentClientCount++;
  console.log(concurrentClientCount + " concurrent clients are connected");

  ws.on('message', function (data) {
    console.log("Data received: "+data)
    words = data.split(" ")
    var answer = eval(words[2]+words[1]+words[3]).toString();
    ws.send(answer);
    console.log("Answer: "+answer)
  });

  ws.on('close', function close() {
    concurrentClientCount--;
  });
});

