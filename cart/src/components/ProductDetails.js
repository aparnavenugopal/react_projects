import React, { useState, useEffect} from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import "./styles/ProductDetails.css";
import Cart from './Cart';
import { useCart } from './CratContext';


const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchProduct = async() => {
            try{
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const productData = await response.json();
                setProduct(productData);
            }catch(error){
                console.error('error fetching product details:', error);
            }
        }
        fetchProduct();

    },[productId]);

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
      };

    const totalPrice = product ? product.price * quantity : 0;

    const handleAddToCart = () => {
        addToCart({...product, quantity});
        navigate('/cart');
    }

    if(!product){
        return <div>
            loading...
        </div>
    }

    return (
        <div>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} style={{ width: '200px', marginBottom: '10px' }} />
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
          {/* Dropdown for selecting quantity */}
          <label htmlFor="quantity">Quantity:</label>
          <select id="quantity" value={quantity} onChange={handleQuantityChange}>
            {[1, 2, 3, 4, 5, 6].map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
          {/* Display total price */}
          <p>Total Price: ${totalPrice}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
          <Link to="/cart">View Cart</Link>
        </div>
      );
    };

export default ProductDetails;