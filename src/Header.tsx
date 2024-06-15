import LogoutIcon from "@mui/icons-material/Logout";
import Menu from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Stack,
  TextField,
  Toolbar,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RootState } from "./store";

const Header = () => {
  const { itemsInCart } = useSelector((state: RootState) => state.items);
  const navigate = useNavigate();
  const location = useLocation();
  const loggingOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <AppBar position="sticky" sx={{ width: "100%" }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "97%",
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction={"row"}
          sx={{ order: { xs: 3, md: 0 }, width: { md: "60%", xs: "100%" } }}
        >
          <IconButton
            sx={{ color: "white", display: { xs: "none", md: "flex" } }}
          >
            <Menu fontSize="large" />
          </IconButton>
          <TextField
            variant="outlined"
            sx={{
              backgroundColor: "white",
              width: { md: "80%", xs: "90%" },
              mb: 1,
            }}
            placeholder="Enter the Product Name or Category You want to Search"
          />
        </Stack>
        <Stack direction={"row"} justifyContent={"space-around"} width={"100%"}>
          <Stack direction={"row"} justifyContent={"space-around"}>
            <Link
              to="/products"
              style={{
                textDecoration: "none",
                display: location.pathname === "/products" ? "none" : "flex",
              }}
            >
              <Button variant="text" sx={{ color: "white", mr: 2 }}>
                See All
              </Button>
            </Link>
            <Link
              to="/cart"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bolder",
                marginRight: "25px",
                alignSelf: "center",
              }}
            >
              <Badge badgeContent={itemsInCart.length} color={"warning"}>
                <ShoppingCartIcon />
              </Badge>
            </Link>
            <Button
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "blue",
                display: { xs: "none", md: "flex" },
              }}
              onClick={loggingOut}
            >
              Log Out
            </Button>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
              onClick={loggingOut}
            >
              <LogoutIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
