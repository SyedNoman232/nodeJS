const http = require('http')                   // here is we taking the http request


http.createServer((req,res)=>{                 // creating the server by using arrow function  with two parameter
                                               // require and request res.write for write on page
res.write("<h1><center>Hello HOW WAS YOUR DAY Everyone</center</h1>");
res.end()  
                                    //res.end() need to call for end response
    
}).listen(1200);                  // here we listining or seeing on port 1200 in browser


//------------------------------following are the old method and its lenthy proccess -----------------------------------------//

/*

function Data(req,res){
    res.write("<h1>Hello Everyone goood day</h1>");
    res.end()
}
http.createServer(Data).listen(1200);

*/

console.log("hello")

