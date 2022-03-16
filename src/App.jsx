import { useState } from 'react';
import AnotherComponent from './AnotherComponent'
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <div>
        <h1>{count}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <AnotherComponent name="Facundo" />
    </div>
  );
}

export default App;
