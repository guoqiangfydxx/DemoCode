import React from "react";
import { Button, Dropdown, Menu } from "antd";
class ContextMenu extends React.Component {
  state = {};

  handleClick = () => {
    console.log("click");
  };

  handleCopy = ({ item, key, keyPath, domEvent}) => {
    console.log("event>>>>>", domEvent);
    domEvent.stopPropagation();
    console.log("copy");
  };

  render() {
    const menu = (
      <Menu onClick={this.handleCopy}>
        <Menu.Item key="1">
          复制
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <p onClick={this.handleClick}>
          <Dropdown overlay={menu} trigger={["contextMenu"]}>
            <div
              style={{
                textAlign: "center",
                background: "#f7f7f7",
                height: 200,
                lineHeight: "200px",
                color: "#777",
              }}
            >
              Right Click on here
            </div>
          </Dropdown>
        </p>
      </div>
    );
  }
}
export default ContextMenu;
