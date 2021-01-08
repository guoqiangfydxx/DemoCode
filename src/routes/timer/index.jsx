/**
 * @description 违约金计算器
 */
import React from "react";
import { Form, Row, Col, InputNumber, DatePicker, Button } from "antd";
import moment from "moment";
import Big from "big.js";
function LiquidetedDamagesCalculator(props) {
  const { form } = props;
  const { getFieldDecorator } = form;

  function calculate() {
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { feeAmount, originReturnTime, returnTime, taxRate } = values;
        const actualAmount = new Big(feeAmount)
          .times(returnTime.diff(originReturnTime, "days"))
          .times(new Big(taxRate).div(100));
        console.log("returnTime>>>", returnTime);
        console.log("originReturnTime", originReturnTime);
        // 但是直接用moment传入进去就是0，这里需要将其格式化成YYYY-MM-DD的时间才可以得到1
        console.log(
          "sfsdfdsfds",
          moment(returnTime.format("YYYY-MM-DD")).diff(
            moment(originReturnTime.format("YYYY-MM-DD")),
            "days"
          )
        );
        // 直接这样是可以得到1的
        console.log(
          "sfsdfdsfds--sd-fs-df",
          moment("2021-01-09").diff(moment("2021-01-08"), "days")
        );
        form.setFieldsValue({
          liquidatedDamages: actualAmount.toFixed(2),
        });
      } else {
        form.setFieldsValue({
          liquidatedDamages: "",
        });
      }
    });
  }

  return (
    <div>
      <Form
        className="ehi-form"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
      >
        <Row>
          <Col>
            <Form.Item label="租金/司机服务费">
              {getFieldDecorator("feeAmount", {
                rules: [
                  {
                    required: true,
                    message: "租金/司机服务费不能为空",
                  },
                ],
              })(
                <InputNumber min={0} precision={2} style={{ width: "20%" }} />
              )}
              <span>元</span>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="订单原预计还车时间">
              {getFieldDecorator("originReturnTime", {
                initialValue: moment(),
                rules: [
                  {
                    required: true,
                    message: "订单原预计还车时间不能为空",
                  },
                ],
              })(<DatePicker format="YYYY-MM-DD" />)}
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="订单提前还车时间">
              {getFieldDecorator("returnTime", {
                rules: [
                  {
                    required: true,
                    message: "订单提前还车时间不能为空",
                  },
                ],
              })(<DatePicker format="YYYY-MM-DD" />)}
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="违约金率">
              {getFieldDecorator("taxRate", {
                rules: [
                  {
                    required: true,
                    message: "违约金率不能为空",
                  },
                ],
              })(
                <InputNumber
                  min={0}
                  precision={2}
                  max={100}
                  style={{ width: "20%" }}
                />
              )}
              <span>%</span>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="违约金">
              {getFieldDecorator(
                "liquidatedDamages",
                {}
              )(
                <InputNumber
                  disabled={true}
                  precision={2}
                  style={{ width: "20%" }}
                />
              )}
            </Form.Item>
          </Col>
          <Col span={4} push={4}>
            <Button onClick={calculate}>计算</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
export default Form.create()(LiquidetedDamagesCalculator);
