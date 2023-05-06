const Mongoose = require("mongoose");
const Product = Mongoose.model("Product");

module.exports = {

    createProduct :async (req,res)=>{
        try{
            const product = await Product.findOne({
                "name" :req.body.name
            })
            if(product) return res.send({
                message:"product with given name already exist"
            })

            await Product.create(req.body)
            return res.send({
                message:" product created successfully"
            })
        }catch(err){
            console.log(err)
            return res.status(400).send({
                message :"something went wrong"
            })
        }
    }
}