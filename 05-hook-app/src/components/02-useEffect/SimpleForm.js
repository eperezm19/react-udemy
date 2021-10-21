import React, { useEffect, useState } from 'react';
import '../02-useEffect/effect.css';
import { Message } from './Message';
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log('Hey!');
  }, []);

  useEffect(() => {
    // console.log('Cambio el form!');
  }, [formState]);

  useEffect(() => {
    // console.log('Email Cmbio!');
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <div>
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
      {name === '123' && <Message />}
    </div>
  );
};
