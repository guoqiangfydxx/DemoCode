/**
 * 获取函数子组件的ref，需要结合useRef, useImperativeHandle和forward一起使用
 */
import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import { Button } from 'antd'

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getAlert() {
      alert("getAlert from Child");
    }
  }))
  return <h1>Hi</h1>
})

function Parent() {
  const childRef = useRef()

  function handleClick() {
    console.log('childRef<<<', childRef)
  }

  return (
    <div>
      <Child ref={childRef} />
      <Button onClick={handleClick}>Click me</Button>
    </div>
  )
}
export default Parent