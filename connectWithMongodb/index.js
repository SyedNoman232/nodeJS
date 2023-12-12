// =========first install the npm packages in terminal by write this-------> npm install mongodb===========..//

const { MongoClient } = require('mongodb'); // require mongodb
const url = 'mongodb://127.0.0.1:27017'; // require path for mongo db       // 2 hrs consfused and got error bcoz using localhost
const dataBase = 'e-com'
const client = new MongoClient(url); // cleint stored the  mongo db url

async function getData()
 {                                      // calling get getData function
  let result = await client.connect(); // in the getdata cleint connect storing data in the result need to async await mongodb data need it

  let db = result.db(dataBase);

  let collection = db.collection('products');

  let response = await collection.find({}).toArray();
  console.log(response);
};

getData();
setTimeout(function(){
console.log("i think data is loaded")
},4000);R