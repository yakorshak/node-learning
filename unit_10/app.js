const http = require('http');
const url = require('url');


http.createServer(function (req, res){
    if (req.method == 'GET'){
        let urlParts = url.parse(req.url);
        switch (urlParts.pathname) {
            case '/main':
                main(req, res);
                break;
            case '/about':
                about(req, res);
                break;
            case '/cat':
                cat(req, res);
                break;
            default:
                page404(req, res);
                break
        }
    } else {
        res.end('request.method is not a GET');
    }
}).listen(3000);

function main(req, res) {
    res.end('main');
}

function about(req, res) {
    res.end('about');
}

function cat(req, res) {
    let urlParts = url.parse(req.url);

    if (urlParts.path == '/cat?lang=ru') {
        res.end('ru');

    } else if (urlParts.path == 'cat?lang=en') {
        res.end('en');

    } else {
            res.end('en');
    }
}

function page404(req, res) {
    res.end('404');
}