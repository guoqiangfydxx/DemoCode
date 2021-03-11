import React from "react";
import { TreeSelect } from "antd";
class TreeSelectTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
      // treeData: [
      //   {
      //     value: "25359",
      //     title: "王伟",
      //     pId: 33123,
      //     id: 25359,
      //   },
      //   {
      //     value: "33123",
      //     title: "李亚伦",
      //     pId: 25201,
      //     id: 33213,
      //   },
      //   {
      //     value: "33123",
      //     title: "李亚伦",
      //     pId: 33123,
      //     id: 33123,
      //   },
      //   {
      //     value: "35508",
      //     title: "宫哲",
      //     pId: 33123,
      //     id: 35508,
      //   },
      //   {
      //     value: "39072",
      //     title: "张宏",
      //     pId: 33123,
      //     id: 39072,
      //   },
      //   {
      //     value: "25359",
      //     title: "王伟",
      //     pId: "25359",
      //     id: 25359,
      //   },
      //   {
      //     value: "33123",
      //     title: "李亚伦",
      //     pId: "33123",
      //     id: 33123,
      //   },
      //   {
      //     value: "35508",
      //     title: "宫哲",
      //     pId: "35508",
      //     id: 35508,
      //   },
      //   {
      //     value: "39072",
      //     title: "张宏",
      //     pId: "39072",
      //     id: 39072,
      //   },
      // ],
      treeData: [
        { id: 1, pId: 0, value: "1", title: "Expand to load" },
        { id: 2, pId: 0, value: "2", title: "Expand to load" },
        { id: 3, pId: 0, value: "3", title: "Tree Node", isLeaf: true },
        { id: 4, pId: 1, value: "4", title: "test1" },
        { id: 5, pId: 2, value: "5", title: "test2" },
      ],
    };
  }

  componentDidMount() {
    // const { treeData, otherData } = this.state;
    // for (const tree of treeData) {
    //   tree.id = tree.value;
    //   tree.value = tree.value;
    //   tree.pId = tree.pId;
    //   tree.title = tree.title;
    // }
    // this.setState({
    //   treeData: treeData,
    // });
  }

  // genTreeNode = (parentId, isLeaf = false) => {
  //   const random = Math.random().toString(36).substring(2, 6);
  //   return {
  //     id: random,
  //     pId: parentId,
  //     value: random,
  //     title: isLeaf ? "Tree Node" : "Expand to load",
  //     isLeaf,
  //   };
  // };

  onChange = (value) => {
    console.log(value);
    this.setState({ value });
  };

  // onLoadData = (treeNode) =>
  //   new Promise((resolve) => {
  //     const { id } = treeNode.props;
  //     setTimeout(() => {
  //       this.setState({
  //         treeData: this.state.treeData.concat([
  //           this.genTreeNode(id, false),
  //           this.genTreeNode(id, true),
  //         ]),
  //       });
  //       resolve();
  //     }, 300);
  //   });

  render() {
    const { treeData } = this.state;
    console.log("treeData>>", treeData);
    return (
      <TreeSelect
        treeDataSimpleMode
        style={{ width: "100%" }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        placeholder="Please select"
        onChange={this.onChange}
        // loadData={this.onLoadData}
        treeData={treeData}
      />
    );
  }
}
export default TreeSelectTest;
