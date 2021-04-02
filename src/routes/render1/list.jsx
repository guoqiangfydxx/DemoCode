import React from 'react'
import { FixedSizeList as List } from "react-window"
const Row = ({ index, style }) => <div style={style}>Row {index}</div>
const example = () => (
  <List
    height={300}
    itemCount={10000}
    itemSize={35} // 每项的高度为 35
    width={600}
  >
    {Row}
  </List>
)
export default example