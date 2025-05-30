import React from 'react'
import './accordiansec.css'

const AccordionSection = ({ title, content, index, checked,  onToggle, onCheckboxChange, isOpen }) => {
  return (
    <div className="accordion-section">
      <div className="accordion-title" onClick={onToggle}>
        <h3>{title}</h3>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
          <div className="checkbox-row">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => onCheckboxChange(index)}
              onClick={(e) => e.stopPropagation()}
            />
            <label>I agree to these terms</label>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccordionSection;