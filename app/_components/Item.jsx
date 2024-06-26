import React from "react";

function Item(props) {
  return (
    <div className="item">
      <div className="itemImage">
        <img src={props.image} alt="proudctImage" className="productImage" />
      </div>

      <div className="itemContent">
        <h5 className="name">{props.name}</h5>
        <p className="price">{props.price}</p>
        <button className="productBtn">Buy on Amazon</button>
      </div>
    </div>
  );
}

export default Item;
