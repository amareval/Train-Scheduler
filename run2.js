var http = require("http");

var server = http.createServer(handleRequest);{
    console.log("you are a huge loser")
    response.end("It Works!! You're a winner " + request.url);
}

var port2 = 7500



server.listen(port2, function(){
    console.log("Server listening on: http://localhost:" + port2);

    console.log("You are loser")
});
