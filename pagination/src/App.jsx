import React from 'react';
import Pagination from './Pagination';

const App = () => {
  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`); // Example items
  return <Pagination items={items} itemsPerPage={5} />;
};

export default App;