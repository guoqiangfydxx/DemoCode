import React from 'react'
import { Form, Col, Row, Input } from 'antd'
class MainForm extends React.Component {
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
            <Form.Item label='输入框5'>
              {getFieldDecorator('input5', {
                rules: [{
                  required: true,
                  message: '输入框不能为空'
                }]
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label='输入框5'>
              {getFieldDecorator('input5', {
                rules: [{
                  required: true,
                  message: '输入框不能为空'
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

export default Form.create()(MainForm)