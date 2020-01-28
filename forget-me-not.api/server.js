const http = require('http');

const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';
// const app = require('./app');

const server = http.createServer();

server.listen(port, hostname, () => {
  setInterval(() => {
    console.log(`Server running at http://${port}/`);

  }, 1000);
});