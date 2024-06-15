import { CircularProgress, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EachItem from "./EachItem";
import Header from "./Header";
import NoResultsPic from "./assets/noResults.png";
import { getProducts, singleProduct } from "./features/productsSlice";
import { AppDispatch, RootState } from "./store";
import { allProductStyles } from './styles';
export const AllProducts = () => {
  const { products, allProductsApiStatus } = useSelector(
    (state: RootState) => state.items
  );

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <Box sx={allProductStyles}>
      <Header />
      {allProductsApiStatus === "LOADING" && (
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          mt={10}
        >
          <CircularProgress disableShrink />
        </Stack>
      )}
      {products.length !== 0 && (
        <Grid
          container
          sx={allProductStyles.productsContainer}
        >
          {products.length === 0 && (
            <Stack
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
              mt={10}
            >
              <Box
                component={"img"}
                src={NoResultsPic}
                sx={allProductStyles.noResultPicSize}
              />
              <Typography variant="h4">Sorry, no Results Found!</Typography>
              <Typography
                variant="body1"
                
              >
                Please check the spelling or try searching for something else
              </Typography>
            </Stack>
          )}
          {products?.map((each: singleProduct, index: number) => (
            <Grid
              item
              key={each.id}
              md={3.8}
              xs={11}
              xl={2.8}
              mx={1}
              sm
              my={2}
              gap={1}
            >
              <EachItem key={index} item={each} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};
