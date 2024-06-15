import React, { useEffect } from "react";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../features/productsSlice";
import { AppDispatch } from "../store";

const Home = () => {
  const { products, allProductsApiStatus } = useSelector(
    (state: RootState) => state.items
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return allProductsApiStatus === "SUCCESS" ? (
    <h1>
      {products.map((each, index) => (
        <h1 key={index}>{each.title}</h1>
      ))}
    </h1>
  ) : (
    <h1>{allProductsApiStatus}</h1>
  );
};

export default Home;
