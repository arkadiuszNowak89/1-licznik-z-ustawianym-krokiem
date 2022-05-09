import React, { useState, useRef } from 'react';
import './CounterCont.css';

import Counter from './Counter';
import ButtonsPanel from './ButtonsPanel';
import Steps from './Steps';

function CounterCont(props) {
  const [counterVal, setCounterVal] = useState(props.initStep);
  const inputEl = useRef(null);

  const click = (action) => {
    if (action === 'add') {
      setCounterVal(+counterVal + +inputEl.current.value);
    }
    if (action === 'reinit') {
      setCounterVal(props.initStep);
    }
    if (action === 'reset') {
      setCounterVal(0);
    }
  };

  return (
    <div className='container'>
      <Counter val={counterVal} />
      <ButtonsPanel event={click} />
      <Steps ref={inputEl} />
    </div>
  );
}

export default CounterCont;
