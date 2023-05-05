const express= require("express")
require("./connection/connection");
const app = express()

app.listen(5000,()=>{
   console.log("your app is running on port 5000")
})