// This part is like hiring a 'Delivery Boy' to carry data
const http = require('http'); 

// We create the 'Brain' here
const server = http.createServer((request, response) => {
    
    // We tell the brain to send a 'Success' message
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // This is the message the server sends
    response.end('Hello Sridhar! Your Backend is now alive and running.');
});

// We tell the brain to listen on Port 3000
server.listen(3000, '127.0.0.1');

console.log('Server is running at http://127.0.0.1:3000/');