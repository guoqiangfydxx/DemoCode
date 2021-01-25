import React from "react";
import { Form, Input, Row, Col, Button } from "antd";
class NormalForm extends React.Component {
  state = {};

  submit = () => {
    console.log("normal>>>");
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Form>
        <Row>
          <Col>
            <Form.Item label="邮箱">
              {getFieldDecorator("email")(<Input />)}
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Button onClick={this.submit}>提交</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}
export default Form.create()(NormalForm);
