const express= require("express")
require("./connection/connection");
const app = express()


const cartRouter = require('./routes/cartRoutes')
app.use('/cart',cartRouter)
const productRoute = require('./routes/productRoutes')
app.use('/product',productRoute)

app.listen(5000,()=>{
   console.log("your app is running on port 5000")
})