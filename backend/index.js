const express= require("express")
require("./connection/connection");
const app = express()


const cartRouter = require('./routes/cartRoutes')
app.use('/cart',cartRouter)
const cartRouter = require('./routes/productRoutes')
app.use('/product',cartRouter)

app.listen(5000,()=>{
   console.log("your app is running on port 5000")
})