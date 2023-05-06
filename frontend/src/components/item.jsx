import './item.css'
import Grid2 from '@mui/material/Unstable_Grid2'
const Item = ({item,addToCart})=>{
    return(
        <Grid2 className = 'g' container  flexDirection={'column'} sx ={{marginRight:"1px",marginBottom:'1px'}}     alignItems={'center'} justifyContent={'center'} >
            <div className='d' style = {{cursor:"pointer"}} onClick={()=>addToCart(item._id)} >
                Add to Cart
            </div>
            <img className='jac'  src={item.image} alt="jacket" />
            <Grid2 container flexDirection={'column'} alignItems={'center'}>
                <p style={{padding:"0px",margin:"0px"}}>R-Tech</p>
                <div style={{maxWidth:'200px'}}>
                <h3 style={{padding:"0px",margin:"0px",textAlign:"center"}}>{item.name}</h3>
                <p style={{padding:"0px",margin:"0px",textAlign:'center'}}>{item.price}</p>
                </div>
                
            </Grid2>
        </Grid2>
    )
}
export default Item