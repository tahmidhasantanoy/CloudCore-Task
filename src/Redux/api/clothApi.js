/* Adding endpoints */

import { baseApi } from "./baseApi";

const clothApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => ({
        url: "/all/product/get",
        method: "GET",
      }),
    }),

    placeNewOrder: build.mutation({
      query: (newOrderInfo) => ({
        url: "/public/order/create",
        method: "POST",
        data: newOrderInfo,
        ContentType: "application/json",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllProductsQuery, usePlaceNewOrderMutation } = clothApi;
