
const express =require('express');
const app= express();
const port =3000;

app.get('/',(req,res)=>{
    res.status(200).send('home');
})
app.get('/menu',(req,res)=>{
    res.status(200).send('menu');
})
app.get('/service',(req,res)=>{
    res.status(200).send('service');
})
app.get('/about',(req,res)=>{
    res.status(200).send('about');
})
app.get('/this',(req,res)=>{
    res.status(404).send('about');
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});