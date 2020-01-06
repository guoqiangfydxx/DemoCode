import React from "react";
import E from 'wangeditor'

import "./index.less";

const content = ``
class Job extends React.Component {
  state = {
    editorContent: ''
  };

  componentDidMount() {
    const elem = this.refs.editorElem
    const editor = new E(elem)
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = html => {
      this.setState({
        editorContent: html
      })
    }
    // 将图片转换成base64格式的字符串形式
    editor.customConfig.uploadImgShowBase64 = true
    editor.customConfig.menus = [
      'head',  // 标题
      'bold',  // 粗体
      'fontSize',  // 字号
      'fontName',  // 字体
      'italic',  // 斜体
      'underline',  // 下划线
      'strikeThrough',  // 删除线
      'foreColor',  // 文字颜色
      'backColor',  // 背景颜色
      'link',  // 插入链接
      'list',  // 列表
      'justify',  // 对齐方式
      'quote',  // 引用
      'emoticon',  // 表情
      'image',  // 插入图片
      'table',  // 表格
      'code',  // 插入代码
      'undo',  // 撤销
      'redo'  // 重复
    ]
    editor.customConfig.colors = [
      '#000000',
      '#eeece0',
      '#1c487f',
      '#4d80bf',
      '#c24f4a',
      '#8baa4a',
      '#7b5ba1',
      '#46acc8',
      '#f9963b',
      '#ffffff',
      '#333333', '#666666', '#999999', '#cccccc',
      '#61a951', '#16a085', '#07a9fe', '#003ba5', '#8e44ad', '#f32784',
      '#c0392b', '#d35400', '#f39c12', '#fdda00', '#7f8c8d', '#2c3e50',
      'yellow', 'blue', '#1F497D',
    ]
    editor.customConfig.lang = {
      '颜色': 'foreColor',
      '背景色': 'backColor'
      // 还可自定添加更多
    }
    editor.create()
    editor.txt.html(content)
  }

  clickHandle() {
    alert(this.state.editorContent)
  }

  componentWillUnmount() { }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {/* 将生成编辑器 */}
        <div ref="editorElem" style={{ textAlign: 'left' }}>
        </div>

        <button onClick={this.clickHandle.bind(this)}>获取内容</button>
      </div>
    )
  }
}

export default Job;
