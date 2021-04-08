import React from "react";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
class TestRangePicker extends React.Component {
  state = {
    dateValues: [],
  };

  onChange = (date, dateString) => {
    console.log(date, dateString);
    this.setState({
      dateValues: date,
    });
  };

  handleCalendarChange = (dates, dateStrings) => {
    console.log("dates>>", dates, dateStrings);
    const { dateValues } = this.state;
    if (dates.length === 1 && dateValues.length === 2) {
      // 只切换某一个面板的时候，并且rangePicker已经有值的情况下才有效
      // const changeIndex = dateValues.findIndex((date) => date.isSame(dates[0]));
      // dateValues[1 - changeIndex] = dates[0];
      // console.log("dateValues>>>>>>>", dateValues);
    }
  };

  handlePanelChange = (value, mode, ...args) => {
    console.log("value>>>>", value, mode, args);
  };

  render() {
    const { dateValues } = this.state;
    return (
      <RangePicker
        value={dateValues}
        onChange={this.onChange}
        onCalendarChange={this.handleCalendarChange}
        onPanelChange={this.handlePanelChange}
      />
    );
  }
}
export default TestRangePicker;
