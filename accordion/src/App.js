import './App.css';
import React from 'react';
import { accordionData } from './utils/content';
import Accor from './Accor';


const App = () => {
  return (
    <div>
      <h1>React Accordion Demo</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accor title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;