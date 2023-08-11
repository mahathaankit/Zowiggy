
// global.foodData = require('./db')(function call(err, data, CatData) {
//   // console.log(data)
//   if(err) console.log(err);
//   global.foodData = data;
//   global.foodCategory = CatData;
// })

// const express = require('express')
// const app = express()
// const port = 5000
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
// app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.use('/api/auth', require('./Routes/Auth'));

// app.listen(port, () => {
//   console.log(`Example app listening on http://localhost:${port}`)
// })
const express = require('express')
const app = express()
const port = 5000;
const mongoDB=require("./db");
const { mongo } = require('mongoose');
mongoDB();
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000"),
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    ),
    next();
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());
// app.use('/api',require("./Routes/Userdata"));

// app.use('/api',require("./Routes/Displaydata"));
// app.use('/api',require("./Routes/Orderdata"));
app.use('/api',require("./Routes/Auth"))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})