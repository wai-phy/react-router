import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { title } = useParams();
  const navigateHandler = () =>{
    navigate("/products")
  }
  return (
    <div>
      <h1>Product Details Page</h1>
      <h1>Product Name = {title} </h1>
      <button onClick={navigateHandler}>Go Back To Products</button>
    </div>
  );
};

export default ProductDetails;
