import React, { useState, useEffect, createContext, useContext } from 'react'
const renderCntMap = {}
const renderOnce = name => {
  return (renderCntMap[name] = (renderCntMap[name] || 0) + 1)
}

// 在这里使用了context，发布订阅者模式来优化render的次数
const ValueCtx = createContext()
const CtxContainer = ({ children }) => {
  const [cnt, setCnt] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCnt(v => v + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [setCnt])

  return <ValueCtx.Provider value={cnt}>{children}</ValueCtx.Provider>
}

function CompA(){
  const cnt = useContext(ValueCtx)
  return <div>组件 CompA Render 次数：{renderOnce("CompA")}</div>
}

function CompB() {
  const cnt = useContext(ValueCtx)
  return <div>组件 CompB Render 次数：{renderOnce("CompB")}</div>
}

function CompC({}) {
  return <div>组件 CompC Render 次数：{renderOnce("CompC")}</div>
}

const PubSubCommiunicate = () => {
  return (
    <CtxContainer>
      <div>
        <h1>优化后场景</h1>
        <div>
          将状态提升至最低公共祖先的上层，用 CtxContainer 将其内容包裹。
        </div>
        <div style={{ marginTop: "20px" }}>
          每次 Render 时，只有组件A和组件B会重新 Render 。
        </div>

        <div style={{ marginTop: "40px" }}>
          父组件 Render 次数：{renderOnce("parent")}
        </div>
        <CompA />
        <CompB />
        <CompC />
      </div>
    </CtxContainer>
  )
}

export default PubSubCommiunicate