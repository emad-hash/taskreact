import {useState} from 'react';
import './comp.css';

function Child({handleClick}) {
  return <button onClick={handleClick}>Increment</button>;
}

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 100);
  }

  return (
    <div>
      <h1>Count is: {count}</h1>

      <Child handleClick={handleClick} />
    </div>
  );
}