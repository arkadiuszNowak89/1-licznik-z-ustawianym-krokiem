import React from 'react';
import './Counter.css';

function Counter(props) {
  return (
    <div>
      <h2>Licznik: {props.val}</h2>
    </div>
  );
}

export default Counter;
