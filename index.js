import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  let responseHtml = `
  Build: green,
  Velocity: 1,
  Volatility: 2,
  Release Count: 100000000000
  `

  res.end(responseHtml)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});