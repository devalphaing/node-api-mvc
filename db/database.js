const mongoose = require("mongoose");

const connectDb = () => {
  // Connect to MongoDB database
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendapi",
    })
    .then((res) => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { connectDb };