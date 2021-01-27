import React from "react";
import { Input } from "antd";
import NormalForm from "./normalForm";
import WrapperForm from "./wrapperForm";
class TestExport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.form1 = React.createRef();
    this.formRef2 = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      console.log("timer>>>>");
      console.log("2>>>", this.formRef2);
      console.log("3>>>", this.form1);
    }, 5000);
  }

  render() {
    console.log("2>>>", this.formRef2);
    console.log("3>>>", this.form1);
    return (
      <div>
        <NormalForm
          wrappedComponentRef={(ref) => {
            this.form1 = ref;
          }}
        />
        <WrapperForm
          wrappedComponentRef={(ref) => {
            this.formRef2 = ref;
          }}
          // ref={this.formRef2}
        />
      </div>
    );
  }
}
export default TestExport;
