import React from 'react';
import './ButtonsPanel.css';

function ButtonsPanel(props) {
  return (
    <div>
      <button className='btn' onClick={() => props.event('add')}>
        Add
      </button>
      <button className='btn' onClick={() => props.event('reinit')}>
        Reinit
      </button>
      <button className='btn' onClick={() => props.event('reset')}>
        Reset
      </button>
    </div>
  );
}

export default ButtonsPanel;
