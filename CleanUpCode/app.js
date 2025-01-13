const http = require('http');
const { handleGetRequest, handlePostRequest } = require('./route'); // Import functions from route.js

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        // Call the function for handling GET requests
        handleGetRequest(req, res);
    } else if (req.method === 'POST') {
        // Call the function for handling POST requests
        handlePostRequest(req, res);
    } else {
        // Handle other methods (optional)
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

server.listen(3001, () => {
    console.log('Server running at http://localhost:3001');
});
