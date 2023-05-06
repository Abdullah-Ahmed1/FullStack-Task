import CartTable from "../components/cartTable"
import ResponsiveAppBar from "../components/navbar"
import Button from '@mui/material/Button';

const Cart = ()=>{
    return(
        <div>
            <ResponsiveAppBar/>
            <h1>Cart</h1>
            
            <CartTable/>
            <Button variant="contained">Checkout</Button>
        </div>
       
    )
}
export default Cart