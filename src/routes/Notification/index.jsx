import React from "react";
import { Button, notification } from "antd";
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openNotification = () => {
    const key = "updatable";
    notification.open({
      key,
      message: "Notification Title",
      description: "description.",
    });
  };
  openNotification1 = () => {
    const key = "updatable2";
    notification.open({
      key,
      message: "Notification Title2",
      description: "description2.",
    });
  };
  openNotification2 = () => {
    const key = "updatable1";
    notification.open({
      key,
      message: "Notification Title1",
      description: "description.1",
    });
  };

  closeAll = () => {
    // 调用一次destroy就会把所有现在展示的notification全部关闭掉
    notification.destroy();
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.openNotification}>
          Open the notification box
        </Button>
        <Button type="primary" onClick={this.openNotification1}>
          Open the notification box1
        </Button>
        <Button type="primary" onClick={this.openNotification2}>
          Open the notification box2
        </Button>
        <Button type="primary" onClick={this.closeAll}>
          close
        </Button>
      </div>
    );
  }
}
export default Test;
