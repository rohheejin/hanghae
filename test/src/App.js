import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([
    { id: 1, title: 'REACT를 배워봅시다' },
    { id: 2, title: 'useState를 활용합시다' },
  ]);

  const [state, setState] = useState({ title: '' });

  const handleChange = (e) => {
    console.log(e.target.value);
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    const obj = { id: data.length + 1, title: state.title };
    setData([...data, obj]);
    console.log({ title: state.title });
  };

  return (
    <div className='App'>
      <div className='form-nav'>
        <input type='text' name='title' value={state.title} onChange={handleChange} required />
        <button onClick={handleClick}>추가하기</button>
      </div>
      <h1>Todo List</h1>
      <div className='form-list'>
        {data.map((data) => {
          return (
            <div className='list-container' key={data.id}>
              <div className='list-title'>{data.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
