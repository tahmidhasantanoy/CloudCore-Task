/* Adding endpoints */

import { baseApi } from "./baseApi";

const clothApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => ({
        url: "/all/product/get",
        method: "GET",
        // contentType: "application/json",
      }),
    }),

    /* TODO : start working from here */
    placeNewOrder: build.mutation({
      query: (newOrderInfo) => ({
        url: "/public/order/create", // check this api
        // https://admin.refabry.com/api/public/order/create
        method: "POST",
        data: newOrderInfo,
        ContentType: "application/json",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllProductsQuery, usePlaceNewOrderMutation } = clothApi;
