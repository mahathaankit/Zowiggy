const mongoose = require('mongoose')
// const mongoDbClient = require("mongodb").MongoClient
const mongoURI = 'mongodb://zowigy:zowigy123@ac-bl5w1b2-shard-00-00.i6yxj8g.mongodb.net:27017,ac-bl5w1b2-shard-00-01.i6yxj8g.mongodb.net:27017,ac-bl5w1b2-shard-00-02.i6yxj8g.mongodb.net:27017/Zowigy?ssl=true&replicaSet=atlas-1oe6n5-shard-0&authSource=admin&retryWrites=true&w=majority' // Customer change url to your db you created in atlas
// mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
// module.exports = function (callback) {
//     // mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//     //     // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
//     //     if (err) console.log("---" + err)
       
//             // var database =
//             console.log("connected to mongo")
//             // const foodCollection = mongoose.connection.db.collection("Fooditems");
//             const foodcollection=mongoose.connection.db.collection("Fooditems");
//             foodCollection.find({}).toArray(function (err, data) {
//                 const categoryCollection =  mongoose.connection.db.collection("FoodCategory");
//                 categoryCollection.find({}).toArray( function (err, Catdata) {
//                     callback(err, data, Catdata);

//                 })
         
//             // listCollections({name: 'food_items'}).toArray(function (err, database) {
//             // });
//             //     module.exports.Collection = database;
//             // });
        
//     })
// };
const  mongoDB=()=>{
mongoose.connect(mongoURI,()=>{
    console.log("Connected succesfully");
    const foodcollection=mongoose.connection.db.collection("Fooditems");
                foodCollection.find({}).toArray(function (err, data) {
                    const categoryCollection =  mongoose.connection.db.collection("FoodCategory");
                    categoryCollection.find({}).toArray( function (err, Catdata) {
                     if(err) console.log(err);
                     else {
                        global.food_items=data;
                        FloatingLabel.foodCategory=Catdata;
                     }
    
                    })
})
})}
module.exports=mongoDB;