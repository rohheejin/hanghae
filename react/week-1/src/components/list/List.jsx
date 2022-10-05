import React from 'react';
import Todo from '../todo/Todo';
import './style.css';

const List = ({ data, setData }) => {
  const onDelete = (id) => {
    console.log(id);
    const newData = data.filter((it) => it.id !== id);
    setData(newData);
  };

  const onComplete = (selectedId) => {
    const newTodo = data.map((data) => {
      if (data.id === selectedId) {
        return { ...data, isDone: !data.isDone };
      } else {
        return { ...data };
      }
    });
    setData(newTodo);
  };

  return (
    <div className='list'>
      <h1>Working</h1>
      <div className='list-wrapper'>
        {data.map((data) => {
          if (data.isDone === false) {
            return <Todo data={data} key={data.id} setData={setData} onDelete={onDelete} onComplete={onComplete} />;
          } else {
            return null;
          }
        })}
      </div>
      <h1>Done</h1>
      <div className='list-wrapper'>
        {data.map((data) => {
          if (data.isDone) {
            return <Todo data={data} key={data.id} setData={setData} onDelete={onDelete} onComplete={onComplete} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default List;
