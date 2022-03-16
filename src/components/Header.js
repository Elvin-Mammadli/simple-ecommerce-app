import { useContext } from "react";
import { MyContext } from "../App";

const Header = () => {
  const { cartItems } = useContext(MyContext)
  return ( 
    <header className="row block center header-bg-color">
      <div>
        <a href="#/">
          <h1>Simple e-commerce project</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart
          <button className="badge">{cartItems.length}</button>
        </a> <a href="#/signin">SignIn</a>
      </div>
    </header>
   );
}
 
export default Header;