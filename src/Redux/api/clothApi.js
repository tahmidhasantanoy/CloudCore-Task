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
  }),
  overrideExisting: false,
});

export const { useGetAllProductsQuery } = clothApi;
