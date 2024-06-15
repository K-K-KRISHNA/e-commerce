import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button, IconButton, Rating, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, decrement, increment, singleProduct } from "./features/productsSlice";
import { AppDispatch, RootState } from "./store";

interface IProps {
  item: singleProduct;
}

export default function EachItem({ item }: Readonly<IProps>) {
  const dispatch = useDispatch<AppDispatch>()
  const { itemsInCart } = useSelector((state: RootState) => state.items)
  const index = itemsInCart.findIndex(each => each.id === item.id)
  return (
    <Card
      sx={{
        maxWidth: 445,
        minHeight: 550,
        textDecoration: "none",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <CardHeader
        action={
          <Stack direction={"row"}>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.2}
              value={item.rating}
              readOnly
            />
            <Typography variant="body1">{item.rating}</Typography>
          </Stack>
        }
        title={item.title}
        subheader={item.category}
      />
      <Link
        to={`/products/${item.id}`}
        key={item.id}
        style={{ textDecoration: "none" }}
      >
        <CardMedia
          component="img"
          sx={{ height: { md: "250px", xs: "175px" } }}
          image={item.thumbnail}
          alt="Paella dish"
        />
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
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
            onClick={() => dispatch(addToCart(item))}
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
        <Typography variant="h6">Price:{item.price}</Typography>
      </CardActions>
    </Card>
  );
}
