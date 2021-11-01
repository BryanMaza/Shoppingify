import React from "react";
import Item from "./Item";

function Categories() {
  return (
    <div className='category'>
      <h1>
        <span>Shoppingify</span> allows you take your shopping list wherever you
        go
      </h1>
      <h2 className='category__title'>Fruits</h2>
      <div className='items'>
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default Categories;
