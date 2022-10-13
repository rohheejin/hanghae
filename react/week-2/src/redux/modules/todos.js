// src/redux/modules/counter.js

// Action Value
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_STATUS_TODO = 'TOGGLE_STATUS_TODO';
const GET_TODO_BY_ID = 'GET_TODO_BY_ID';

// Action Creator
export const addTodo = (payload) => {
  console.log(payload);
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

export const getTodoByID = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

// Initial State
const initialState = {
  todos: [
    {
      id: '1',
      title: 'react를 배워봅시다',
      content: 'react 어렵다',
      isDone: false,
    },
    {
      id: '2',
      title: 'react를 배워봅시다',
      content: 'react 어렵다',
      isDone: false,
    },
  ],
  todo: [
    {
      id: '0',
      title: '',
      content: '',
      isDone: false,
    },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };

    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

// export default reducer
export default todos;
