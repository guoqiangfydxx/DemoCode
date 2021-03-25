import React from 'react'
import { Button } from 'antd'
import Modal from './moda'


class TestInitial extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }

  handleClick = () => {
    this.setState({
      isShowModal: true
    })
    setTimeout(() => {
      this.setState({
        count: 3
      })
    }, 5000)
  }

  hideModal = () => {
    this.setState({
      isShowModal: false
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>点击我</Button>
        <Modal 
          count={this.state.count}
          visible={this.state.isShowModal}
          hideModal={this.hideModal}
        />
      </div>

    )
  }
}
export default TestInitial