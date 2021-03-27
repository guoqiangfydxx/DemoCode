import React from 'react'
class Example extends React.Component {
    constructor() {
      super();
      this.state = {
        val: 0
      };
    }
    
    componentDidMount() {
      // 上面的两个setState都是会把0变成1，在react内部批量处理的时候会被合并成一次操作
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);    // 第 1 次 log
  
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);    // 第 2 次 log
  
      setTimeout(() => {
        console.log('在执行的时候', this.state.val)
        this.setState({val: this.state.val + 1});
        console.log(this.state.val);  // 第 3 次 log
  
        this.setState({val: this.state.val + 1});
        console.log(this.state.val);  // 第 4 次 log
      }, 0);
    }
  
    render() {
      return null;
    }
  };
  export default Example