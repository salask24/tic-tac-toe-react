import React from 'react'

import "./Box.css"
import StackUtils from 'stack-utils'
import { valid } from 'semver'

export const Box = ({ value, onclick }) => {
  const style = value === 'X' ? "box x" : "box o"
  return (
    <button className={style} onClick={onClick}>{value}</button>
  )
}
