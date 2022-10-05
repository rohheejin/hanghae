import React from 'react';
import './style.css';

const Todo = ({ data, onDelete, onComplete }) => {
  return (
    <div className='todo-container'>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      <div className='button-container'>
        <button
          className='delete-button'
          onClick={() => {
            onDelete(data.id);
          }}
        >
          삭 제
        </button>
        <button
          className='complete-button'
          onClick={() => {
            onComplete(data.id);
          }}
        >
          {data.isDone ? '취 소' : '완 료'}
        </button>
      </div>
    </div>
  );
};

export default Todo;
