import React, { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../Redux/api/clothApi";

const AllProducts = () => {
  const { data: AllProducts, isLoading, isError } = useGetAllProductsQuery([]);
  console.log(AllProducts?.data?.data);

  /* Now, I have to use useRedx Toolkit to manage the state (DONE) */
  /* Configure the Redux toolkit (DONE) */
  /* now, I want to configure the redux toolkit in a mordern way (Pending) T : 8:17 */

  if (isLoading) {
    console.log("Loading"); 
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-9xl text-red-700">Loading</p>
    </div>;
  }
  return (
    <div className="bg-gray-400 w-96 h96">
      <p>All Products here</p>

      {AllProducts?.data?.data?.map((item) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
};

export default AllProducts;
