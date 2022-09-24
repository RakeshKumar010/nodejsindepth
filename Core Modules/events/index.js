// const events =require('events');
// const eventEmitter = new events.EventEmitter();

const EventEmitter= require('events');
const event= new EventEmitter();

event.on("myname",()=>{
    console.log("open server");
});
event.emit("myname");


