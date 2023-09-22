// ----here i want to import data from the import named  file-----// 
const file = require('./import.js') //  always on top 


console.log(file.x) // printing the data of another file 
console.log(file.y)
console.log(file.z()) // z is functon thats why need to call as call funtion in console

//------------------------------------------------------------------------------------------------------------//

const Array =[1,2,20,3,4,5,6,7,8,20,5]          // this is example of array 

const result =Array.filter((item)=>{            // using the methode named the filter for array 
   // return item === 5 || item ===20           // here in the array two value are repeat to print both value we used the conditional or expression
    return item>=5                              // it will print the value of array which is greater and equal to the 5
});

console.log(result)


//-----------------------------------------------------------------------------------------------------------------------//



