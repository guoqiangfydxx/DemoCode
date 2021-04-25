import React from "react";
function debounce(func, wait) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);

    let callNow = !timeout;
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);

    if (callNow) func.apply(context, args);
  };
}

function showTop() {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  console.log("滚动条位置：" + scrollTop);
}
class TestDebounce extends React.Component {
  state = {};

  componentDidMount() {
    window.onscroll = debounce(showTop, 1000);
  }

  render() {
    return <div>debounce</div>;
  }
}
export default TestDebounce;
