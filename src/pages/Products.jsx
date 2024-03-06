import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: 1,
    title: "mango",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quas quae rerum ipsam laboriosam, ea beatae reiciendis harum nihil. Fugit aspernatur non delectus voluptatibus velit placeat cupiditate earum, dignissimos molestiae!",
  },
  {
    id: 2,
    title: "orange",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quas quae rerum ipsam laboriosam, ea beatae reiciendis harum nihil. Fugit aspernatur non delectus voluptatibus velit placeat cupiditate earum, dignissimos molestiae!",
  },
  {
    id: 3,
    title: "guava",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quas quae rerum ipsam laboriosam, ea beatae reiciendis harum nihil. Fugit aspernatur non delectus voluptatibus velit placeat cupiditate earum, dignissimos molestiae!",
  },
];

const Products = () => {
  return (
    <>
      {PRODUCTS.map((product) => (
        <Link to={`/product/${product.title}`} key={product.id}>
          <div  className="card">
            <p className="title">{product.title}</p>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Products;
