import { useState } from 'react';

export const useCounter = (initialState = 0) => {
  const [state, setState] = useState(initialState);

  const increment = (factory) => {
    setState(state + factory);
  };

  const decrement = (factory) => {
    setState(state - factory);
  };

  const reset = () => {
    setState(initialState);
  };

  return {
    state,
    increment,
    decrement,
    reset,
  };
};
