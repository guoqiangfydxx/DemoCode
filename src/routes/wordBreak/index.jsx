import React, { Component } from "react";
import "./index.less";
export default class WordBreakTest extends Component {
  state = {};

  render() {
    return (
      <div className="word-break-test">
        <p className="test1">
          在澳门创业,曾经是一个容易被外界误解为有点“傻”的决定,如今却有越来越多的澳门年轻人愿意尝试更多可能,一股创新创业的热潮正在澳门兴起。追梦路上,他们一步一个脚印,走出属于自己的人生印记。
        </p>
        <p className="test2">
          In Cantonese, "handwritten letter" generally refers to special
          products and souvenirs brought back by tourism, while in Macao, it
          mainly refers to specialty food. In this 50 meter long "letter
          Street", the "Juji cake house" with seven stores is a brand that
          tourists can't get around. Liang canguang, founder of Juji pancake
          family, felt the most about the changes after Macao's return to the
          motherland from a "wandering stall" with only 2 employees to more than
          20 branches in Macao.
        </p>
      </div>
    );
  }
}
