import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigatorHandler = () => {
    setTimeout(() => {
      navigate("/products");
    }, 3000);
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={navigatorHandler}>Go To Products</button>
    </div>
  );
};

export default Home;
