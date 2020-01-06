import React, { Component } from "react";

export default class FileUpload extends Component {
  state = {};

  imgChange() {
    var reader = new FileReader();
    //上传图片最大值(单位字节)（ 2 M = 2097152 B ）超过2M上传失败
    var AllowImgFileSize = 2100000;
    var file = "";
    // var file = $("#image")[0].files[0];
    if (file) {
      //将文件以Data URL形式读入页面
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        if (AllowImgFileSize !== 0 && AllowImgFileSize < reader.result.length) {
          alert("上传失败，请上传不大于2M的图片！");
          return;
        } else {
          // $('.contain_img>img').css('display', 'block');//回显标签显示
          // $("img").attr("src", base64Code);//回显图片添加
          // $("#frontIcon").val(base64Code);//存入隐藏提交域
        }
      };
    }
  }

  render() {
    return (
      <div class="col-sm-8 contain_img">
        <img src="" style={{ display: "none" }} alt=""></img>
        <input
          class="form-control"
          id="image"
          type="file"
          onChange={this.imgChange}
        />
        <div style={{ display: "none" }}>
          <textarea
            id="frontIcon"
            class="summernote"
            name="frontIcon"
          ></textarea>
        </div>
      </div>
    );
  }
}
