import React from 'react';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustonHook = () => {
  const { state, increment, decrement, reset } = useCounter(30);
  return (
    <>
      <h2>Counter {state}</h2>
      <button className='btn btn-primary' onClick={() => increment(2)}>
        +1
      </button>
      <button className='btn btn-success' onClick={reset}>
        Reset
      </button>
      <button className='btn btn-danger' onClick={() => decrement(3)}>
        -1
      </button>
      <hr />
    </>
  );
};
