import React from "react";
import Item from "./Item";
import productData from "../data";

function ProductSection(props) {
  return (
    <section className="productSection">
      <div className="productContent">
        <h3 className="title">{props.category}</h3>

        <div className="productContainer">
          {productData.map((product, index) => (
            <Item
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
