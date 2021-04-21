import React from "react";
import image1 from "./1.jpg";
class TestImage extends React.Component {
  state = {
    imageUrls: [
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1999921673,816131569&fm=26&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2526580938,627798856&fm=26&gp=0.jpg",
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3101694723,748884042&fm=26&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3565173774,1989253727&fm=26&gp=0.jpg",
    ],
  };

  loadImage = (url) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        resolve(image);
      };
      image.onerror = () => {
        reject(new Error("Could not load image at " + url));
      };
      image.src = url;
    });
  };

  appendImage = async () => {
    const { imageUrls } = this.state;
    for (const url of imageUrls) {
      await this.loadImage(url).then((image) => {
        // console.log("image>>>>>>>>>", image);
        document.querySelector(".test-image-container").appendChild(image);
      });
    }
  };

  appendImage1 = () => {
    const { imageUrls } = this.state;
    const queue = [];
    for (const url of imageUrls) {
      queue.push(this.loadImage(url));
    }
    Promise.all(queue).then((images) => {
      for (const image of images) {
        document.querySelector(".test-image-container").appendChild(image);
      }
    });
  };

  componentDidMount() {
    // this.appendImage();
    // 单张的异步加载图片
    // this.loadImage(image1)
    //   .then((image) => {
    //     document.querySelector('.test-image-container').appendChild(image);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // 多张按照顺序的一张一张的图片
    // this.appendImage();

    // 如果没有顺序限制的话，那么就先全部加载图片，之后加载完成之后，统一显示
    this.appendImage1();
  }

  render() {
    return (
      <div className="test-image-container">按照顺序一张一张的加载图片</div>
    );
  }
}
export default TestImage;
