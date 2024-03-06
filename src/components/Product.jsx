import { useParams } from "react-router-dom"

const Product = () => {
    const {id} = useParams();
  return (
    <div>
        <h1>I am dynamic component function</h1>
        <h1>My dynamic id is -{id} </h1>
    </div>
  )
}

export default Product