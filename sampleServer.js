var http = require('http'); 
var port = 8080;
var url = require('url');

var server = http.createServer(function(req, res) { 
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.write('Bien le bonjour !<p>Voici un paragraphe <stong>HTML</strong></p>')
    res.end();
}); 

server.listen(port);
console.log('Le serveur répond sur http://127.0.0.1:' + port + '/');