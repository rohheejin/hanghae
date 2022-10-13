import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/modules/todos';
import { useSelector } from 'react-redux';
import nextId from 'react-id-generator';
import styled from 'styled-components';

const Form = () => {
  const id = nextId();

  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: '0',
    title: '',
    content: '',
    isDone: false,
  });

  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // input이 공백일때 추가 안됨
    if (todo.title.trim() === '' || todo.content.trim() === '') return;

    dispatch(addTodo({ ...todo, id }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput name='title' value={todos.title} type='text' onChange={handleChange} />
        <StFormLabel>내용</StFormLabel>
        <StAddInput name='content' value={todos.content} type='text' onChange={handleChange} />
      </StInputGroup>
      <StAddButton>추가하기</StAddButton>
    </StAddForm>
  );
};

export default Form;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
