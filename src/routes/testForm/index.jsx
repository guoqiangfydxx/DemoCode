import React from 'react'
import { Tabs } from 'antd'
import Form1 from './form1'
import Form2 from './form2'
import Form3 from './form3'
import Form4 from './form4'

const { TabPane } = Tabs
export default class TestForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    this.form1 = React.createRef()
    this.form2 = React.createRef()
    this.form3 = React.createRef()
    this.form4 = React.createRef()
  }

  render() {
    return (
      <Tabs tabPosition={'left'} defaultActiveKey="1">
        <TabPane tab='form1' key={1}>
          <Form1 ref={this.form1}
            form2={this.form2}
          />
        </TabPane>
        <TabPane tab='form2' key={2} forceRender={true}>
          <Form2 ref={this.form2} />
        </TabPane>
        <TabPane tab='form3' key={3} forceRender={true}>
          <Form3 ref={this.form3} />
        </TabPane>
        <TabPane tab='form4' key={4} forceRender={true}>
          <Form4 ref={this.form4} />
        </TabPane>
      </Tabs>
    )
  }
}