import React, { useState, useRef } from 'react';
import './Stopwatch.css'
export const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();

  const startStopwatch = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(updateTime, 1000);
      setIsRunning(true);
    }
  };

  const stopStopwatch = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  const updateTime = () => {
    setSeconds((prevSeconds) => {
      const newSeconds = prevSeconds + 1;
      if (newSeconds === 60) {
        setMinutes((prevMinutes) => {
          const newMinutes = prevMinutes + 1;
          if (newMinutes === 60) {
            setHours((prevHours) => prevHours + 1);
            return 0;
          }
          return newMinutes;
        });
        return 0;
      }
      return newSeconds;
    });
  };

  return (
    <div className='bg_image p-5'>

        <div className='container mt-5 bg size border_rad  '>
            
        <h1 className='text-center txt '>Stop Watch</h1>
        <div className='stopwatch-container mt-5   '>

            <div className='display txt-color mt-5'>
                {`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
            </div>
             <div className='button-container mt-5'>
                 <button onClick={startStopwatch} className='rounded-pill'>Start</button>
                 <button onClick={stopStopwatch} className='rounded-pill'>Stop</button>
                 <button onClick={resetStopwatch} className='rounded-pill'>Reset</button>
            </div>
        </div>
        </div>
    </div>
  );
};

