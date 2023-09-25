
//===========================[C] = creating the file==========================//

const fs = require('fs')          // fs system require in this file

const path = require('path')     // path require in for this file

const dirPath = path.join(__dirname,'CRUD-with-fs')  // here giving dir name where we want the file 

const filePath = `${dirPath}/fruits.txt`            // location of path and name of file constant

const file2path = `${dirPath}/pulses.txt`


// fs.writeFileSync(file2path,'here the list of pulses',)

// fs.writeFileSync(filePath,"THIS IS SIMPLE TXT FILE CONATAIN THE TYPES OF FRUITS")    // this is the file for file write content IN THE TXT FILE

//============================[R]= Reading the file============================//

// reading the file using readfile

/*
fs.readFile(filePath,'utf8',(err,item)=>{                   // but it will show the buffer and number
   console.log(item)                                 // for that use the parameter'utf8' after file path as string 
})

*/

//============================[U]==Update the file =============================//

/*
fs.appendFile(filePath,'<br> list is updated fruits.txt<br>',(err)=>{
    if(!err) console.log('file updated please check file')
})

*/

//===========================[RENAME FILE ]========NOT THE CURD PART BUT  WE SHOULD KNOW ABOUT IT============//
/*

fs.rename(filePath,`${dirPath}/vegitables.txt`,(err,)=>{
 if(!err) console.log("file rename done")
})

*/

//===========================[D]==Delete file=================================================================//

// fs.unlinkSync(`${dirPath}/vegitables.txt`)   // here we deleted the updated file fruits.txt to vegitables.txt