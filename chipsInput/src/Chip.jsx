import React,{ useState } from 'react';
import './chip.css'

export const Chip = () => {
    const [input, setInput] = useState([]);
    const [submitted, setSumitted] = useState([]);
    const clickHandle = (e) => {
        setInput(e.target.value);
    } 
    const handleKeyDown = (e) =>{
       if(e.key === 'Enter'){
        if(input.length){
           setSumitted([...submitted, input.trim()]);
           setInput('');
        }
       
       }
    }

    const handleDelete = (remove) => {
        setSumitted(submitted.filter((_,index) => index !== remove ))
    }
  return (
    <div className="chipsInput" >
        <h1 >ChipsInput</h1>
        <input
           type="text"
           placeholder='type for chip feature'
           value={input}
           onChange={clickHandle}
           onKeyDown={handleKeyDown}
        />
        <div className="chipDisplay">
          {
            submitted?.map((chip, index) => (
                <span key={index} className="chipButton">
                    {chip}
                    <button onClick={() => handleDelete(index)}>x</button>
                </span>
            ))
          }
        </div>
       
    </div>
    
  )
}
