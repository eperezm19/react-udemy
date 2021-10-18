import React, { useState } from 'react';
import '../01-useState/counter.css';
export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
    counter5: 50,
  });

  const { counter1, counter2 } = state;

  const addCounter = () => {
    setState({
      ...state,
      counter1: counter1 + 1,
    });
  };
  return (
    <div>
      <h2>Counter 1 {counter1}</h2>
      <h2>Counter 2 {counter2}</h2>
      <button className='btn btn-primary' onClick={addCounter}>
        +1
      </button>
    </div>
  );
};
