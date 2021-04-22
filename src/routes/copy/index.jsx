/**
 * @description 深拷贝和浅拷贝
 */
import React from "react";
class TestCopy extends React.Component {
  state = {};

  isObject = (obj) => {
    return typeof obj === "object" && obj !== null;
  };

  deepClone = (origin) => {
    if (!this.isObject(origin)) {
      return origin;
    }
    const newObj = Array.isArray(origin) ? [] : {};
    for (const propKey in origin) {
      if (typeof origin[propKey] === "object") {
        newObj[propKey] = this.deepClone(origin[propKey]);
      } else {
        newObj[propKey] = origin[propKey];
      }
    }
    return newObj;
  };

  deepCloneWithMap(origin, hash = new WeakMap()) {
    if (hash.has(origin)) {
      return hash.get(origin);
    }
    if (!this.isObject(origin)) {
      return origin;
    }
    const newObj = Array.isArray(origin) ? [] : {};
    hash.set(origin, newObj);
    for (const key in origin) {
      newObj[key] = this.isObject(origin[key])
        ? this.deepCloneWithMap(origin[key], hash)
        : origin[key];
    }
    return newObj;
  }

  deepCloneAllObj(origin) {
    if (!this.isObject(origin)) {
      return origin;
    }
    const constructor = origin.constructor;
    switch (constructor) {
      case Number:
      case String:
      case Boolean:
      case RegExp:
        return origin.valueOf();
      case Date:
        return new Date(origin.valueOf());
      default:
        return this.deepCloneWithMap(origin);
    }
  }

  componentDidMount() {
    // 1. 通过递归的方式来实现深拷贝, 这种是最常见的
    let person = { name: "tom", age: 23 };
    const person2 = this.deepClone(person);
    person2.name = "john";
    console.log("person----", person);
    console.log("person2>>>", person2);

    // 2. 循环引用, 直接栈溢出了
    // const test = {
    //   info: {
    //     name: 'kobe',
    //     nums: [1,2,3]
    //   }
    // }
    // test.loop = test
    // const test2 = this.deepClone(test)
    // test.info.nums.push(4)
    // console.log('test>>>', test, test2)

    // 3. 解决循环引用的问题的话，这里是使用到WeakMap来存储拷贝过的对象
    const test = {
      info: {
        name: "kobe",
        nums: [1, 2, 3],
      },
    };
    test.loop = test;
    const test2 = this.deepCloneWithMap(test);
    test.info.nums.push(4);
    console.log("test>>>", test, test2);

    // 4. 包含包装类
    const num = new Number(32);
    const str = new String("sdf");
    const bool = new Boolean(true);
    const reg = /[0-9]+/g;
    const obj = {
      info: {
        name: "kobe",
        nums: [1, 2, 3],
      },
    };
    obj.loop = obj;

    const num1 = this.deepCloneAllObj(num);
    console.log("num>>>>>", num1, num, typeof num1);

    const str1 = this.deepCloneAllObj(str);
    console.log("str>>>>>", str, str1, typeof str1);

    const bool1 = this.deepCloneAllObj(bool);
    console.log("str>>>>>", bool, bool1, typeof bool1);

    const reg1 = this.deepCloneAllObj(reg);
    console.log("str>>>>>", reg, reg1, typeof reg1);

    const obj1 = this.deepCloneAllObj(obj);
    obj1.info.nums.push(6);
    console.log("obj1>>>>>", obj1);
    console.log("obj>>>>>", obj);

    function permutate(str) {
      var result = [];
      if (str.length > 1) {
        var left = str[0];
        var rest = str.slice(1, str.length);
        var preResult = permutate(rest);
        for (var i = 0; i < preResult.length; i++) {
          for (var j = 0; j < preResult[i].length; j++) {
            var tmp =
              preResult[i].slice(0, j) +
              left +
              preResult[i].slice(j, preResult[i].length);
            result.push(tmp);
          }
        }
      } else if (str.length == 1) {
        return [str];
      }
      return result;
    }
  }

  render() {
    return <div>js中的拷贝</div>;
  }
}
export default TestCopy;
