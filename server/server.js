const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const {Server} = require("socket.io");
const URL = process.env.URL || "localhost"
const PORT = process.env.PORT || "3000"

app.use(cors());

const server = http.createServer(app);

const io = new Server(server , {
    cors: {
        origin: `http://${URL}:3001`,
        methods: ["GET", "POST"]
    },
});

io.on ("connection" , (socket) =>{
    console.log(`User connected: ${socket.id}`);

    socket.on("join_room", (data) =>{
        socket.join(data);
        console.log(`User with ID : ${socket.id} joined room ${data}`)
    });

    socket.on("disconnect" , () => {
        console.log("User disconnected");
    });

});

server.listen(PORT , () => {
    console.log(`Server running at http://${URL}:${PORT}`);
});