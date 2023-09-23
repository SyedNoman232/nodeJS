////----------CORE MODULE--------------------////

/* THERE ARE TWO TYPES OF MODULE 

1) GLOBAL MODULE      }---- NO NEED TO IMPORT 
2) NON GLOBAL MODULE }----- NEED TO IMPORT

*/

const fs = require('fs')                              // EXAMPLE OF NON GLOBAL MODULE
const file = require('fs')
const Dts = require('fs')


Dts.writeFileSync("data3.txt","this is data three")
file.writeFileSync("data2.txt","hello every one this is second file")
fs.writeFileSync("data.txt","Details = [1,2,3,4,0,5,6,6,7,0,7]") //  HERE WE CREATED ONE TXT FILE NAMED DATA

console.log("hello every one my name is syed")        // EXAMPLE OF Global MODULE

