import React from 'react'
import { Form, Col, Row, Input, InputNumber } from 'antd'
class Form3 extends React.Component {
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
            <Form.Item label='输入框4'>
              {getFieldDecorator('input4')(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label='车辆数'>
              {getFieldDecorator('carNo', { 
                rules: [{
                  required: true,
                  message: '车辆数不能为空'
                }]
              })(
                <InputNumber />
              )}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    )
  }
}
export default Form.create()(Form3)