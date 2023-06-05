const http = require("http");

let numberOfRequest = 0;

const server = http.createServer((req, res) => {
    res.setHeader("content", "text/html");
    
    numberOfRequest += 1;

    resContent = `Deja ${numberOfRequest} visiteur(s) sur ce serveur!\n`;
    if (numberOfRequest >= 100 && numberOfRequest < 300) {
        resContent += "Deja une foule de visiteurs";
    }
    if (numberOfRequest >= 300 && numberOfRequest < 1000) {
        resContent += "Deja une legion de visiteurs sur ce serveur !!";
    }
    if (numberOfRequest >= 1000 && numberOfRequest < 1500) {
        resContent += "Deja une myriade de visiteurs sur ce serveur !!!";
    }
    if (numberOfRequest >= 1500) {
        resContent += "Facebook n'a qu'a bien se tenir !!!";
    }
    
    res.write(resContent);
    res.end();
    
});

server.listen(3000);