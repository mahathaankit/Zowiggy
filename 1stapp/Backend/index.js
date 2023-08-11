// const express = require('express')
// const app = express()
// const port = 4000;
// const mongoDB=require("./db")
// mongoDB();
// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000"),
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin,X-Requested-With,Content-Type,Accept"
//     ),
//     next();
// })
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.use(express.json());
// app.use('/api',require("./Routes/Userdata"));

// app.use('/api',require("./Routes/Displaydata"));
// app.use('/api',require("./Routes/Orderdata"));


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// const express = require('express');

// const app = express();
// const cors = require('cors');
// const port = 4000;
// const mongoDB = require("./db");

// // Connect to MongoDB
// mongoDB();

// // Middleware for CORS
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// // Middleware for parsing JSON
// app.use(express.json());

// // Routes
// app.use('/api', require("./Routes/Userdata"));
// app.use('/api', require("./Routes/Displaydata"));
// app.use('/api', require("./Routes/Orderdata"));
// app.use(cors());

// // Error handling middleware (if needed)
// app.use((err, req, res, next) => {
//   // Handle the error and send an appropriate response
//   res.status(500).json({ error: err.message });
// });

// // Default route
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// const express = require('express')
// const app = express()
// const port = 4000;
// const mongoDB = require("./db")

// mongoDB();

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"),
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin,X-Requested-With,Content-Type,Accept"
//     ),
//     next();
// })



// app.use(express.json());
// app.use('/api', require("./Routes/Userdata"));
// app.use('/api', require("./Routes/Displaydata"));
// app.use('/api', require("./Routes/Orderdata"));
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
global.foodData = require('./db')(function call(err, data, CatData) {
  // console.log(data)
  if(err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})

const express = require('express')
const app = express()
const port = 5000
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./Routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})