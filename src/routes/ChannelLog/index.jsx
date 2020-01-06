import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./index.less";

const content = "";

class ChannelLog extends React.Component {
  state = {
    text: content
  };

  componentDidMount() {}

  handleChange = value => {
    this.setState({
      text: value
    });
  };

  componentWillUnmount() {}

  render() {
    return <ReactQuill value={this.state.text} onChange={this.handleChange} />;
  }
}

export default ChannelLog;
