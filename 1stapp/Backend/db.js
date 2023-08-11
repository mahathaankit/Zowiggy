const mongoose = require('mongoose');;
// const mongoURL="mongodb+srv://zowigy:zowigy123@cluster0.i6yxj8g.mongodb.net/Zowigy?retryWrites=true&w=majority"URL
const mongoURI="mongodb://zowigy:zowigy123@ac-bl5w1b2-shard-00-00.i6yxj8g.mongodb.net:27017,ac-bl5w1b2-shard-00-01.i6yxj8g.mongodb.net:27017,ac-bl5w1b2-shard-00-02.i6yxj8g.mongodb.net:27017/Zowigy?ssl=true&replicaSet=atlas-1oe6n5-shard-0&authSource=admin&retryWrites=true&w=majority"
// const mongoDB=async()=>{
//    await mongoose.connect(mongoURL,{useNewurlParser:true},async(err,result)=>{
//     if(err)console.log(err);
//     else{
//         console.log("connected succesfully");
//        const fetchdata=mongoose.connection.db.collection("Fooditems");
//        await fetchdata.find({}).toArray(function(err,data){
//         const foodtype=mongoose.connection.db.collection("FoodCategory");
//     foodtype.find({}).toArray(function(err,catdata){
//             if(err)console.log(err);
//             else{
//                 global.Fooditems=data;
//                 global.FoodCategory=catdata;
//             }
//         })

//             // if(err)console.log(err);
//             // else global.food=data;
          

//         })
//     }
       
//     });
// }
// module.exports=mongoDB;
module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            // var database =
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("Fooditems");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("FoodCategory");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            });
            // listCollections({name: 'food_items'}).toArray(function (err, database) {
            // });
            //     module.exports.Collection = database;
            // });
        }
    })
};