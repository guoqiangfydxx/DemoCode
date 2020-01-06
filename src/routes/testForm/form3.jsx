import React from 'react'
import { Form, Col, Row, Input } from 'antd'
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
        </Row>
      </Form>
    )
  }
}
export default Form.create()(Form3)