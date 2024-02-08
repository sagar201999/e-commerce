import './App.css';
import Details from './Components/Details';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { useState } from 'react';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';



function App() {

  const [cartCount , setCartCount] = useState(0);
  const [cartItems , setCartItems] = useState([]);



  const handleAddToCart = (count) => {
    setCartCount((prevCount) => prevCount + count);
  };

  const onAddToCart = (count, productDetails) => {
    setCartCount((prevCount) => prevCount + count);
    setCartItems([...cartItems, { count, productId: cartItems.length + 1, ...productDetails }]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.productId !== productId);
    setCartItems(updatedCart);
    setCartCount((prevCount) => prevCount - 1);
  };


 

  return (
    <div className="App">
    
      <BrowserRouter>
      <Navbar cartCount={cartCount}/>
        <Routes>
          <Route exact path='/' element={< Home onAddToCart={onAddToCart} handleAddToCart={handleAddToCart} /> }/>
          <Route exact path="/products/:productId" element={<Details onAddToCart={onAddToCart}/>} />
          <Route exact path='/cart' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route exact path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
