import React from "react";
import { json, useLoaderData, useNavigate } from "react-router-dom";
import User from "../components/User";

const ProductDetails = () => {
  const navigate = useNavigate();
  const post = useLoaderData();
  const {title, body, userId} = post;
  const navigateHandler = () =>{
    navigate("/products")
  }
  return (
    <div className="postDetail">
      <h1 className="title">{title}</h1>
      <User userId={userId}/>
      <p className="">{body}</p>
      <button onClick={navigateHandler}>Go Back To Post</button>
    </div>
  );
};

export default ProductDetails;

export const loader = async({request, params})=>{
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  if(!response.ok){
    throw json({message: "Can't Found Any Data !!!"},{status : 500})
  }else{
    const post =await response.json();
    return post;
  }
}
