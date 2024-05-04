import React, { useState, useEffect } from 'react';
import './analog.css';

const AnalogClock = () => {
  // State to hold the current time
  const [time, setTime] = useState(new Date());

  // Effect to update time every second
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval
    return () => clearInterval(intervalID);
  }, []);

  // Calculate degrees for each hand based on the current time
  const secondsDeg = (time.getSeconds() / 60) * 360;
  const minutesDeg = ((time.getMinutes() + time.getSeconds() / 60) / 60) * 360;
  const hoursDeg = ((time.getHours() % 12 + time.getMinutes() / 60) / 12) * 360;

  // JSX to render the clock
  return (
    <div className="analog-clock">
      <div className="clock-face">
        <div className="hour-hand" style={{ transform: `rotate(${hoursDeg}deg)` }} />
        <div className="minute-hand" style={{ transform: `rotate(${minutesDeg}deg)` }} />
        <div className="second-hand" style={{ transform: `rotate(${secondsDeg}deg)` }} />
        <div className="center-circle" />
      </div>
    </div>
  );
};

export default AnalogClock;
