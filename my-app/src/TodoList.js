import React, { useState } from "react";

const ToDoList = () => {
  const [num, setNum] = useState(5);
  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("Zero limit reached");
    }
  };
  return (
    <div>
      <div className="main_div">
        <div className="center_div">
          <h1>{num}</h1>
          <div className="btn_div">
            <button onClick={incNum}>Increment</button>
            <button onClick={decNum}>Decrement</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ToDoList;
