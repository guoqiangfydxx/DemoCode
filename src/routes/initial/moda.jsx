
import React from 'react'
import { Form, Row, Col, Input, Modal } from 'antd'

class TestModal extends React.Component {

  state = {
    remark: '初始值'
  }

  render() {
    const { visible, hideModal, form, count } = this.props
    let remark = this.state.remark
    if (count > 1) {
      remark = `初始值${count}`
    }
    const { getFieldDecorator } = form
    return (
      <Modal
        visible={visible}
        onCancel={hideModal}
        footer={null}
      >
        <Form>
          <Row>
            <Col>
              <Form.Item label='测试'>
                {getFieldDecorator('remark', {
                  initialValue: remark
                })(
                  <Input />
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    )
  }
}
export default Form.create()(TestModal)