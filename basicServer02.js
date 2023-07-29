const http = require('http');

http.createServer((req,res)=>{// ARROW FUNCTION 
res.write("<h1>Hello This Is First Fesponse from SYED NOMAN ALI </h1>");
res.end();
}).listen(1000);
/* 
Q = what http module does
A = it handle response and request in node js
*/
