const fs = require('fs');

                               //crud operation in  Asynchronous version

//------>file 

// create filea 
    //callback function without parameter
    // fs.writeFile('rakesh.txt','I am writeFile Method',()=>{
    //     console.log('file is created');
    // });

    //callback function with catch the error.
    // fs.writeFile('rakesh.txt','I am writeFile Method',(err)=>{
    //     console.log('filr is created');
    //     console.log(err);
    // });

// Read files
    
    //callback function with catch the err and data.
        //    fs.readFile('rakesh.txt','utf-8',(err,data)=>{
        //         console.log(err);
        //         console.log(data);
        //     })
    
// Update files
    //callback function without  parameter
        // fs.appendFile('rakesh.txt','\n i am appdenFile method.',()=>{
        //     console.log("Your file is updated");
        // });


// Delete files
    //callback function without parameter
        // fs.unlink('rakesh.txt',()=>{
        //     console.log('your file is deleted');
        // });

        // fs.unlink('rakesh.txt',(err,data)=>{
        //     console.log('your file is deleted');
        //     console.log(err);
        //     console.log(data);
        // });
        

//rename file : Not the part of CRUD
    //callback function without parameter
    // fs.rename('rakesh.txt','rahul.txt',()=>{
    //     console.log("Succussfully rename.");
    // })
    //callback function with catch err and data
    // fs.rename('rahul.txt','rakesh.txt',(err,data)=>{
    //     console.log("Succussfully rename.");
    //     console.log(err);
    //     console.log(data);
    // })
        