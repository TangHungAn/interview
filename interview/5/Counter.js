import React, { useState } from 'react';

function Counter() {
  // 使用 useState 來跟踪計數的狀態
  const [count, setCount] = useState(0);

  // 定義處理增加計數的函數
  const increaseCount = () => {
    setCount(count + 1);
  };

  // 定義處理減少計數的函數
  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>計數器: {count}</h1>
      <button onClick={increaseCount}>增加</button>
      <button onClick={decreaseCount}>減少</button>
    </div>
  );
}

export default Counter;
