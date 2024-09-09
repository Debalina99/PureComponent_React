import { useState } from 'react'
import './App.css';
import Child from './Child';
function App() {
  const [name, setName] = useState('');
  const inputHandler = (e) => {
    setName(e.target.value);
  }
  return (
    <div className="App">
      <h2>Pure Component</h2>
      <input value={name} onChange={inputHandler} />
      <Child fruit="Apple" />
    </div>
  );
}

export default App;
