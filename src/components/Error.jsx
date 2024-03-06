import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
      navigate("/");
  };
  return (
    <>
      <h1>404 Not Found</h1>
      <button onClick={navigateHandler}>Go To Home</button>
    </>
  );
};

export default Error;
