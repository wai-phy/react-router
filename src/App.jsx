import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import { Home, About, Products, ProductDetails } from "./pages/index";
import { loader as productLoader } from "./pages/Products";
import { loader as productDetailLoader } from "./pages/ProductDetails";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: productLoader,
      },
      {
        path: "/product/:postId",
        element: <ProductDetails />,
        loader : productDetailLoader,
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
