const fs = require('fs')                                              // rquire file system request

const path = require('path')                                          // path for wher i want to put my file

const dirPath = path.join(__dirname,'CreateFile')                     // in the dir path there is a folder create file

for(i=0 ; i<2 ; i++){                                                 // running  a loop to create five file 

    fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple file")       // creating file named hello with number sequence with the inside file a text (a simple file)
}
console.log('hello world')

for(i=0; i<=2; i++){
    fs.writeFileSync(dirPath+"/next"+i+".txt","simple of next file")    // using the loop created again 9 file in one time
}

//=======you can delete this all file with using the (unlinksync )================================//

//====================now i need to check all file in the terminal===============================//


fs.readdir(dirPath,(err,CreateFile)=>{
    
   CreateFile.forEach((item)=>{
      console.log("this is the file",item)
   })
})