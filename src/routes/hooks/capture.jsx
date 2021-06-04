/**
 * useEffect捕获
 */
import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
function Capture() {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 50,
    showTotal: (total) => `共${total}条数据`,
    onChange: onPageChange,
    showSizeChanger: true,
  });

  const [count, setCount] = useState(1);
  const [tableList, setTableList] = useState([]);

  function onPageChange(page, pageSize) {
    console.log("在onPageChange中的", count);
  }

  useEffect(() => {
    // const btn = document.querySelector('.test1')
    // btn.addEventListener('click', () => {
    //   console.log('此时的pagination是', pagination)
    // }, false)
  }, []);

  function handleClick() {
    setCount(5);
  }

  return (
    <div>
      <Button onClick={handleClick}>click me</Button>
      <Button className="test1">test Btn</Button>
      <Table pagination={pagination} dataSource={tableList} bordered></Table>
    </div>
  );
}
export default Capture;
