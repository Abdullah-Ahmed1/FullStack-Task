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
            if(cart.length==0)return res.send({
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
            const cart  = await Cart.findOne({})
            console.log("-->>>",cart)
            if(!cart){
                const createdCart= await Cart.create({
                    products :[]
                })
                console.log("===>",createdCart)
                await Cart.updateOne(
                    {_id :createdCart._id},
                    { $push: { 'products': {
                        item : req.params.productId,
                        quantity : req.body.quantity
                    } } },
                    {upsert: true}
                )
                return  res.status(200).send({
                    message:"product added to cart"
                })
   
            }

            await Cart.updateOne(
                {_id :cart._id},
                { $push: { 'products': {
                    item : req.params.productId,
                    quantity : req.body.quantity
                } } },
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

    removeProductFromCart : async(req,res)=>{
        try{
            const cart  = await Cart.findOne({})
            console.log("cart is :",cart)
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

            await Cart.updateOne(
                {_id :cart._id},
                { $pull: { 'products': {_id: req.params.productId} } },
                {upsert: true}
            )
            return  res.status(200).send({
                message:"product removed from cart"
            })


        }catch(err){
            console.log(err)
            return res.status(400).send({
                message :"something went wrong"
            })
        }
        
    },

    updateProductInCart : async(req,res)=>{

        try{
            const cart  = await Cart.findOne({})
            if(!cart){
                return res.send({
                    message :"cart is empty"
                })
            }
            if(cart.products.length==0){
                return res.send({
                    message :"cart is empty"
                })
            }
            await Cart.updateOne(
                {_id :cart._id,"products._id":req.params.id},
                { $set: {"products.$.quantity": req.body.quantity} },
                {upsert: true}
            )

            return res.status(200).send({
                message :"quantity updated successfully"
            })

        }catch(err){
            return res.status(400).send({
                message :"something went wrong"
            })
        }
    },



}