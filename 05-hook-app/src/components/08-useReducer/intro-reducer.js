console.log(`Hola Mundo`);

const initialState = [
  {
    id: 1,
    todo: 'Comprar pan',
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === 'agregar') {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newElement = {
  id: 2,
  todo: 'Comprar Arina',
  done: false,
};

const actions = {
  type: 'agregar',
  payload: newElement,
};

todos = todoReducer(todos, actions);

console.log(todos);
