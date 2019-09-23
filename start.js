const http = require('http');
const getToken = require('./ManageTokens');

var kahootId = undefined;

http.createServer(function (request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    if(kahootId) {
        response.write(`Smashing kahoot: ${kahootId}\n`);
    } else {
        response.write("Inactive session\n");
    }

    var url = request.url.toUpperCase().split("/");
    console.log(url)
    if(url[1] == "START" && url[2] != undefined) {
        response.write(`Requested Kahoot Smash: ${url[2]}\n`);
        var numberOfBots = 100;
        if(url[3]) {
            numberOfBots = url[3];
        }

        response.write(`Smashing with ${numberOfBots} Bots!\n`);
        if(kahootId) {
            response.write("Stopping existing Smash\n");
            StopSmash();
        }
        response.write("Starting new Smash\n");
        StartSmash(numberOfBots,url[2]);
        response.write("Done");
    }
    if(url[1] == "STOP") {
        response.write("Requested Smash halt\n");
        StopSmash();
        response.write("Done!");
    }

    response.end();
}).listen(3000, '127.0.0.1');

function StopSmash() {
    getToken.Stop();
}

function StartSmash(number,id) {
    getToken.Start(number,id);
    setInterval(getToken.RequestAction, 20);
}

console.log("Server running...")

