//============================in this we are going to  undersatnd how node js work====================//

console.log("start")                    // now in the terminal first print start


setTimeout(()=>{
    console.log("second")               // in the last this will print
},2000);

setTimeout(()=>{                       // becoz of the settime zero it will print after the last line of progaram 
    console.log('third')
},0)


console.log("last line of programe")     // second print this

