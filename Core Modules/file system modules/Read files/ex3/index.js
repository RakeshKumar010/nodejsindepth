const http = require('http');
const fs = require('fs')


const file=fs.readFileSync("app.html");
const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text/html');
  res.end(file);
});

server.listen(3000,'localhost', () => {
  console.log(`Server running at http://${'localhost'}:${3000}/`);
});