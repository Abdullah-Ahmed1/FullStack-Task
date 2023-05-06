import CartTable from "../components/cartTable"
import ResponsiveAppBar from "../components/navbar"
import Button from '@mui/material/Button';

const Cart = ({cart})=>{
    return(
        <div>
            <ResponsiveAppBar/>
            <h1>Cart</h1>
            
            <CartTable cart = {cart}/>
            <Button style={{margin:"20px"}} variant="contained">Checkout</Button>
        </div>
       
    )
}
export default Cart