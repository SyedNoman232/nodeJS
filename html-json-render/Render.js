const express = require('express')

const app = express()

app.get('/',(req,res)=>{  // ============HOME PAGE =========================================//
    res.send(`<center><h1>hello everyone this is the page of my practice</h1></center> `) // u can write html like this but too lenthy process to load
})

app.get('/About',(req,res)=>{
    res.send(`<h1>welcome to about page</h1>`)  // THIS IS THE ABOUT PAGE
})

app.get('/Login',(req,res)=>{                   // LOGIN PAGE

                                                         // we can take data with the queryparameter
    res.send(`<h2><center>Please Login First</h2> 
     <center>
     <div>                                               
          <input type = "text" placeholder ="user name " value = "${req.query.name}" /> 
          <br>
          <br>
          <input type="password" >
          <br>
          <br>
          <button>lets Go</button
          <br>
          <br>

          <footer>
          <h1>PLEASE PROVIDE CORRECT INFO TO AVOID INCONVENEANT</h1>
          </footer>

          
     </div>
     </center>
    `) 
})

// as shown aboe we ca write html code like this in the res.send 
app.listen(3100);
