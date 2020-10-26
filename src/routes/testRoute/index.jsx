import React from 'react'
class TestRouter extends React.Component{
  state = {}

  render() {
    console.log('this.props>>>>>', this.props)
    return (
      <div>
        test-router
      </div>
    )
  }
}
export default TestRouter