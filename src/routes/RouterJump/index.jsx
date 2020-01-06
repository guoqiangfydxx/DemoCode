import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
class RuoterJump extends Component {
  state = {};

  jump = () => {
    setTimeout(() => {
      this.props.history.push({
        pathname: "/chart",
        state: {
          orderNo: 51555
        }
      });
    }, 2000);
  };

  render() {
    return (
      <div>
        <p>测试路由延迟跳转</p>
        <Button onClick={this.jump}>跳转</Button>
      </div>
    );
  }
}
export default withRouter(RuoterJump);
