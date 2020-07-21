import React from "react";
class TestMediaSession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaList: [
        {
          src: "https://media.vued.vanthink.cn/CJ7%20-%20Trailer.mp4",
          cover: "https://img1.wxzxzj.com/vpc-example-cover-CJ7-c.jpg",
          title: "长江七号-周星驰导演作品，关于外星人的童话故事",
        },

        {
          src: "https://media.vued.vanthink.cn/sparkle_your_name_am360p.mp4",
          cover: "https://img1.wxzxzj.com/vpc-example-cover-your-name-c.png",
          title: "你的名字-新海诚导演作品，穿越彼此的身体，遇见不可思议",
        },

        {
          src:
            "https://media.vued.vanthink.cn/the_garden_of_words_trailer_english__1080p.mp4",
          cover: "https://img1.wxzxzj.com/vpc-example-cover-the-garden-c.jpg",
          title: "言叶之庭-新海诚导演作品，下雨天静谧的动静也有唯美的相遇",
        },
      ],
    };

    this.video = React.createRef();
    this.index = 1;
  }

  componentDidMount() {
    this.initMediaSession();
  }

  initMediaSession = () => {
    if ("mediaSession" in navigator) {
      let ms = navigator.mediaSession;
      this.setMediaSession(this.index);
      ms.setActionHandler("play", () => {
        this.video.current.play();
      });
      ms.setActionHandler("nexttrack", () => {
        this.playNext();
      });
      ms.setActionHandler("previoustrack", () => {
        this.playPrev();
      });
    }
  };

  setMediaSession = (index) => {
    if ("mediaSession" in navigator) {
      const data = this.state.mediaList[index];
      navigator.mediaSession.metadata = new window.MediaMetadata({
        title: data.title,
        artist: data.director,
        artwork: [
          {
            src: data.cover,
            sizes: "192x192",
          },
        ],
      });
    }
  };

  playNext = () => {
    if (this.index === 2) {
      this.index = 0;
    } else {
      this.index += 1;
    }
    this.setMediaSession(this.index);
    this.video.current.src = this.state.mediaList[this.index].src;
    this.video.current.play();
  };

  playPrev = () => {
    if (this.index === 0) {
      this.index = 2;
    } else {
      this.index -= 1;
    }
    this.setMediaSession(this.index);
    this.video.current.src = this.state.mediaList[this.index].src;
    this.video.current.play();
  };

  render() {
    return (
      <div>
        <h1>实现类型BiliBili的播放浮层控制</h1>
        <div className="main">
          <video
            ref={this.video}
            controls
            poster="https://img1.wxzxzj.com/vpc-example-cover-your-name-c.png"
            src="https://media.vued.vanthink.cn/sparkle_your_name_am360p.mp4"
          />
        </div>
      </div>
    );
  }
}
export default TestMediaSession;
