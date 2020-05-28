import React, { Component, Fragment } from "react";
import { Form, Row, Col, Button, Input } from "antd";
class FormTest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = () => {
    const { form } = this.props;
    form.validateFieldsAndScroll((err, values) => {
      console.log("err>>>", err, values);
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form>
        <Row>
          <Col>
            <Form.Item label="测试formItem里面元素被包裹">
              {getFieldDecorator("amount")(
                // <Fragment>
                  <Input />
                // </Fragment>
              )}
            </Form.Item>
          </Col>
          <Col>
            <Button onClick={this.submit}>测试</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}
export default Form.create()(FormTest);
