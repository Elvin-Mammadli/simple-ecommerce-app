import { useContext } from "react";
import { MyContext } from "../App";

const Product = ({product}) => {
  const { onAdd } = useContext(MyContext);
  
  return ( 
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)} >Add to Cart</button>
      </div>
    </div>
   );
}
 
export default Product;