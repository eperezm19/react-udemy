import React, { useMemo } from 'react';
import { useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effect.css';

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(false);

  const memoProcesoPedaso = useMemo(() => procesoPesado(counter), [counter]);
  return (
    <div>
      <h1>MemoHook</h1>
      <h2>
        Counter:<small>{counter}</small>
      </h2>
      <hr />

      <p>{memoProcesoPedaso}</p>

      <button className='btn btn-primary' onClick={increment}>
        +1
      </button>

      <button
        className='btn btn-primary ml-3'
        onClick={() => {
          setShow(!show);
        }}
      >
        {` show/hidden ${JSON.stringify(show)}`}
      </button>
    </div>
  );
};
