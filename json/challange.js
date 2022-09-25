const fs =require('fs');

const student ={
    name:"Rakesh kumar",
    roll:24,
    sem:"3rd"
};


const jsondata1= JSON.stringify(student);
console.log(jsondata1);
fs.writeFile("demo.json",jsondata1,(err)=>{
    console.log('done');
});

//read JSON file
fs.readFile("demo.json","utf-8",(err,data)=>{
    console.log(data);
    const objfile = JSON.parse(data);
     console.log(objfile);
});
