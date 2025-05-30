import React, { useState } from 'react';
import AccordionSection from './AccordionSection';

 export const sections = [
    { title: 'Section 1: User Agreement', content: 'Terms related to user account creation and use.' },
    { title: 'Section 2: Privacy Policy', content: 'Terms related to use of user data' },
    { title: 'Section 3: Payment Terms', content: 'Terms related to payments, fees and refunds.' }
  ];


export const TermsConditions = () => {
  const [checkboxState, setCheckboxState] = useState([false, false, false]);
  const [openIndex, setOpenIndex] = useState(null);
  
  const handleCheckboxChange = (index) => {
    const updated = [...checkboxState];
    updated[index] = !updated[index];
    setCheckboxState(updated);
  }

  const handleToggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  }

  const allChecked = checkboxState.every(checked => checked);

  return (
    <div>
        {
            sections.map((section, index) =>(
                <AccordionSection
                   key={index}
                   index={index}
                   title={section.title}
                   content={section.content}
                   checked={checkboxState[index]}
                   isOpen={openIndex === index}
                   onToggle = {() => handleToggle(index)}
                   onCheckboxChange = {handleCheckboxChange}
                />
            ))
        }
        <button disabled={!allChecked}>
            Submit
        </button>
    </div>
  )
}
