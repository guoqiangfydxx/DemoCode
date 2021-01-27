import React from "react";
import { Form, Input, Row, Col } from "antd";
import { withRouter } from "react-router-dom";
class NormalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.test = React.createRef();
  }

  state = {};

  test = () => {
    console.log("test");
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    console.log("wrappreForm", this);
    return (
      <Form>
        <Row>
          <Col>
            <Form.Item label="邮箱">
              {getFieldDecorator("email")(<Input />)}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

function Wrapper(WrappedComponent) {
  class Test extends React.Component {
    render() {
      const { forwardedRef, ...rest } = this.props;
      return <WrappedComponent ref={forwardedRef} {...rest} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <Test {...props} forwardedRef={ref} />;
  });
}

// const WrapperComponent = React.forwardRef((props, ref) => {
//   const Instance = withRouter(Form.create()(NormalForm));
//   return <Instance {...props} forwardedRef={ref} />;
// });

// withRouter返回的是一个函数组件，无法获取到ref
// 遇到withRouter加Form.create混合还要获取子组件实例的，我暂时没有办法来解决这个问题
// 那就只能是传递一个函数或者是具体的属性来解决这个问题了

// function logProps(Component) {
//   class LogProps extends React.Component {
//     render() {
//       const { forwardedRef, ...rest } = this.props;

//       // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
//       return <Component ref={forwardedRef} {...rest} />;
//     }
//   }

//   // 注意 React.forwardRef 回调的第二个参数 “ref”。
//   // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
//   // 然后它就可以被挂载到被 LogProps 包裹的子组件上。
//   return React.forwardRef((props, ref) => {
//     return <LogProps {...props} forwardedRef={ref} />;
//   });
// }

export default Form.create()(withRouter(NormalForm));
