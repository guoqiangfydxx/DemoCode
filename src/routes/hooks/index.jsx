import React, { useState, useEffect } from "react";
import { Button } from "antd";
import Capture from './capture'
function Counter() {
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    const id = setTimeout(() => {
      console.log("in>>>>>");
      setCount(count => count + 1);
    }, 1000);
    return () => clearTimeout(id);
  }, []);

  function handleAlertClick() {
    setTimeout(() => {
      alert("you clicked on:" + count);
    }, 3000);
  }
  return (
    <div>
      <p>you clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      <Button onClick={handleAlertClick}>show Alert</Button>
      <p>------------------------------------------------------捕获</p>
      <Capture />
    </div>
  );
}

export default Counter;
