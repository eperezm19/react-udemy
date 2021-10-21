import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import '../02-useEffect/effect.css';
import { Message } from './Message';

export const FormWhitCoustonHook = () => {
  const [formState, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formState;

  useEffect(() => {
    console.log('Cambio email');
  }, [email]);

  const handleSubmint = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmint}>
      <h2>useEffect</h2>
      <hr />
      <div className='form-group mt-3'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group mt-3'>
        <input
          type='email'
          name='email'
          className='form-control'
          placeholder='email@gmail.com'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group mt-3'>
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='*******'
          autoComplete='off'
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type={'submit'} className='btn btn-primary mt-3'>
        Guardar
      </button>
      {name === '123' && <Message />}
    </form>
  );
};
