import { configureStore } from "@reduxjs/toolkit";
import cloothingBrandReducer from "../Features/Product/ProductsSlice";
import { baseApi } from "../api/baseApi";
import { rootReducer } from "../rootReducer";

const store = configureStore({
  // reducer: {
  //   cloth: cloothingBrandReducer,
  // },
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
