import React from "react";
import { Tree } from "antd";

const { TreeNode } = Tree;

const treeData = [
  {
    title: "A1",
    key: "A1",
    children: [
      {
        title: "A11",
        key: "A11",
        children: [
          { title: "测试A123", key: "434" },
          { title: "地方V地方", key: "54545" }
        ]
      }
    ]
  },
  {
    title: "Novel",
    key: "Novel",
    children: [
      {
        title: "ASA",
        key: "ASA",
        children: [{ title: "活动1", key: "5454" }]
      },
      {
        title: "England",
        key: "England",
        children: [
          {
            title:
              "A Tale of Two Cities.A Tale of Two Cities.A Tale of Two Cities",
            key: "65656"
          }
        ]
      },
      {
        title: "Science",
        key: "Science",
        children: [
          { title: "咨询1", key: "9815" },
          { title: "咨询2", key: "815" }
        ]
      }
    ]
  },
  {
    title: "代驾",
    key: "代驾",
    children: [
      {
        title: "测试测试",
        key: "测试测试",
        children: [{ title: "下单操作流程", key: "1515545" }]
      },
      {
        title: "代驾核销",
        key: "代驾核销",
        children: [{ title: "银行进账", key: "845451" }]
      },
      {
        title: "Science",
        key: "Science",
        children: [
          { title: "咨询1", key: "9815" },
          { title: "咨询2", key: "815" }
        ]
      }
    ]
  },
  {
    title: "一级1",
    key: "一级1",
    children: [
      {
        title: "二级",
        key: "654545",
        children: [
          {
            title: "三级",
            key: "54235342"
          }
        ]
      }
    ]
  }
];

class Demo extends React.Component {
  state = {
    expandedKeys: [],
    autoExpandParent: true,
    selectedKeys: []
  };

  onExpand = expandedKeys => {
    console.log("onExpand", expandedKeys);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false
    });
  };

  onSelect = (selectedKeys, info) => {
    console.log("onSelect", info);
    this.setState({ selectedKeys });
  };

  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} {...item} />;
    });

  render() {
    return (
      <Tree
        checkable={false}
        onExpand={this.onExpand}
        expandedKeys={this.state.expandedKeys}
        autoExpandParent={this.state.autoExpandParent}
        onSelect={this.onSelect}
        selectedKeys={this.state.selectedKeys}
      >
        {this.renderTreeNodes(treeData)}
      </Tree>
    );
  }
}
export default Demo;
