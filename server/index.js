const app = require("express")();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.get('/playgame', (req, res) => {
    const data = { message: 'Hello from Node.js backend!' };
    res.json(data);
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

const webSocketServer = require('websocket').server;
const http = require('http');
const webSocketServerPort = 9090;

// Start the http server and the websocket server
const server = http.createServer();
server.listen(webSocketServerPort);

const wsServer = new webSocketServer({
	httpServer: server
});

// I'm maintaining all active connections in this object
const gameID = generateGUID();
const game = {
    gameID : gameID,
    clients : []
}
const clients = {};


wsServer.on('request', function(request) {
	var userID = generateGUID();

	console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');

	const connection = request.accept(null, request.origin);

	clients[userID] = connection;
	console.log('connected: ' + userID + 'for game ' + gameID)
})

const generateGUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
