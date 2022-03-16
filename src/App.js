import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from "./data";
import { useState, createContext } from 'react';

export const MyContext = createContext(); 

function App() {
  const { products } = data
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id)
    if (exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  };

  const onRemove = product => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(x => x.id !== product.id))
    } else {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
    }
  }

  const context = {
    products: data.products,
    cartItems: cartItems,
    onAdd: onAdd,
    onRemove: onRemove
  }

  return (
    <MyContext.Provider value={context} >
      <div className="App">
        <Header cartItemsCount={cartItems.length} />
        <div className='row'>
          <Main products={products} />
          <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
