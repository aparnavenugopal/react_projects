// App.js or your main routing component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import { CartProvider } from './components/CratContext';

const App = () => {

  return (
    <Router>
      <CartProvider>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </CartProvider>
      
    </Router>
  );
};

export default App;
