import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BoltIcon from "@mui/icons-material/Bolt";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import RoomIcon from "@mui/icons-material/Room";
import StarIcon from "@mui/icons-material/Star";
import {
  Button,
  CircularProgress,
  Icon,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { EachCardStyles } from "./EachCardStyles";
import Header from "./Header";
import Assured from "./assets/filpkartAssured.png";
import { addToCart, decrement, getSingleProduct, increment, singleProduct } from "./features/productsSlice";
import { AppDispatch, RootState } from "./store";

interface IState {
  details: singleProduct;
  activeImg: number;
  apiStatus: "INITIAL" | "SUCCESS" | "FAILURE" | "LOADING";
}

export const EachProduct = () => {
  const { itemsInCart } = useSelector((state: RootState) => state.items)
  const params = useParams();
  const id = params.id;
  const index = itemsInCart.findIndex(each => each.id === Number(id))
  const { singleProductApiStatus, specificProduct } = useSelector(
    (state: RootState) => state.items
  );
  const dispatch = useDispatch<AppDispatch>();

  const [activeImg, setActiveImg] = useState<IState["activeImg"]>(0);


  useEffect(() => {
    if (id === undefined) return;
    dispatch(getSingleProduct(Number(id)));
  }, []);
  console.log(specificProduct);
  if (specificProduct.brand === undefined) return <p>error</p>;
  return (
    <>
      <Header />
      {singleProductApiStatus === "LOADING" ? (
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          mt={10}
        >
          <CircularProgress disableShrink />
        </Stack>
      ) : (
        <Box sx={EachCardStyles.mainContainer}>
          <Paper
            sx={{
              height: "fit",
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              alignItems: { md: "flex-start", sm: "center" },
              width: { xs: "100%", sm: "95%" },
              pl: { xs: "10px", sm: 1, md: 1, xl: 5 },
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}
              spacing={0}
              p={4}
            >
              <Paper sx={EachCardStyles.smallStack}>
                {specificProduct?.images
                  ?.slice(0, 4)
                  .map((each: string, index: number) => (
                    <Box
                      component={"img"}
                      src={each}
                      key={index}
                      sx={
                        activeImg === index
                          ? {
                            ...EachCardStyles.smallImage,
                            ...EachCardStyles.activeBorder,
                          }
                          : { ...EachCardStyles.smallImage }
                      }
                      onMouseOver={() => setActiveImg(index)}
                    />
                  ))}
              </Paper>
              <Stack sx={EachCardStyles.innerCard}>
                <Paper
                  elevation={2}
                  sx={{
                    position: "relative",
                    width: { xs: 250, md: 350 },
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <Box
                    component={"img"}
                    src={specificProduct?.images[activeImg]}
                    sx={EachCardStyles.picSize}
                  />
                  <IconButton
                    sx={EachCardStyles.favIcon}
                  >
                    <FavoriteIcon />
                  </IconButton>
                </Paper>
                <Carousel
                  sx={{
                    display: { xs: "flex", md: "none" },
                    flexDirection: "column",
                    width: "300px",
                  }}
                >
                  {specificProduct?.images.map((eachImage: string) => (
                    <Box
                      component={"img"}
                      key={eachImage}
                      src={eachImage}
                      sx={{ width: "300px", height: "250px" }}
                    />
                  ))}
                </Carousel>
                <Stack
                  sx={{ flexDirection: { xs: "column", sm: "row" }, gap: 2 }}
                  mt={3}
                >
                  <Stack direction={"row"}>
                    {index === -1 ? (<Button
                      startIcon={<AddShoppingCartIcon />}
                      variant="contained"
                      sx={{
                        backgroundColor: "#F99F00",
                        p: 1,
                        width: { xl: "175px", md: "150px" },
                        fontWeight: "bolder",
                      }}
                      onClick={() => dispatch(addToCart(specificProduct))}
                    >
                      Add To Cart
                    </Button>) : <Stack
                      direction={"row"}
                      justifyContent={"space-around"}
                      width={"100px"}
                      alignItems={'center'}
                    >
                      <IconButton disabled={itemsInCart[index].quantity === 1}>
                        <RemoveCircleOutlineIcon
                          onClick={() => dispatch(decrement(itemsInCart[index]))}
                        />
                      </IconButton>
                      <Typography variant="body2">{itemsInCart[index].quantity}</Typography>
                      <IconButton>
                        <AddCircleOutlineIcon
                          onClick={() => dispatch(increment(itemsInCart[index]))}
                        />
                      </IconButton>
                    </Stack>}
                  </Stack>
                  <Button
                    sx={{
                      backgroundColor: "#f9641b",
                      p: 1,
                      width: { xl: "175px", md: "125px" },
                      fontWeight: "bolder",
                    }}
                    startIcon={<BoltIcon />}
                    variant="contained"
                  >
                    Buy Now
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction={"column"} mt={5}>
              <Typography variant="h5">{specificProduct?.title}</Typography>
              <Stack
                direction={"row"}
                alignContent={"center"}
                justifyContent={"space-between"}
                sx={{ width: { xs: "300px", sm: 375 } }}
                height={25}
              >
                <Button
                  endIcon={<StarIcon />}
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#388e3c",
                    fontSize: "10px",
                    fontWeight: "bolder",
                  }}
                >
                  {specificProduct?.rating}
                </Button>
                <Typography
                  variant="body2"
                  sx={{ color: "#88899f", fontWeight: "bolder" }}
                >
                  1,617 Ratings & 149 Reviews
                </Typography>
                <Box component={"img"} src={Assured} />
              </Stack>
              <Typography variant="h4" sx={{ mt: "10px" }}>
                ₹ {specificProduct?.price}{" "}
                <Box
                  component={"span"}
                  sx={{
                    textDecoration: "line-through",
                    fontSize: "20px",
                    color: "gray",
                    ml: 1,
                  }}
                >
                  ₹ 65,000
                </Box>
                <Box
                  component={"span"}
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "20px",
                    color: "#388e3c",
                    ml: 2,
                  }}
                >
                  23% off
                </Box>
                <Icon sx={{ color: "rgb(211,211,211)" }}>
                  <ErrorOutlineIcon />
                </Icon>
              </Typography>
              <Typography variant="body2">+99 Secured Packaging Fee</Typography>
              <Typography
                variant="body1"
                sx={{ mt: "10px", fontWeight: "bold" }}
              >
                Available Offers
              </Typography>
              <Stack
                direction={"row"}
                alignContent={"center"}
                spacing={1}
                mt={1}
              >
                <Icon sx={{ color: "#388e3c" }}>
                  <LocalOfferIcon />
                </Icon>
                <Typography>
                  <Box component={"span"} sx={{ fontWeight: "bold" }}>
                    Bank Offer
                  </Box>{" "}
                  ₹5000 Off On HDFC Bank Credit Card EMI Transactions
                  <Box
                    component={"span"}
                    sx={{ fontWeight: "bold", color: "#3976f5" }}
                  >
                    T&C
                  </Box>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignContent={"center"}
                spacing={1}
                mt={1}
              >
                <Icon sx={{ color: "#388e3c" }}>
                  <LocalOfferIcon />
                </Icon>
                <Typography>
                  <Box component={"span"} sx={{ fontWeight: "bold" }}>
                    Bank Offer
                  </Box>{" "}
                  ₹5000 Off On HDFC Bank Credit Card EMI Transactions
                  <Box
                    component={"span"}
                    sx={{ fontWeight: "bold", color: "#3976f5" }}
                  >
                    T&C
                  </Box>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignContent={"center"}
                spacing={1}
                mt={1}
              >
                <Icon sx={{ color: "#388e3c" }}>
                  <LocalOfferIcon />
                </Icon>
                <Typography>
                  <Box component={"span"} sx={{ fontWeight: "bold" }}>
                    Bank Offer
                  </Box>{" "}
                  ₹5000 Off On HDFC Bank Credit Card EMI Transactions
                  <Box
                    component={"span"}
                    sx={{ fontWeight: "bold", color: "#3976f5" }}
                  >
                    T&C
                  </Box>
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignContent={"center"}
                spacing={1}
                mt={1}
              >
                <Icon sx={{ color: "#388e3c" }}>
                  <LocalOfferIcon />
                </Icon>
                <Typography>
                  <Box component={"span"} sx={{ fontWeight: "bold" }}>
                    Bank Offer
                  </Box>{" "}
                  ₹5000 Off On HDFC Bank Credit Card EMI Transactions
                  <Box
                    component={"span"}
                    sx={{ fontWeight: "bold", color: "#3976f5" }}
                  >
                    T&C
                  </Box>
                </Typography>
              </Stack>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#3976f5", mt: "10px" }}
              >
                {" "}
                View 1 more offer
              </Typography>
              <Stack direction={"row"}>
                <Typography
                  sx={{
                    color: "rgba(0,0,0,0.5)",
                    p: 0.5,
                    width: "60px",
                    mt: 2,
                  }}
                >
                  {specificProduct?.brand}
                </Typography>
                <Typography variant="body2">
                  1 Year Manufacturer Warranty for Phone and 6 Months Warranty
                  for In the Box Accessories{" "}
                  <Box sx={{ fontWeight: "bold", color: "#3976f5", ml: 2 }}>
                    Know More
                  </Box>
                </Typography>
              </Stack>
              <Stack direction={"row"} mt={2}>
                <Typography sx={{ color: "gray", fontWeight: "bold" }}>
                  Delivery
                </Typography>
                <Stack sx={{ ml: { xs: "40px", sm: "80px" } }}>
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    placeholder={"Enter Your PinCode"}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <RoomIcon color="primary" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <Typography color={"#3976f5"} fontWeight={"bolder"}>
                            Check
                          </Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bolder", mt: "10px" }}
                  >
                    Delivery by 10 Dec, Saturday |{" "}
                    <Box
                      component={"span"}
                      sx={{ fontWeight: "bold", color: "#388e3c" }}
                    >
                      Free{"  "}
                    </Box>
                    <Box
                      sx={{ textDecoration: "line-through", color: "gray" }}
                      component={"span"}
                    >
                      ₹ 40
                    </Box>
                    <Icon
                      sx={{ color: "gray", position: "relative", top: "2px" }}
                    >
                      <HelpOutlineIcon fontSize="small" />
                    </Icon>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "13px", fontWeight: "400" }}
                  >
                    if ordered before 05:09 PM
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction={"row"} mt={2}>
                <Typography sx={{ color: "gray", fontWeight: "bold" }}>
                  Highlights
                </Typography>
                <Stack sx={{ ml: { xs: "20px", sm: "50px" }, mt: "-15px" }}>
                  <Box component={"ul"}>
                    <Box component={"li"} sx={{ mb: 2 }}>
                      6 GB RAM | 64 GB ROM | Expandable Upto 2 TB
                    </Box>
                    <Box component={"li"} sx={{ mb: 2 }}>
                      17.12 cm (6.74 inch) HD Display
                    </Box>
                    <Box component={"li"} sx={{ mb: 2 }}>
                      108MP + 2MP | 8MP Front Camera
                    </Box>
                  </Box>
                </Stack>
              </Stack>
              <Stack direction={"row"} mt={2}>
                <Typography sx={{ color: "gray", fontWeight: "bold" }}>
                  Seller
                </Typography>
                <Stack
                  sx={{ ml: { xs: "25px", sm: "100px" } }}
                  direction={"column"}
                >
                  <Stack direction={"row"} mb={2}>
                    <Typography sx={{ color: "#3976f5", fontWeight: "bold" }}>
                      E-COMTAMS INRetail{" "}
                    </Typography>
                    <Button
                      endIcon={<StarIcon fontSize="small" />}
                      variant={"contained"}
                      size="small"
                      sx={{
                        height: "20px",
                        width: "10px",
                        p: 1,
                        ml: 3,
                        borderRadius: "32px",
                      }}
                    >
                      4
                    </Button>
                  </Stack>
                  <Box component={"li"} mb={2}>
                    7 Days Service Center Replacement/Repair
                  </Box>
                  <Box component={"li"}>GST invoice available</Box>
                  <Typography
                    sx={{ color: "#3976f5", fontWeight: "bold", mt: 1 }}
                  >
                    See Other Sellers{" "}
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction={"row"} mt={2}>
                <Typography sx={{ color: "gray", fontWeight: "bold" }}>
                  Description
                </Typography>
                <Stack sx={{ ml: "45px" }}>
                  <Typography variant="body1">
                    {specificProduct?.description}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        </Box>
      )}
    </>
  );
};
