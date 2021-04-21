import React from 'react'
class TestImage extends React.Component {
  state = {
    imageUrls = ['']
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='test-image-container'>
        按照顺序一张一张的加载图片
      </div>
    )
  }
}