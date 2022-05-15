const http = require('http');
const url = require('url');
const {parse} = require('querystring');

const t2 = (req, res) => {
    return res.end('800');
}

const t3 = (req, res) => {
    return res.end('900');
}

const t4 = (req, res) => {
    return res.end('1100');
}

const t5 = (req, res) => {
    return res.end('1200');
}

http.createServer((req, res) => {
    let body = '';
    let urlRequest = url.parse(req.url, true);

    if (req.method == 'GET' && urlRequest.query.t == 80) {
        t2(req, res);
    } else if (req.method == 'GET' && urlRequest.query.t == 90) {
        t3(req, res);
    } else if (req.method == 'POST') {
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            let params = parse(body);
            if (params.h == 80) {
                t4(req, res);
            } else if (params.h == 90) {
                t5(req, res);
            } else {
                res.end('404');
            }
        });
    } else {
        res.end('404');
    }
}).listen(3002);

