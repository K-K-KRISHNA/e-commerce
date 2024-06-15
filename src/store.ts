import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productsSlice";
import loginReducer from "./features/loginSlice";

export const store = configureStore({
  reducer: {
    items: productReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
