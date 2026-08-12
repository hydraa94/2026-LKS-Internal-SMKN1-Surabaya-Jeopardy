const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const FLAG = process.env.FLAG || 'LKS{h34d_hunt3r_4_f0und_m3_v14_h34d3rs}';

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (method === 'GET') {
        if (url === '/' || url === '/index.html') {
            fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Error loading index.html');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            });
        } else if (url === '/script.js') {
            fs.readFile(path.join(__dirname, 'public', 'script.js'), (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Error loading script.js');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.end(data);
            });
        } else {
            res.writeHead(404);
            res.end('Not Found');
        }
    } else if (method === 'POST' && url === '/flag') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'X-CTF-Flag': FLAG
        });
        res.end(JSON.stringify({
            success: true,
            message: 'Transmission complete.'
        }));
    } else {
        res.writeHead(405);
        res.end('Method Not Allowed');
    }
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}/`);
});