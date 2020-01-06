import React, { Component } from "react";
import Editor from "react-umeditor";

export default class Umditor extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.Umeditor = React.createRef();
  }

  handleChange(content) {
    const { updateContent } = this.props;
    updateContent && updateContent(content);
  }

  getIcons() {
    var icons = [
      "source | undo redo | bold italic underline strikethrough fontborder emphasis | ",
      "paragraph fontfamily fontsize | superscript subscript | ",
      "forecolor backcolor | removeformat | insertorderedlist insertunorderedlist | selectall | ",
      "cleardoc  | indent outdent | justifyleft justifycenter justifyright | touppercase tolowercase | ",
      "horizontal date time  | image emotion spechars | inserttable"
    ];
    return icons;
  }

  getPlugins() {
    return {
      image: {
        uploader: {
          name: "file",
          filter: res => res.result
        }
      }
    };
  }

  render() {
    const { content } = this.props;
    var icons = this.getIcons();
    var plugins = this.getPlugins();
    return (
      <Editor
        ref={this.Umeditor}
        icons={icons}
        value={content}
        onChange={this.handleChange.bind(this)}
        plugins={plugins}
      />
    );
  }
}
