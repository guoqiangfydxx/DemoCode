import React from "react";
import "./index.less";
class TestPosition extends React.Component {
  state = {};

  render() {
    // 粘性定位就是相对定位和固定定位的结合，在未超过指定的阈值之前是相对定位，之后就是固定定位
    return (
      <div className="position-container">
        <dl>
          <dt>A</dt>
          <dd>Andrew W.K.</dd>
          <dd>Apparat</dd>
          <dd>Arcade Fire</dd>
          <dd>At The Drive-In</dd>
          <dd>Aziz Ansari</dd>
        </dl>
        <dl>
          <dt>C</dt>
          <dd>Chromeo</dd>
          <dd>Common</dd>
          <dd>Converge</dd>
          <dd>Crystal Castles</dd>
          <dd>Cursive</dd>
        </dl>
        <dl>
          <dt>E</dt>
          <dd>Explosions In The Sky</dd>
        </dl>
        <dl>
          <dt>T</dt>
          <dd>Ted Leo & The Pharmacists</dd>
          <dd>T-Pain</dd>
          <dd>Thrice</dd>
          <dd>TV On The Radio</dd>
          <dd>Two Gallants</dd>
        </dl>
      </div>
    );
  }
}
export default TestPosition;
