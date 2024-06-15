import { Box } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllProducts } from "./AllProducts";
import CartItem from "./CartPage";
import { EachProduct } from "./EachProduct";
import { Home } from "./Home";
import LoginPage from "./LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import CartPage from "./CartPage";

const App = () => {
  return (
    <BrowserRouter>
      <Box className="App">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <AllProducts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProtectedRoute>
                <EachProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};
export default App;
