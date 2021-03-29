import React, { useState } from "react";
function ExpensiveTree() {
  let now = performance.now();
  console.log("render>>>>>>>>");
  return <p>i am a very slow component tree </p>;
}

function Form() {
  let [color, setColor] = useState("red");
  return (
    <div>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
    </div>
  );
}

export default function App() {
  const [color, setColor] = useState("red");
  return (
    <div>
      {/* expensiveTree这个组件没有使用color这个props的话，那么就单独把使用到color这个props的几个组件合并到一起，这样的话就可以免于expensiveTree组件重新渲染 */}
      <Form />
      {/* <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p> */}
      <ExpensiveTree />
    </div>
  );
}
