const fs=require('fs');
const name=fs.readFileSync('app.txt',"utf-8");
console.log(name);