// import { useState } from "react";
// import  "./style.css"

// const Counter = () => {
//     const [count, setCount] = useState(0);
//   return (
//     <>
//       <div className="Container">
//         <h1>Counter</h1>
//         <p>{count}</p>
//         <div>
//           <button onClick={() => setCount(count + 1)}>Increment</button>
//           <button onClick={() => setCount(0)}>Reset</button>
//           <button onClick={() => setCount(count - 1)}>Decrement</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Counter

import { useState } from "react";
import "./style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    let newCount = count + 1;
    // console.log("NEWCOUNT", newCount);
    newCount = count + 1;
    // console.log("NEWCOUNT AFTER", newCount);
    if (newCount % 10 === 0) {
      newCount++;
    }
    setCount(newCount);
  };

  const handleDecrement = () => {
    let newCount = count - 1;
    if(newCount % 10 === 0){
        newCount--;
    }
    setCount(newCount);
  };

    const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1 className="title">Counter App</h1>
      <p className="count-display">{count}</p>
      <div className="button-group">
        <button className="btn increment" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn reset" onClick={handleReset}>
          Reset
        </button>
        <button className="btn decrement" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
