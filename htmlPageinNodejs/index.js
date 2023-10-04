const express = require('express')    // requiring the express
const path = require('path')          // requiring the pathe for html file



const app = express()             
const htmlFile = path.join(__dirname,'public') // path join use to attach directory name public

//app.use(express.static(htmlFile));              // using use function express static ()     

//2=======now using the ejs for the dynamic page ============//
 app.set('view engine','ejs');


// i wnat to remove the .html from the extention url i dont want to show the my website made on which technology
app.get('',(req,res)=>{
res.sendFile(`${htmlFile}/index.html`)    // sending file to the res  to show the file on webpage
});

app.get('/profile',(req,res)=>{

    const details = 
    {
    Name:"syed noman ali",
    age:78,
    address:"xyz road lmno street ",
    contact:12233,
    }


    res.render('profile',{details})                    //2 using the ejs file by render in the re

});

app.get('/another',(req,res)=>{
    res.sendFile(`${htmlFile}/another.html`)
    });

app.get('/sample',(req,res)=>{
res.sendFile(`${htmlFile}/sample.html`)
})

app.get('/about',(req,res)=>{
    res.sendFile(`${htmlFile}/about.html`)
    })

app.get('*',(req,res)=>{
res.sendFile(`${htmlFile}/404.html`)
})
app.listen(3000);

