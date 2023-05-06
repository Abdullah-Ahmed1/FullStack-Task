const express = require("express")
const cors = require('cors')
require("./connection/connection");
const app = express()

app.use(express.json())
app.use( cors())
const cartRouter = require('./routes/cartRoutes')
app.use('/cart',cartRouter)
const productRoute = require('./routes/productRoutes')
app.use('/product',productRoute)

const saleRoute = require('./routes/saleRoute')
app.use('/sale',saleRoute)

app.listen(5000,()=>{
   console.log("your app is running on port 5000")
})