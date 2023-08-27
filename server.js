const { app } = require("./app");
const { connectDb } = require("./db/database")

connectDb();

console.log(process.env.PORT);

app.listen(4000, ()=>{
    console.log("Server is running at 4000");
})
