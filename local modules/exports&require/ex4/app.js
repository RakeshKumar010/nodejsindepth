//Example 4: Exporting function as a class
module.exports=function () {
    sname='Rakesh Kumar',
    roll=10,
    sem='4th'
    this.info=()=>{
        console.log('Student name :- ',sname);
        console.log('Roll no :- ',roll);
        console.log('Semester is :- ',sem);
    }
}