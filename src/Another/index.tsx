import { Box,  IconButton, Paper, Stack, Typography } from "@mui/material";
import  { useEffect, useState } from "react";
import { styles } from "./Styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { singleProduct } from "../features/productsSlice";
import { useSelector,useDispatch } from "react-redux";
import { getProducts } from "../features/productsSlice";
import { AppDispatch, RootState } from "../store";

interface Istate {
  picNumber: number;
}

const Another = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {products} = useSelector((state:RootState)=>state.items)
  const [picNumber, setPicNumber] = useState<Istate["picNumber"]>(0);
  const [data, setData] = useState<singleProduct[]>([]);

  const getData = async () => {
    const apiUrl = "https://dummyjson.com/products/";
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    if (response.ok === true) {
      setData(jsonData.products);
    }
  };

  const nextPic = () =>
    picNumber < products.length - 1 ? setPicNumber(picNumber + 1) : null;
  const prevPic = () => (picNumber > 0 ? setPicNumber(picNumber - 1) : null);

  useEffect(() => {
    // getData();
    dispatch(getProducts())
  }, []);

  return (
    <Paper sx={styles.mainContainer} elevation={8}>
      <Typography variant="h5">Quick View</Typography>
      <Stack direction={"row"} spacing={0} alignItems={"center"}>
        <IconButton onClick={prevPic}>
          <ArrowBackIosIcon />
        </IconButton>
        <Paper sx={styles.innerContainer}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={styles.picHolder}
            ml={`${-295 * picNumber - 10}px`}
          >
            {products?.map((each, index) => (
              <Box
                key={index}
                component={"img"}
                src={each.thumbnail}
                alt={each.thumbnail}
                width={260}
                height={300}
                m={2}
              />
            ))}
          </Stack>
        </Paper>
        <IconButton onClick={nextPic}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
};

export default Another;
