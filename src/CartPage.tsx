import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { deleteFromCart } from "./features/productsSlice";
import { AppDispatch, RootState } from "./store";
import { cartPageStyles } from "./styles";
import { useCallback } from 'react';
import './App.css';
import useRazorpay, { RazorpayOptions } from 'react-razorpay';

const {detailsContainer,productsContainer,mainContainer} = cartPageStyles 

const CartPage = () => {
  const { itemsInCart } = useSelector((state: RootState) => state.items);
  let amount = 0 
    itemsInCart.forEach(each=>amount += (each.price*each.quantity))
  let discount = Math.floor(amount/10)
  let total = amount-discount

  const [Razorpay] = useRazorpay();

  const handlePayment = useCallback(()=>{
  const options:RazorpayOptions = {
    key:'rzp_test_LTWgGpWmSvUzaD',
    amount:String(total*100),
    currency:'INR',
    name:'krishna',
    description:'dummy description',
    image:'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    order_id:'',
    handler:(res:any)=>{
      console.log(res);
    },
    prefill:{
      name:'krishna',
      email:'example.com',
      contact:'9702156452'
    },
    notes:{
      address:'Razorpay Corporate Office',
    },
    theme:{
      color:'red'
    },
  };
  const rzpay = new Razorpay(options);
  rzpay.open();

  },[Razorpay])



  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <Header />
      <Stack sx={mainContainer}>
        <Stack sx={productsContainer}>
          {itemsInCart.map((each, index) => (
            <Card key={index} sx={{ maxWidth: 345, m: 1,height:'fit-content' }}>
              <CardMedia
                component="img"
                alt="Product Image"
                height="140"
                image={each.thumbnail}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {each.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ height: "30px", textOverflow: "ellipsis" }}
                >
                  {each.description}
                </Typography>
              </CardContent>
             
              <CardActions sx={{ justifyContent: "space-between" }}>
                {/* <Stack
                  direction={"row"}
                  justifyContent={"space-around"}
                  width={"100px"}
                  alignItems={'center'}
                >
                  <IconButton disabled={each.quantity === 1}>
                    <RemoveCircleOutlineIcon
                      onClick={() => dispatch(decrement(each))}
                    />
                  </IconButton>
                  <Typography variant="body2">{each.quantity}</Typography>
                  <IconButton>
                    <AddCircleOutlineIcon
                      onClick={() => dispatch(increment(each))}
                    />
                  </IconButton>
                </Stack> */}
                 <Typography>Price: ₹{each.price} (qty:{each.quantity})</Typography>
                <Button
                  size="small"
                  onClick={() => dispatch(deleteFromCart(each))}
                >
                  Remove Item
                </Button>
              </CardActions>
            </Card>
          ))}
        </Stack>
        <Paper  sx={detailsContainer}>
            <Typography variant="h4">Price Details</Typography>
            <Stack direction={'row'} mt={3} justifyContent={'space-between'}>
              <Typography variant="h6">Price ({itemsInCart.length} Items)</Typography>
              <Typography variant="h6">₹{amount}</Typography>
            </Stack>
            <Stack direction={'row'} mt={3} justifyContent={'space-between'}>
              <Typography variant="h6">Discount</Typography>
              <Typography variant="h6">-₹{discount}</Typography>
            </Stack>
            <Stack direction={'row'} mt={3} justifyContent={'space-between'}>
              <Typography variant="h6">Delivery Fee</Typography>
              <Typography variant="h6">Free</Typography>
            </Stack>
            <Stack direction={'row'} mt={3} justifyContent={'space-between'}>
              <Typography variant="h4">Total</Typography>
              <Typography variant="h4">₹{total}</Typography>
            </Stack>
            <Stack direction={'row'} mt={3} justifyContent={'space-between'}>
              <Typography variant="h6">You'll Save</Typography>
              <Typography variant="h6">₹{discount}</Typography>
            </Stack>
            <Button variant="contained" sx={{width:'fit-content',alignSelf:'flex-end'}} onClick={handlePayment}>Proceed To Payment</Button>
        </Paper>
      </Stack>
    </>
  );
};

export default CartPage;
