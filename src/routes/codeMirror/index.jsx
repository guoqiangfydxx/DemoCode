import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
// import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/javascript/javascript.js";
import { Modal, Button, Row, Col, Form } from "antd";
class CodeMirrorComponent extends React.Component {
  state = {
    value:
      '{\n  name: "tom",\n  age: 546,\n  birthday: "2020-01-01",\n  test2: "sdfsdfsdf"\n}',
    isShowModal: false,
  };

  hideModal = () => {
    this.setState({
      isShowModal: false,
    });
  };

  handleClick = () => {
    this.setState({
      isShowModal: true,
    });
  };

  render() {
    console.log("val>>>>", this.state.value);
    const { isShowModal } = this.state;
    return (
      <div>
        <Button onClick={this.handleClick}>测试</Button>
        {isShowModal && (
          <Modal
            title={"测试"}
            visible={isShowModal}
            destoryOnClose
            footer={null}
            onCancel={this.hideModal}
            width={960}
          >
            <Form>
              <Row>
                <Col>
                  <CodeMirror
                    value={this.state.value}
                    options={{
                      lineNumbers: true,
                      lineWrapping: true,
                      // lineWiseCopyCut: true,
                      autofocus: true,
                      // autocorrect: true,
                      mode: { name: "javascript", json: true },
                    }}
                    onBeforeChange={(editor, data, value) => {
                      this.setState({ value });
                    }}
                    onChange={(editor, data, value) => {
                      console.log("change>>>", editor, data, value);
                    }}
                  />
                </Col>
              </Row>
            </Form>
          </Modal>
        )}
      </div>
    );
  }
}
export default CodeMirrorComponent;
