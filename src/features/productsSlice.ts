import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface singleProduct {
  id: number;
  category: string;
  brand: string;
  description: string;
  discountPercentage: string;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}
interface cartItem extends singleProduct {
  quantity: number;
}

export interface ProductState {
  products: singleProduct[];
  allProductsApiStatus: "INITIAL" | "LOADING" | "SUCCESS" | "FAILURE";
  specificProduct: singleProduct;
  singleProductApiStatus: "INITIAL" | "LOADING" | "SUCCESS" | "FAILURE";
  itemsInCart: cartItem[];
}

const initialState: ProductState = {
  products: [],
  allProductsApiStatus: "INITIAL",
  specificProduct: {} as ProductState["specificProduct"],
  singleProductApiStatus: "INITIAL",
  itemsInCart: [],
};

const allProductsApiUrl = "https://dummyjson.com/products";

export const getProducts = createAsyncThunk("getting Products", async () => {
  try {
    const res = await fetch(allProductsApiUrl);
    return await res.json();
  } catch (error) {
    return console.log(error);
  }
});

export const getSingleProduct = createAsyncThunk(
  "getting Single Products",
  async (id: number) => {
    const eachProductApiUrl = `https://dummyjson.com/products/${id}`;
    try {
      const res = await fetch(eachProductApiUrl);
      return await res.json();
    } catch (error) {
      return console.log(error);
    }
  }
);

export const productsSlice = createSlice({
  name: "fetchingProducts",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<singleProduct>) => {
      const { itemsInCart } = state;
      const index = itemsInCart.findIndex(
        (each) => each.id === action.payload.id
      );
      if (index === -1 || itemsInCart.length === 0) {
        const newList: cartItem[] = [
          ...itemsInCart,
          { ...action.payload, quantity: 1 },
        ];
        state.itemsInCart = newList;
      } else {
        const newList: cartItem[] = itemsInCart.map((each) => {
          if (each.id !== action.payload.id) return each;
          return { ...each, quantity: each.quantity + 1 };
        });
        state.itemsInCart = newList;
      }
    },
    increment: (state, action: PayloadAction<singleProduct>) => {
      const { itemsInCart } = state;
      const actualIndex = itemsInCart.findIndex(
        (each) => each.id === action.payload.id
      );
      const updatedItem = {
        ...itemsInCart[actualIndex],
        quantity: itemsInCart[actualIndex].quantity + 1,
      };
      itemsInCart.splice(actualIndex, 1, updatedItem);
      state.itemsInCart = itemsInCart;
    },
    decrement: (state, action: PayloadAction<singleProduct>) => {
      const { itemsInCart } = state;
      const actualIndex = itemsInCart.findIndex(
        (each) => each.id === action.payload.id
      );
      const updatedItem = {
        ...itemsInCart[actualIndex],
        quantity:
          itemsInCart[actualIndex].quantity - 1 === 0
            ? itemsInCart[actualIndex].quantity
            : itemsInCart[actualIndex].quantity - 1,
      };
      itemsInCart.splice(actualIndex, 1, updatedItem);
      state.itemsInCart = itemsInCart;
    },
    deleteFromCart: (state, action: PayloadAction<singleProduct>) => {
      const { itemsInCart } = state;
      state.itemsInCart = itemsInCart.filter(
        (each) => each.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.allProductsApiStatus = "LOADING";
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.allProductsApiStatus = "SUCCESS";
      state.products = action.payload?.products;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.allProductsApiStatus = "FAILURE";
    });
    builder.addCase(getSingleProduct.pending, (state) => {
      state.singleProductApiStatus = "LOADING";
    });
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.singleProductApiStatus = "SUCCESS";
      state.specificProduct = action.payload;
    });
    builder.addCase(getSingleProduct.rejected, (state, action) => {
      state.singleProductApiStatus = "FAILURE";
      console.log(action.error.message);
    });
  },
});
export const { addToCart, increment, decrement, deleteFromCart } =
  productsSlice.actions;

export default productsSlice.reducer;
