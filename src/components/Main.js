import { useContext } from "react";
import { MyContext } from "../App";
import Product from "./Product";

const Main = () => {
  const { products, onAdd } = useContext(MyContext);

  return ( 
    <main className="block col-2 main-bg-color">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </main>
   );
}
 
export default Main;