const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  const data = {
    m: "wonsama:255:0:0",
  };

  res.end(JSON.stringify(data));
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
