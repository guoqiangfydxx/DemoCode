import React, { Component } from "react";
import { Button } from "antd";
export default class DownLoad extends Component {
  state = {};

  downloadFile = () => {
    window.open("");
  };

  render() {
    return (
      <div>
        <Button onClick={this.downloadFile}>下载</Button>
      </div>
    );
  }
}
