const http=require('http');
const fs =require('fs');

const port =3000;
const hostname='localhost';
const website = fs.readFileSync('index.html');

const server  = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(website);


});

server.listen(port,hostname,()=>{
    console.log(`server is open at http://${hostname}:${port}`);
});