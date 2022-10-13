import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([
    { id: 1, title: 'REACT를 배워봅시다' },
    { id: 2, title: 'useState를 활용합시다' },
  ]);
  const [state, setState] = useState('');

  // []:Array
  // {title:'value'}:Object
  // '':String
  // 1:number

  const onChange = (e) => {
    setState(e.target.value);
  };

  const onClick = () => {
    const a = { id: data.length + 1, title: state };
    setData([...data, a]);
  };

  return (
    <div className='App'>
      <div className='form-nav'>
        <input type='text' name='title' required onChange={onChange} />
        <button onClick={onClick}>추가하기</button>
      </div>
      <h1>Todo List</h1>
      <div className='form-list'>
        {data.map((item) => (
          <div className='list-container' key={item.id}>
            <div className='list-title'>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
