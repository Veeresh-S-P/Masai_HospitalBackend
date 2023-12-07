require("dotenv").config();

const mongoose = require("mongoose");



const connection = mongoose
  .connect(process.env.mongourl)
  .then(() => {
    console.log("Connected to MongoDB");
  })

   
    .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });



module.exports = { connection };
