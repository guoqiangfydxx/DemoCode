import React from "react";
import { Tabs, Form, Row, Col, Input, Button } from "antd";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import Form4 from "./form4";

const { TabPane } = Tabs;
const formRefArr = ["form1", "form2", "form3", "form4"];
const formRefEnumForAciveKey = {
  form1: "1",
  form2: "2",
  form3: "3",
  form4: "4",
};
class TestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "1",
    };

    // this.form1 = React.createRef();
    // this.form2 = React.createRef();
    // this.form3 = React.createRef();
    // this.form4 = React.createRef();
    formRefArr.forEach((item) => {
      this[item] = React.createRef();
    });
  }

  customValidateForm2 = () => {
    return new Promise((resolve, reject) => {
      this.form2.current.validateFieldsAndScroll((err, values) => {
        if (err) {
          reject({
            activeKey: "2",
            errValues: err,
          });
        } else {
          resolve({
            FormData: values,
          });
        }
      });
    });
  };

  customValidateForm3 = () => {
    return new Promise((resolve, reject) => {
      this.form3.current.validateFieldsAndScroll((err, values) => {
        if (err) {
          reject({
            activeKey: "3",
            errValues: err,
          });
        } else {
          resolve({
            FormData: values,
          });
        }
      });
    });
  };

  submit = () => {
    console.log("form1", this.form1);
    const formValidateArr = formRefArr.map((item) => {
      return new Promise((resolve, reject) => {
        this[item].current.validateFieldsAndScroll(
          { scorll: { alignWithTop: true, offsetTop: 50 }, first: true },
          (err, values) => {
            if (err) {
              reject({
                activeKey: formRefEnumForAciveKey[item],
                FormErrors: err,
              });
            } else {
              resolve({
                FormData: values,
              });
            }
          }
        );
      });
    });
    Promise.all(formValidateArr)
      .then(
        (allFormData) => {
          console.log("allFormData", allFormData);
        },
        (err) => {
          console.error("error", err);
          const { activeKey } = err || {};
          this.handleTabChange(activeKey);
        }
      )
      .catch((err) => {
        console.error("catch>>>>", err);
      });
  };

  handleTabChange = (activeKey) => {
    this.setState({
      activeKey,
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const { activeKey } = this.state;
    return (
      <div>
        <Form>
          <Row>
            <Col>
              <Form.Item label="企业账号">
                {getFieldDecorator("accountId", {
                  rules: [
                    {
                      required: true,
                      message: "企业账号不能为空",
                    },
                  ],
                })(<Input />)}
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Tabs
          tabPosition={"left"}
          activeKey={activeKey}
          onChange={this.handleTabChange}
        >
          <TabPane tab="form1" key={"1"}>
            <Form1 ref={this.form1} form2={this.form2} />
          </TabPane>
          <TabPane tab="form2" key={"2"} forceRender={true}>
            <Form2 ref={this.form2} />
          </TabPane>
          <TabPane tab="form3" key={"3"} forceRender={true}>
            <Form3 ref={this.form3} />
          </TabPane>
          <TabPane tab="form4" key={"4"} forceRender={true}>
            <Form4 ref={this.form4} />
          </TabPane>
        </Tabs>
        <Button type="primary" onClick={this.submit}>
          提交并保存
        </Button>
      </div>
    );
  }
}
export default Form.create()(TestForm);
