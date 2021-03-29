import React, { useEffect, useMemo, useState } from "react";
const renderCntMap = {};
function Comp({ name }) {
  renderCntMap[name] = (renderCntMap[name] || 0) + 1;
  return (
    <div>
      组件{name} render次数：{renderCntMap[name]}
    </div>
  );
}

// 通常情况下我们使用useMemo是用来缓存计算结果的值的，但是这里使用了useMemo来返回虚拟dom，相对于React.memo要更加的方便和灵活，因为useMemo可以设置依赖数组项，用来设定到底哪些props改变之后才会触发组件更新
export default function App() {
  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCnt((v) => v + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [setCnt]);

  const comp = useMemo(() => {
    return <Comp name="使用useMemo作为children" />;
  }, []);

  return (
    <div>
      <Comp name="直接作为children" />
      {comp}
    </div>
  );
}
