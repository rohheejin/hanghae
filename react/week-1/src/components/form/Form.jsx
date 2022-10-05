import React from 'react';
import './style.css';
import { useState } from 'react';

const Form = ({ data, setData }) => {
  const [state, setState] = useState({
    title: '',
    content: '',
  });
  const handleClick = () => {
    const obj = { id: data.length + 1, title: state.title, body: state.content, isDone: false };
    setData([...data, obj]);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className='form'>
        <div className='input_container'>
          <label>제목</label>
          <input name='title' value={state.title} type='text' onChange={handleChange} />
          <label>내용</label>
          <input name='content' value={state.content} type='text' onChange={handleChange} />
        </div>
        <button onClick={handleClick}>추가하기</button>
      </div>
    </div>
  );
};

export default Form;
