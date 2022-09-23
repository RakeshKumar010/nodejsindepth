const fs = require('fs');

                                         //crud operation in  synchronous version
//----->folder 

// create folder
    // fs.mkdirSync('rakesh');

// read folder
    // const run = fs.readdirSync('rakesh');
    // console.log(run);
    //     output:- rohan.txt

//------>file 

// create file
    // fs.writeFileSync('rakesh0.txt','My name is Rakesh .');
    // fs.appendFileSync('rakesh1.txt','My name is Rahul kumar.');       //you can use also.
    
//read file
    // const run = fs.readFileSync('rakesh.txt');
    // console.log(run);
    //     output:- <Buffer 4d 79 20 6e 61 6d 65 20 69 73 20 52 61 6b 65 73 68 20 6b 75
    //      6d 61 72 2e 4d 79 20 6e 61 6d 65 20 69 73 20 52 61 68 75 6c 20 6b 75 6d 61 72 2e>

    // const run = fs.readFileSync('rakesh.txt','utf-8');
    // console.log(run);
     //     output:- My name is Rakesh kumar.My name is Rahul kumar.
    
//update file
    // fs.appendFileSync('rakesh.txt','\n I am update.');
   
//delete file
    // fs.unlinkSync('del.txt');

//rename :- Not the part of CRUD
     // fs.renameSync('index.js','synchronous.js')
    
   

