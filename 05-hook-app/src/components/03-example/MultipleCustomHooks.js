import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>Breaking Bad!!</h1>
      <hr />
      {loading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <figure className='text-end'>
          <blockquote className='blockquote'>
            <p>{quote}</p>
          </blockquote>
          <figcaption className='blockquote-footer'>{author}</figcaption>
        </figure>
      )}
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
