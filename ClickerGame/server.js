const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Check if the request is for the root path
    if (req.url === '/') {
        // Read the HTML file
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                // Set the response headers and send the HTML content
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        // If the requested URL is not the root, return a 404 error
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const PORT = process.env.PORT || 3000; // Use the provided port or default to 3000

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
