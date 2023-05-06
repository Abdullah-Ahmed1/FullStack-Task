import ResponsiveAppBar from "../components/navbar"
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2';
import Item from "../components/item";

const Store = ()=>{
    return(
        <Box>

            <ResponsiveAppBar/>
            <Grid2 container justifyContent={'center'} alignItems={'center'} >
                <Grid2 container sx={{ width: { xs: "100%", lg: "85%" }}} justifyContent={'center'} alignItems={'center'} columnSpacing={.1} rowSpacing={0} >
                    <Grid2 xs={11} lg= {4}>
                        <Item />
                    </Grid2 >
                    <Grid2 xs={11} lg= {4}>
                        <Item />
                    </Grid2>
                    <Grid2 xs={11} lg= {4}>
                        <Item />
                    </Grid2>    
                    <Grid2 xs={11} lg= {4}>
                        <Item />
                    </Grid2>
                    <Grid2 xs={11} lg= {4}>
                        <Item />
                    </Grid2>
                    <Grid2 xs={11} lg= {4}>
                        <Item />
                    </Grid2>
                    <Grid2 xs={11} lg= {4}>
                        <Item />
                    </Grid2>
                </Grid2>
            </Grid2>
        </Box>
    )
}
export default Store