import React, { useCallback, useState } from "react";
import { Button } from "antd";

function Child(props) {
  const { isShowBtn, handleSearch } = props;
  console.log("函数子组件 render");
  console.log("props>>>>", props);
  return (
    <div>
      <p>子组件</p>
      {isShowBtn && <Button onClick={handleSearch}>child Click me</Button>}
    </div>
  );
}

const ChildComponent = React.memo(Child);

function Parent() {
  // 使用React.memo可以解决无效的render次数，但是当我把函数传递给子组件的时候，因为每一次都是一个新的引用，这样的话useMemo不起作用了,在这种情况下需要使用useCallback来生成稳定值，避免子组件重新渲染
  const [isShowBtn, setIsShowBtn] = useState(true);
  const [person, setPerson] = useState({
    name: "tom",
    age: 232,
  });
  const [refresh, setRefresh] = useState(false);

  function handleClick() {
    setRefresh(!refresh);
  }

  const handleSearch = useCallback(() => {
    console.log("handleSearch");
  }, []);

  return (
    <div>
      <p>父组件</p>
      <Button onClick={handleClick}>click me</Button>
      <ChildComponent
        isShowBtn={isShowBtn}
        person={person}
        handleSearch={handleSearch}
      />
    </div>
  );
}
export default Parent;
