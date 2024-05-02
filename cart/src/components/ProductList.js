import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./styles/ProductList.css";

const ProductList = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
     const fetchData = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const jsondata = await response.json();
            setData(jsondata);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
     };
     fetchData();
   },[]);

   return(
    <div className="container">
        {data.map((item) => {
            return (
              // Link to the ProductDetails component with the product ID as parameter
              <Link to={`/products/${item.id}`} key={item.id} className="product-link">
                <div className="product">
                  <img src={item.image} alt={item.title} className="product-image" />
                  <div className="product-details">
                      <h3>{item.title}</h3>
                      <p>Price: ${item.price}</p>
                      <p>Description: {item.description}</p>
                      <p>Category: {item.category}</p>
                      <p>Rating: {item.rating.rate} ({item.rating.count} reviews)</p>
                  </div>
                </div>
              </Link>
             )
        })}
    </div>
   )
}

export default ProductList;
