import React from "react";
import Header from "../_components/Header";
import ProductSection from "../_components/Product";

function Product() {
  return (
    <>
      <Header />
      <ProductSection category="Jersey" />
      <ProductSection category="T-shirt" />
    </>
  );
}

export default Product;
