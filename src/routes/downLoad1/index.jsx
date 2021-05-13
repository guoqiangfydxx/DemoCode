import React from "react";
class Test extends React.Component {
  state = {};

  componentDidMount() {
    // 同时触发3个不同的a链接的click事件，但是这里只触发了一次
    const node1 = document.getElementById("a1");
    const node2 = document.getElementById("a1");
    const node3 = document.getElementById("a1");
    node1.click();
    node2.click();
    node3.click();
  }

  render() {
    return (
      <div>
        <a
          id="a1"
          href={
            "http://192.168.9.167/group1/M00/0B/11/wKgJp2BUWdyAfr5pAAApePIwk9M61.xlsx?visitType=ins&categoryId=1231&sign=ODViNTM5YmRlN2NiODk4ZmZlMzRmZjFhMjk2NjIyN2Q="
          }
        >
          测试1
        </a>
        <a
          id="a2"
          href={
            "http://192.168.9.167/group1/M00/0B/11/wKgJp2BUWoaAMiTJAABG7tYQpE850.xlsx?visitType=ins&categoryId=1231&sign=YzhkMjNjZjhhNWVkZDA1M2ExNmU1OGVkZTJjMmVjNzQ="
          }
        >
          测试2
        </a>
        <a
          id="a3"
          href={
            "http://192.168.9.167/group1/M00/0B/11/wKgJp2BUWpyAPHuCAAAnOwytAR040.xlsx?visitType=ins&categoryId=1231&sign=NmVhMjc5ZTIwYTAyNDU1ZjE2ZDJiMDcyOTQxMzhmNDQ="
          }
        >
          测试3
        </a>
        <div dangerouslySetInnerHTML={{ __html: `<a href='https://fileupload-testing-1257121556.cos.ap-shanghai.myqcloud.com/1231/19950e191b194bde8ff36b194d66e35d.xlsx'>企业信息-1</a>`}} />
      </div>
    );
  }
}
export default Test;
