import './App.css';
import React from 'react';
// import TodoList from './pages/TodoList';
import { Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import TodoList from './pages/TodoList.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<TodoList />} />
      <Route path='/:id' element={<Detail />} />
    </Routes>
  );
};

export default App;
