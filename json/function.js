                                    /*   JSON   */

     

const student ={
    name:"Rakesh kumar",
    roll:24,
    sem:"3rd"
};
// Object
console.log(student);
console.log(student.name); //it is working

//Object to JSON
const data1 =JSON.stringify(student);
console.log(data1);
console.log(data1.name); //it is not working


//JSON to Object
const data2 = JSON.parse(data1);
console.log(data2);
console.log(data2.name); //it is working
