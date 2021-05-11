import React, { useState } from "react";
import { Button } from "antd";
function TestFunc() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [age, setAge] = useState(21);

  function handleIncrease() {
    setCount(count + 1);
  }

  return (
    <div>
      <Button onClick={handleIncrease} block>
        increase
      </Button>
      <p>count的值为: {count}</p>
    </div>
  );
}
export default TestFunc;
