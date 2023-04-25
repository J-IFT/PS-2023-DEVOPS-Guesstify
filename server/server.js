const express = require("express");
const socketio = require("socket.io");

const app = express();

const clientPath = `${__dirname}/../`;
app.use(express.static(clientPath));

app.get("/", (req, res) => {
    res.sendFile(`${clientPath}/index.html`);
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
    guessIs = randomIntFromInterval(1, 5);
});

const io = socketio(server);

var connectedPlayerList = {};
const guessList = {
    1: "kavinsky",
    2: "daft punk",
    3: "daft punk",
    4: "M83",
    5: "air",
}

var guessIs;

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function setNewGuess(socket){
    guessIs = randomIntFromInterval(1, 5);
    socket.broadcast.emit('guessIs', guessIs);
    socket.emit('guessIs', guessIs);
}

io.on('connection', (socket) => {
    socket.emit('guessIs', guessIs);

    socket.on('playerConnection', (response) => {
        console.log(response)
    });

    socket.on('playerGuess', (response) => {
        if (response.guess == guessList[guessIs]){
            console.log('guessed')
            setNewGuess(socket);
            socket.broadcast.emit('endGame', response.nickname + 'a trouvé. Bravo.')
            socket.emit('endGame', response.nickname + 'a trouvé. Bravo.')
        }
    });    
});