import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error)
  let errorTitle = "Unknow Page";

  if(error.status === 500){
    errorTitle = error.data.message;
  }
  return (
    <section>
      <h1>{errorTitle}</h1>
      <Link to={"/"}>
        <button>Go Back Home</button>
      </Link>
    </section>
  );
};

export default Error;
