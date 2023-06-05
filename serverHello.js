const http = require("http");

const bonjours = ["Barev", "Ave", "Dobre rano", "Hei"];
// We create a server and describe his behaviors.
const server = http.createServer((req, res) => {

    res.setHeader("content", "text/html;charset=UTF8");

    res.write(bonjours[random(0,bonjours.length - 1)]);
    // We prepare the response.
    

    // We send the response.
    res.end();
});

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

server.listen(3000);