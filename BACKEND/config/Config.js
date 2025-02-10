 const mongoose = require('mongoose')
 require('dotenv').config()
 const connectDB=async()=>{
          try {
                 await mongoose.connect(process.env.MONGO_URI , { useNewUrlParser : true, useUnifiedTopology : true})  
                  console.log(">Database Connected Successfully.");
                   
          } catch (error) {
                 console.log(`> Error while connecting to mongoDB : ${err.message}`);
                  
          }
 }
 module.exports=connectDB

 