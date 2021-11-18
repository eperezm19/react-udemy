import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../05-useLayoutEffect/layout.css';

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect!!</h1>
      <hr />
      <figure className='text-end'>
        <blockquote className='blockquote'>
          <p ref={pTag}>{quote}</p>
        </blockquote>
        <figcaption className='blockquote-footer'>{author}</figcaption>
      </figure>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <button
        className={loading ? 'btn btn-primary disabled' : 'btn btn-primary'}
        type='button'
        onClick={increment}
      >
        {loading && (
          <span
            className='spinner-border spinner-border-sm'
            role='status'
            aria-hidden='true'
          ></span>
        )}
        {loading ? ' Loading...' : 'Siguiente Quote'}
      </button>
    </div>
  );
};
