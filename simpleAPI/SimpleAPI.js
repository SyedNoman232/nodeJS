const http = require('http')   // this is http request handler

const data = require('./data.js')
http.createServer((req,res)=>{                                  //   creating server 
    res.writeHead(200,{'content-type':'application\json'})      //   200 get response we want content as a applicaton type json

// follwing the res writing some info and using the json.stingyfy for getting data in string and the json format


    res.write(JSON.stringify(data));

    res.end();                      // after that need to end the res


}).listen (3300);                  // listning on the port 3300 


//===================================================================================================================//
// creating a file with the command of node js terminal 

const fs = require('fs')                           // file system is require

const file = process.argv;                        // special command feature to proccess 


//================lets add thin into if else======================================================================
// WE CAN ADD  REMOVE THE FILE USINGTHE COMMAND OF THE NODEJS
if(file[2]=='add'){                                      // index value 2 file name (fruit.txt)
                                                        // index value 3 text in file ('this is list of fruits')
    fs.writeFileSync(file[3],file[4]); 

}else if(file[2]=='remove'){

    fs.unlinkSync(file[3]);
}else

    console.log("kuch bhi mat dal delete kar nai to add kr sharookh")     
                                                   

