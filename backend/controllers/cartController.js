const Mongoose = require("mongoose");
const Cart = Mongoose.model("Cart");

module.exports = {


    viewCart:async (req,res)=>{
        console.log("view cart reached")
        try{
            const cart = await Cart.find({})
            if(!cart)return res.send({
                msg: "cart is empty"               
            })

            return res.send(({
                cart
            }))
        }catch(err){
            console.log(err)
            return res.status(400).send({
                message :"something went wrong"
            })
        }
    },

    addProductToCart : async(req,res)=>{
        try{
            const cart  = await Cart.find({})
            if(!cart){
                const createdCart= await Cart.create({
                    items :[]
                })
                await Cart.updateOne(
                    {_id :createdCart._id},
                    { $push: { 'items': req.params.productId } },
                    {upsert: true}
                )
                return  res.status(200).send({
                    message:"product added to cart"
                })
   
            }

            await Cart.updateOne(
                {_id :createdCart._id},
                { $push: { 'items': req.params.productId } },
                {upsert: true}
            )
            return  res.status(200).send({
                message:"product added to cart"
            })


        }catch(err){
            console.log(err)
            return res.status(400).send({
                message :"something went wrong"
            })
        }
        
    },

    removeProductToCart : (req,res)=>{

        res.send("remove product to cart reached")
    },

    updateProductInCart : (req,res)=>{

        res.send("update product in cart reached")
    },



}