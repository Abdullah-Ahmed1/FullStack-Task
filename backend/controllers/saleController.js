const Mongoose = require("mongoose");
const Product = Mongoose.model("Product");
const Cart = Mongoose.model("Cart");
const Sale = Mongoose.model("Sale");
module.exports={
    addSale : async (req,res)=>{
        try{
            const cart =  await Cart.find({})
            if(!cart){
                return res.send({
                    message :"cart is already empty"
                })
            }
            if(cart.products.length==0){
                return res.send({
                    message :"cart is already empty"
                })
            }
            await Sale.create({
                products: cart.products,
                createAt:new Date()
            })

            await Cart.deleteMany({})
            

        }catch(err){
           return res.status(400).send({
            message :'something went wrong'
           })
        }
    }
    ,
    viewSale:async(req,res)=>{
        try{
            const sale = await Sale.find({}) 

            return res.send({
                sale
            })
        }catch(err){
            return res.status(400).send({
                message :'something went wrong'
               })
        }
    }
}