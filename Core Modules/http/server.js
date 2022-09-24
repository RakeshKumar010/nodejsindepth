const http=require('http');
const fs =require('fs'); 

const port =3000;
const hostname='localhost';
const website = fs.readFileSync('index.html'); 

const server  = http.createServer((req,res)=>{
    // res.writeHead(404,{'content-type':'text/html'});
    res.statusCode=200;
    res.setHeader('content-type','text/html')
    res.end(website);   
});
// const server  = http.createServer((req,res)=>{
//     res.writeHead(404,{'content-type':'text/html'});
//     res.end(website);
// }).listen(port);

//we can also user this listen method

server.listen(port,hostname,()=>{
    console.log(`server is open at http://${hostname}:${port}`);
});