import { useState, useEffect } from 'react';
import './TrafficSignal.css';

function App() {
  const [red, setRed] = useState(true);
  const [yellow, setYellow] = useState(false);
  const [green, setGreen]  = useState(false);
 
  useEffect(() => {
    const interval = setInterval(() => {
       if(red){
        setRed(false);
        setYellow(true);
       }else if(yellow){
        setYellow(false);
        setGreen(true);
       }else if(green){
        setGreen(false);
        setRed(true);
       }
    },3000);

    return () => clearInterval(interval);

  },[red,yellow,green]);

  return (
    <div className="traffic-signal">
      <div className={`light red ${red? 'active': ''}`}></div>
      <div className={`light yellow ${yellow? 'active': ''}`}></div>
      <div className={`light green ${green? 'active' : ''}`}></div>
    </div>
  );
}

export default App;
