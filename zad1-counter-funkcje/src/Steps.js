import React, { forwardRef } from 'react';
import './Steps.css';

function Steps(_, ref) {
  return (
    <div className='steps-cont'>
      <h2>Krok: </h2>
      <input ref={ref} type='number' min='1' max='100' step='1' />
    </div>
  );
}

export default forwardRef(Steps);
