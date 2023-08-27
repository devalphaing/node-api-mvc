const express = require("express")
const userRoute = require("./routes/users");
const { config } = require("dotenv");

const app = express();

config({
  path: "./.env"
})

// Set up middleware and configurations
app.use(express.json());
app.use("/users", userRoute);

module.exports = { app } 
