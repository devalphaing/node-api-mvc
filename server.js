const { app } = require("./app");
const { connectDb } = require("./db/database")

connectDb();

app.listen(process.env.PORT, ()=>{
    console.log("Server is running at 4000");
})
