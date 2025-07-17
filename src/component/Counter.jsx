import { useState } from "react";
import  "./style.css"

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <>
      <div className="Container">
        <h1>Counter</h1>
        <p>{count}</p>
        <div>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default Counter