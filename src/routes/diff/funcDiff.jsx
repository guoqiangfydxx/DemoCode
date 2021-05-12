import React, { useState, useEffect } from "react";
import { Button } from "antd";
function fibonacci(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacciWithTime = (n) => {
  console.time("计算斐波那契数列");
  const res = fibonacci(n);
  console.timeEnd("计算斐波那契数列");
  return res;
};

function TestFunc() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [age, setAge] = useState(21);

  useEffect(() => {
    // 把数字翻译成字符串，一共有多少种不同的翻译方法，要使用动态规划来解决这一类问题，对于字符串中的第i个位置上的字符来说，其可以被当做一位来翻译，也可以和i-1位组合一下，如果在10到25的这个区间之内的话，那么就可以被当做两位来一起翻译
    // 我们考虑使用f(i)来标识以i位结尾的翻译方案数，那么如果是单独翻译的话f(i) = f(i - 1), 如果是联合第i-1位一起翻译的话就是f(i) = f(i - 2);所以的话f(i) = f(i-1) + f(i - 2)
    // 我们设置初始值dp[0] = 1,我们应该已经dp[0]和d[1]作为初始值，否则的话就会有问题，而且dp[1]还是需要计算的
    function translate(num) {
      const str = num.toString();
      const dp = new Array(str.length);
      dp[0] = 1;
      const first = Number(str[0] + str[1]);
      if (first >= 10 && first <= 25) {
        dp[1] = 2;
      } else {
        dp[1] = 1;
      }
      for (let i = 2; i < str.length; i++) {
        const n = parseInt(str[i - 1] + str[i], 10);
        if (n >= 10 && n <= 25) {
          dp[i] = dp[i - 1] + dp[i - 2];
        } else {
          dp[i] = dp[i - 1];
        }
      }
      console.log(dp);
      return dp[str.length - 1];
    }


    function translate(num) {
      const str = num.toString();
      let prev = 1;
      let curr
      const first = Number(str[0] + str[1]);
      if (first >= 10 && first <= 25) {
        curr = 2;
      } else {
        curr = 1;
      }
      for (let i = 2; i < str.length; i++) {
        const n = Number(str[i - 1] + str[i]);
        if (n >= 10 && n <= 25) {
          const temp = curr
          curr = prev + curr
          prev = temp
        } else {
          prev = curr;
        }
      }
      return curr;
    }

    // 每个workInProgress tree节点上都有一个effect list存放diff结果，更新完毕之后updateQueue进行收集

    // 这种求取价值的最大值，不能简单判断每一次的大小来作为判断，否则的话很容易出现问题；解决这一类问题还态是需要使用到动规划方程的，
  }, []);

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
