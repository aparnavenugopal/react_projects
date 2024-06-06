import React, { useState } from 'react';
import axios from 'axios';
import useApi from './useApi';

const DataFetcher = () => {
    const { data, loading, error, response, postLoading, postError, postData } = useApi('https://jsonplaceholder.typicode.com/posts');
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState(1);

  

  // Post data to the API
  const handleSubmit = (e) => {
    e.preventDefault();
    const postDataObj = { title, body, userId };
    postData(postDataObj);
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
        </div>
        <button type="submit">Post Data</button>
      </form>

      <h2>Fetched Data</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
