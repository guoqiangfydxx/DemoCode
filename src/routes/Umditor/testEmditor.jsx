/**
 * @description 创建新邮件
 */
import React, { Component } from "react";
import {
  Button,
  Divider,
  Form,
  Row,
  Col
} from "antd";
import Umditor from "./index";

const FormItem = Form.Item;
const defaultFormItemConfig = {
  // 不显示冒号
  colon: true,
  labelCol: {
    sm: { span: 4 },
    md: { span: 2 }
  },
  wrapperCol: {
    sm: { span: 15 },
    md: { span: 14 }
  }
};
class NewMail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.editor = React.createRef();
  }

  componentDidMount() {
    document.addEventListener(
      "selectionchange",
      this.HandleSelectionChange,
      false
    );
  }

  HandleSelectionChange = () => {
    var sel = window.getSelection && window.getSelection();
    if (sel && sel.rangeCount > 0) {
      this.savedRange = sel.getRangeAt(0);
      console.log("saveRange>>>>>", this.savedRange);
    }
  };

  // 删除上传的文件
  onRemove = file => {
    this.setState(state => {
      const index = state.fileList.indexOf(file);
      const newFileList = state.fileList.slice();
      newFileList.splice(index, 1);
      return {
        fileList: newFileList
      };
    });
  };

  // 修改邮件正文
  updateContent = content => {
    this.setState({
      mailContent: content
    });
  };

  test = () => {
    this.savedRange.insertNode(document.createTextNode("插入的值"));
    this.editor.current.Umeditor.current.focusEditor();
  };

  submit = () => {
    const editor = this.editor.current.Umeditor.current;
    console.log("content>>>>>", editor.getContent());
  };

  render() {
    const {
      mailContent
    } = this.state;
    return (
      <div className="mail-container">
        <div className="create-new-mail">
          <Divider />
          <Form {...defaultFormItemConfig} className="query-form">
            <Row>
              <Col>
                <FormItem label="内容" wrapperCol={{ span: 22 }}>
                  <Umditor
                    ref={this.editor}
                    updateContent={this.updateContent}
                    content={mailContent}
                  />
                </FormItem>
              </Col>
            </Row>
          </Form>
        </div>
        <Button onClick={this.test}>测试</Button>
        <Button onClick={this.submit}>提交</Button>
      </div>
    );
  }
}
export default Form.create()(NewMail);
