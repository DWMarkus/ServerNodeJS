let http = require('http'); 
var port = 8080;
var url = require('url');
let fs = require('fs');

// express

let handleRequest = (request, res) => {
    var page = url.parse(request.url).pathname;
    res.writeHead(200, {
        "Content-Type": 'text/html'
    });

    if(page == '/') {
        res.write('Salut tout le monde ! <br>');
        res.write('<a href="/ampoule">Ampoule</a> <br>');
        res.write('<a href="/captcha">Captcha</a> <br>');
        res.write('<a href="/hash">Hash</a> <br>');
        res.end();
    }

    if(page == '/ampoule') {
        fs.readFile('./OnOff.html', null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Whoops! Fichier inconnu.');
            } else {
                res.write(data);
            }
            res.end();
        }); 
    };

    if(page == '/captcha') {
        fs.readFile('./captcha.html', null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Whoops! Fichier inconnu.');
            } else {
                res.write(data);
            }
            res.end();
        }); 
    };

    if(page == '/hash') {
        fs.readFile('./hash.html', null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Whoops! Fichier inconnu.');
            } else {
                res.write(data);
            }
            res.end();
        }); 
    };
 
};

http.createServer(handleRequest).listen(port);
console.log('Le serveur répond sur http://127.0.0.1:' + port + '/');