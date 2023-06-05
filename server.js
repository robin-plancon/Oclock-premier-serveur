const http = require("http");

// We create a server and describe his behaviors.
const server = http.createServer((req, res) => {

    // We prepare the response.
    res.write("Bonjour");

    // We send the response.
    res.end();
});

server.listen(3000);