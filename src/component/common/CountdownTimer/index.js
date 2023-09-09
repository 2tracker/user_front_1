import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { AiOutlinePauseCircle } from 'react-icons/ai';
import { BsPlayCircle } from 'react-icons/bs';

function CountdownTimer() {
  const initialTimeInSeconds = 8 * 60 * 60 + 30 * 60;
  const [timeRemaining, setTimeRemaining] = useState(initialTimeInSeconds);
  const [startTime, setStartTime] = useState(false) 

  useEffect(() => {
    if(startTime){
      const timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
          setTimeRemaining(timeRemaining - 1);
        } else {
          clearInterval(timerInterval);
        }
      }, 1000);
  
      return () => {
        clearInterval(timerInterval); // Clean up the interval when the component unmounts
      };
    }
  }, [timeRemaining, startTime]);

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className='flex items-center gap-3 border rounded-[4px] border-black px-2 py-1'>
      <div onClick={() => setStartTime(!startTime)} className='border p-1 rounded-md border-black'>
          {!startTime ? 
          
          <BsPlayCircle className="w-6"/>
          :
          <AiOutlinePauseCircle className="w-6"/>
          }
      </div>
      <div>
        {hours.toString().padStart(2, '0')}:
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </div>
    </div>
  );
}

export default CountdownTimer;
