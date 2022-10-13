import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteTodo, toggleStatusTodo } from '../../redux/modules/todos';
import styled from 'styled-components';

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const onComplete = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <div className='list'>
      <h1>Working</h1>
      <StListWrapper>
        {todos.map((data) => {
          if (data.isDone === false) {
            return (
              <StTodoContainer key={data.id}>
                <StLink to={`/${data.id}`} key={data.id}>
                  <div>상세보기</div>
                </StLink>
                <div className='todo-container'>
                  <h2>{data.title}</h2>
                  <p>{data.content}</p>
                  <StDialogFooter>
                    <StButton
                      borderColor='red'
                      onClick={() => {
                        onDelete(data.id);
                      }}
                    >
                      삭 제
                    </StButton>
                    <StButton
                      borderColor='green'
                      onClick={() => {
                        onComplete(data.id);
                      }}
                    >
                      {data.isDone ? '취 소' : '완 료'}
                    </StButton>
                  </StDialogFooter>
                </div>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>

      <h1>Done</h1>
      <StListWrapper>
        {todos.map((data) => {
          if (data.isDone) {
            return (
              <StTodoContainer key={data.id}>
                <StLink to={`/${data.id}`} key={data.id}>
                  <div>상세보기</div>
                </StLink>
                <div className='todo-container'>
                  <h2>{data.title}</h2>
                  <p>{data.content}</p>
                  <StDialogFooter>
                    <StButton
                      borderColor='red'
                      onClick={() => {
                        onDelete(data.id);
                      }}
                    >
                      삭 제
                    </StButton>
                    <StButton
                      borderColor='green'
                      onClick={() => {
                        onComplete(data.id);
                      }}
                    >
                      {data.isDone ? '취 소' : '완 료'}
                    </StButton>
                  </StDialogFooter>
                </div>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
    </div>
  );
};

export default List;

const StListWrapper = styled.div`
  gap: 12px;
  display: flex;
  flex-wrap: wrap;
`;

const StTodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const StLink = styled(Link)`
  text-decoration: none;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;
