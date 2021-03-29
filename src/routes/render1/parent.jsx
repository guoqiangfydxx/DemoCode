import React, { useState } from "react";
import { Button } from "antd";

function Child(props) {
  const { isShowBtn } = props;
  console.log("函数组件 render");
  console.log("props>>>>", props);
  return (
    <div>
      <p>子组件</p>
      {isShowBtn && <Button>child Click me</Button>}
    </div>
  );
}

const ChildComponent = React.memo(Child);

function Parent() {
  // 使用React.memo可以解决无效的render次数
  const [isShowBtn, setIsShowBtn] = useState(false);
  const [person, setPerson] = useState({
    name: "tom",
    age: 232,
  });
  const [refresh, setRefresh] = useState(false);

  function handleClick() {
    setRefresh(!refresh);
  }

  return (
    <div>
      <p>父组件</p>
      <Button onClick={handleClick}>click me</Button>
      <ChildComponent isShowBtn={isShowBtn} person={person} />
    </div>
  );
}
export default Parent;
