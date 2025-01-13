const fs = require('fs');
const querystring = require('querystring');

const filePath = 'messages.txt';

// Function to handle the GET request (display messages)
function handleGetRequest(req, res) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        const messages = data ? data : '';
        const html = `
            <html>
            <head><title>Message Board</title></head>
            <body>
                <div>${messages}</div>
                <form method="POST" action="/">
                    <input type="text" name="message" required />
                    <button type="submit">Send</button>
                </form>
            </body>
            </html>
        `;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    });
}

// Function to handle the POST request (write a new message)
function handlePostRequest(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const { message } = querystring.parse(body);
        const formattedMessage = encodeURIComponent(message).replace(/%20/g, '+');
        fs.writeFile(filePath, formattedMessage, err => {
            if (err) throw err;
            res.writeHead(302, { Location: '/' });
            res.end();
        });
    });
}

module.exports = { handleGetRequest, handlePostRequest };
