import React from "react";
import AddProduct from "./AddProduct";
// import Categories from "./Categories";
import "./products.scss";

function Products({ addItem, categories }) {
  return (
    <div className='products'>
      <AddProduct addItem={addItem} categories={categories} />
    </div>
  );
}

export default Products;
