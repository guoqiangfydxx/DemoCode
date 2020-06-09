import React, { Fragment } from "react";
import { Form, Col, Row, Button, Select, Input } from "antd";

const { Option, OptGroup } = Select;
class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: []
    };
  }

  componentDidMount() {}

  handleInputChange = e => {
    const { value } = e.target;
    const { form2 } = this.props;
    form2.current.setFieldsValue({
      input3: value
    });
  };

  submit = () => {
    // 其可以实现几个表单共存和有错误的时候自动滚动的情况
    // this.props.form.validateFieldsAndScroll(
    //   {
    //     // scroll: {
    //     //   source: document.getElementById('btn-submit'),
    //     //   container: document.getElementsByClassName('form-body')[0],
    //     // }
    //   },
    //   (err, values) => {
    //     if (!err) {
    //       console.log("values>>>>>>>", values);
    //     }
    //   }
    // );
    const key = 13;
    this.props.form.setFieldsValue({
      [key]: true
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <Form className="form-body">
          <Row>
            <Col>
              <Form.Item label={"测试"}>
                {getFieldDecorator('test', {
                  // initialValue: 13,
                  rules: [
                    {
                      required: true,
                      message: `测试不能为空`
                    }
                  ],
                })(<Input />)}
              </Form.Item>
            </Col>
            <Col>
              <Button onClick={this.submit} id="btn-submit">
                提交
              </Button>
            </Col>
          </Row>
        </Form>
        <Select defaultValue="lucy" style={{ width: 200 }}>
          <OptGroup label="Manager">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </OptGroup>
          <OptGroup label="Engineer">
            <Option value="Yiminghe">yimingheddd测试git add -u</Option>
          </OptGroup>
        </Select>
      </Fragment>
    );
  }
}
export default Form.create()(Form1);
