import React from 'react'
import { Button, notification } from 'antd'
class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  openNotification = () => {
    const key = 'updatable'
    notification.open({
      key,
      message: 'Notification Title',
      description: 'description.',
    });
    setTimeout(() => {
      notification.open({
        key,
        message: 'New Title',
        description: 'New description.',
      });
    }, 5000);
  }

  render() {
    return (
      <div>
         <Button type="primary" onClick={this.openNotification}>
          Open the notification box
        </Button>
      </div>
    )
  }
}
export default Test