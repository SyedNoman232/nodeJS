//=========befor we started the this code i installed the express using the command {npm install express} then package will be store in the json file//========= 

/*

const express = require('express')                  
const app = express()

app.get('',(req,res)=>{
    res.send('hello this is home page');
});


app.get('/About',(req,res)=>{
   res.send('hello this is about page');
});

app.listen(2100);

*/

//======================again tryed on the port 9000===============//

const express = require('express')

const app = express()

app.get('',(req,res)=>{
 res.send('just try for home page</h1>');
});

app.get('/About',(req,res)=>{
 res.send('hello welcome to about page')
})

app.get('/Contact',(req,res)=>{
  res.send('here is personal contact number 123478899877')
})

app.listen(9000);