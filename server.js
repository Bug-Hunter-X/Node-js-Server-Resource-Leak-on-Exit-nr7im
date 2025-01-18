const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  console.log('Request received');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Error is that the server is not closing properly when the process ends, leading to resource leaks.