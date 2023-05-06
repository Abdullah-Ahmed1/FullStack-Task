import ResponsiveAppBar from "../components/navbar";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2";
import Item from "../components/item";

const Store = ({ products,addToCart }) => {
  return (
    <Box>
      <ResponsiveAppBar />
      <Grid2 container justifyContent={"center"} alignItems={"center"}>
        <Grid2
          container
          sx={{ width: { xs: "100%", lg: "85%" } }}
          justifyContent={"center"}
          alignItems={"center"}
          columnSpacing={0.1}
          rowSpacing={0}
        >
          {products.map((item, index) => {
            return (
              <Grid2 key = {index} xs={11} lg={4}>
                <Item  item  = {item} addToCart = {addToCart}/>
              </Grid2>
            );
          })}
        </Grid2>
      </Grid2>
    </Box>
  );
};
export default Store;
