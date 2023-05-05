
module.exports = {


    viewCart:(req,res)=>{
        console.log("view cart reached")
        res.send("view cart rreached")
    },

    addProductToCart : (req,res)=>{

        res.send("add product to cart reached")
    },

    removeProductToCart : (req,res)=>{

        res.send("remove product to cart reached")
    },

    updateProductInCart : (req,res)=>{

        res.send("update product in cart reached")
    },



}