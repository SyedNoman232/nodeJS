// what are middleware and typs of middlewear/////////

// in this part we learn only application middleware
const express = require('express')

const app = express()

//================app level middleware this middlewear apply on all pages .=======================//
const reqFilter =(req,res,next)=>{                  // here using the middleware
    if(!req.query.age){
          res.send("pplease provide your age")       // befor the main page come it show the msg please provide age
    }else if(req.query.age<=20){
        res.send("you cant access this page please ")
    }else{
      next();                                          
    }
    
  }
//  app.use(reqFilter)                     // this line of code apply middleware on the whole app pages 


app.get('/',(req,res)=>{
 res.send("Hello welcome to the home page")
})

app.get('/user',(req,res)=>{
    res.send("Hello welcome to the user page")
    console.log("all good")
   });

  
//===========================route level middleware ========================//
// it applay only the route level as per your demand to apply//


app.get('/personal',reqFilter,(req,res)=>{         // i want to apply the middle ware only on this page bcoz its personal 

    res.send("welcome to the personal page")       
});

app.get('/about',(req,res)=>{
    res.send("this page about me")
});

app.listen(4000);
