const http = require('http');
const fs= require('fs');

// const file=fs.readFileSync('index.html');

const server =http.createServer((req,res)=>{
    url=req.url;
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    if(url=='/'){
        res.end('home');
    }
    else if(url=='/menu'){
        res.end('menu');
    }
    else if(url=='/servies'){
        res.end('servies');
    }
    else{
        res.statusCode=404;
        res.end('404 error');
    }
}).listen(3000);