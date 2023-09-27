//===================in this section we learn what is async and sync===================//

// SYNCHROUNUS PROGRAMMING

     //synchronus programing run step by step , moving further it will take time to complete first one after that it goes on the se

// ASYNCHRONUS PROGRAMMING 

  //ASYNCHRONUS PROGRAMMING cant wait to finish one task immidiatly it run the anothe set of code 

  // JAVASCRIPT AND NODE JS ARE Asynchronus 

  //console.log("here started")

  /*
  setTimeout(()=>{
 console.log(" when this appear till the  {here the end will execute}")
  },3000);

  console.log("here the end")
*/
  //===========================drawback of async==================//

  /*
  let a = 20
  let b = 0                                 // for this type of problem we need to work with the promises

  

//  console.log(a+b)


  waitingData = new Promise((resolve, reject) => {
    setTimeout(()=>{
        b = 10
   },2000);  
    resolve(30)
  })
  waitingData.then((data)=>{

    b = data
    console.log(a+data)
  })
  
*/

/////===============================ANOTHER EXAMPLE OF ==========================================//
/*  
let a = 10
let b =12 

let c = a + b

console.log(a+b,"first")


let update = new Promise((resolve, reject) => {
    setTimeout(()=>{
        c=100;
        resolve(100)
    },2000)
    
});update.then((data)=>{
    data = c
    console.log(a+data,"last")                   // THIS WILL PRINT IN THE LAST BECOZ WE SET TIME OUT FOR 2 SECOND 
})


console.log(a+b,"second")

*/
//============================================ONE MORE EXAMPLE===========================================//

let Name = "noman "
let age = 23 ;

let contact = 1234455666 ;

let details = Name  +  age  +  contact;


console.log(Name," first")

ageUpdate =new Promise((resolve, reject) => {
    setTimeout(()=>{
        age = 29
        resolve(29)
    }),2000;
});ageUpdate.then((data)=>{
    data = age

    console.log(data,"age updated and last executed");    // data nothing but the updated age  which is execute after 2 sec
})


console.log(details,"second")