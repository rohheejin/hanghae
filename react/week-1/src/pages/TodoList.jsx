import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import Form from '../components/form/Form';
import List from '../components/list/List';

const TodoList = () => {
  const [data, setData] = useState([
    { id: 1, title: 'REACT공부하기', body: '역시 어렵군요', isDone: false },
    { id: 2, title: '1주차 과제', body: '어렵다', isDone: true },
  ]);

  return (
    <div>
      <Layout>
        <Header />
        <Form data={data} setData={setData} />
        <List data={data} setData={setData} />
      </Layout>
    </div>
  );
};

export default TodoList;
