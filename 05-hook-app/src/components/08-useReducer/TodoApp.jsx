import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import '../08-useReducer/style.css';
import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';

// const initialState = [
//   {
//     id: new Date().getTime(),
//     description: 'Comprar pan',
//     done: false,
//   },
// ];

const init = () => {
  return JSON.parse(localStorage.getItem('todo')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos));
  }, [todos]);

  const handleSubmint = (e) => {
    e.preventDefault();

    const newElement = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    const action = {
      type: 'add',
      payload: newElement,
    };

    dispatch(action);
    reset();
  };

  const removeFromTodo = (todoId) => {
    const action = {
      type: 'remove',
      payload: todoId,
    };

    dispatch(action);
  };
  return (
    <>
      <h1>Todo List({todos.length})</h1>
      <hr />
      <div className='row'>
        <div className='col'>
          <ul className='list-group'>
            {todos.map((todo, i) => (
              <li
                className='list-group-item d-flex justify-content-between align-items-center'
                key={todo.id}
              >
                <p className='m-0 font-weight-bold'>
                  {i + 1}
                  {todo.description}
                </p>
                <button
                  className='btn btn-danger'
                  onClick={() => {
                    removeFromTodo(todo.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='col'>
          <h4>Agregar TODO</h4>
          <hr />
          <form action='' onSubmit={handleSubmint}>
            <div className='row'>
              <div className='col-12'>
                <input
                  onChange={handleInputChange}
                  value={description}
                  className='form-control'
                  type='text'
                  name='description'
                  placeholder='Que quieres hacer....'
                  autoComplete='off'
                />
              </div>
              <div className='col-12 mt-2'>
                <button type='submit' className='btn btn-outline-primary w-100'>
                  agregar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
