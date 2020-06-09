import React from 'react'
import { Form, Col, Row, Input, InputNumber } from 'antd'
class Form2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form>
        <Row>
          <Col>
            <Form.Item label='输入框3'>
              {getFieldDecorator('input3')(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label='电话'>
              {getFieldDecorator('phone', {
                rules: [{
                  required: true,
                  message: '电话不能为空'
                }]
              })(
                <InputNumber />
              )}
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label='联系方式'>
              {getFieldDecorator('contactPhone', {
                rules: [{
                  required: true,
                  message: '联系方式不能为空'
                }]
              })(
                <InputNumber />
              )}
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label='联系地址'>
              {getFieldDecorator('address', {
                rules: [{
                  required: true,
                  message: '联系地址不能为空'
                }]
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label='联系人姓名'>
              {getFieldDecorator('name', {
                rules: [{
                  required: true,
                  message: '联系人姓名不能为空'
                }]
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label='车辆费用'>
              {getFieldDecorator('account', {
                rules: [{
                  required: true,
                  message: '车辆费用不能为空'
                }]
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label='用车城市'>
              {getFieldDecorator('carUseCity', {
                rules: [{
                  required: true,
                  message: '用车城市不能为空'
                }]
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label='替代车型'>
              {getFieldDecorator('replaceCar', {
                rules: [{
                  required: true,
                  message: '替代车型不能为空'
                }]
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    )
  }
}
export default Form.create()(Form2)