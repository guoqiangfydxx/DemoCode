import React from "react";
import "./index.less";
class TestPreload extends React.Component {
  state = {
    urls: [
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3824886304,665215047&fm=26&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2786422413,1024520103&fm=26&gp=0.jpg",
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2620306848,1106594030&fm=26&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4274583492,4022406993&fm=26&gp=0.jpg",
    ],
  };

  componentDidMount() {
    const images = new Array();
    const { urls } = this.state;
    for (const url of urls) {
      const image = new Image();
      image.src = url;
      images.push(image);
    }
  }

  render() {
    return (
      <div className="preload-container">
        <div className="preload1">1</div>
        <div className="preload2">2</div>
        <div className="preload3">3</div>
      </div>
    );
  }
}
export default TestPreload;
