import React from 'react'
import { Form, Input, Row, Col } from 'antd'
import { withRouter } from 'react-router-dom'
class NormalForm extends React.Component {
  state = {}

  render() {
    const { form } = this.props
    const { getFieldDecorator } = form
    return (
      <Form>
        <Row>
          <Col>
            <Form.Item label='邮箱'>
              {getFieldDecorator('email')(
                <Input />
              )}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    )
  }
}
export default withRouter(Form.create()(NormalForm))