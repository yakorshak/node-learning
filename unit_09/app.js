const http = require('http');
const url = require('url');
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "myfirstdb",
    password: "root",
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
});

http.createServer((request, response) => {

    if (request.method == 'GET') {
        let urlRequest = url.parse(request.url, true);

        if (urlRequest.query.task == 2) {
            let query = 'SELECT * FROM `user`';
            conn.query(query, (err, result, field) => {

                if (err) {
                    console.log(err);
                }
                let lastNames = [];

                for (let i = 0; i < result.length; i++) {
                    lastNames.push(result[i]['lastname']);
                }

                console.log(JSON.stringify(lastNames));
            });
            endConnection(conn);
            response.end('task 2');

        } else if (urlRequest.query.task == 3) {
            let query = 'SELECT email FROM `user`';
            conn.query(query, (err, result, field) => {

                if (err) {
                    console.log(err);
                }
                let emails = [];

                for (let i = 0; i < result.length; i++) {
                    emails.push(result[i]['email']);
                }

                console.log(JSON.stringify(emails));
            });
            endConnection(conn);
            response.end('task 3');

        } else if (urlRequest.query.task == 4 && typeof (urlRequest.query.email) == "string") {
            let email = urlRequest.query.email;
            let query = 'SELECT email, id FROM `user`';
            conn.query(query, (err, result, field) => {

                if (err) {
                    console.log(err);
                }

                for (let i = 0; i < result.length; i++) {

                    if (result[i]['email'] == email) {
                        console.log(result[i]['id']);
                        return;
                    } else {
                        continue;
                    }
                }

                console.log('0');
            });
            endConnection(conn);
            response.end('task 4');

        } else if (urlRequest.query.task == 5 && typeof (urlRequest.query.email) == "string") {
            let emailPart = urlRequest.query.email;
            let mainQuery = `SELECT * FROM user WHERE email LIKE '%${emailPart}%'`;
            conn.query(mainQuery, emailPart, (err, result, field) => {

                if (err) {
                    console.log(err);
                }
                let emails = [];

                for (let i = 0; i < result.length; i++) {
                    emails.push(result[i]['email']);
                }

                console.log(JSON.stringify(emails));
            });
            endConnection(conn);
            response.end('task 5');

        }
    }
}).listen(3000);

function endConnection(conn) {
    conn.end((err) => {

        if (err) {
            console.log(err);
            return err;
        } else {
            console.log('Connection with database has been ended');
        }
    });
}


