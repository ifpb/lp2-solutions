const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 10000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain: charset = utf-8");

  const hello = {
    "/pt": "Olá mundo!",
    "/en": "Hello world!"
  };

  res.end(hello[req.url]);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});