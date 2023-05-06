import CartTable from "../components/cartTable"
import ResponsiveAppBar from "../components/navbar"
import Button from '@mui/material/Button';

const Cart = ({cart,refreshProducts})=>{
    return(
        <div>
            <ResponsiveAppBar/>
            <h1>Cart</h1>
            
            <CartTable cart = {cart}  refreshProducts = {refreshProducts}/>
            <Button style={{margin:"20px"}} disabled = {cart.length ==0? true:false} variant="contained">Checkout</Button>
        </div>
       
    )
}
export default Cart