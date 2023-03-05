import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  }

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">
        Click if you Like the Project!
      </div>
      <div className="card-body">
        <p className="card-text">Like Count: {count}</p>
        <button className="btn btn-primary" onClick={handleIncrement()}>
          Increment
        </button>
      </div>
    </div>
  )
}

export default Counter;