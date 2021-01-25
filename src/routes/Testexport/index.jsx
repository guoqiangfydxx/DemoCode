import React from "react";
import { Input } from "antd";
import NormalForm from "./normalForm";
import WrapperForm from "./wrapperForm";
class TestExport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.form1 = React.createRef();
    this.form2 = React.createRef();
  }

  render() {
    console.log("1>>>", this.formRef1);
    console.log("2>>>", this.formRef2);
    console.log("3>>>", this.form1);
    console.log("4>>>", this.form2);
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
        />
        <Input ref={this.form2} />
      </div>
    );
  }
}
export default TestExport;
