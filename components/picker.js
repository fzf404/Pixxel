/*
 * @Author: fzf404
 * @Date: 2022-01-05 20:41:37
 * @LastEditTime: 2022-05-13 16:57:13
 * @Description: 颜色选择器
 */

import { useState } from 'react'
import { SketchPicker } from 'react-color'

import styles from './picker.module.css'
const ColorPicker = ({ setBrushColor }) => {
  const [state, setState] = useState({
    displayColorPicker: false,
    history: [], // 颜色历史
    color: {
      r: '87',
      g: '96',
      b: '111',
      a: '1',
    },
  })

  // 是否使用过颜色选择器
  const [used, setUsed] = useState(false)

  // 展示颜色选择器
  const handleClick = () => {
    setUsed(true)
    setState({ ...state, displayColorPicker: !state.displayColorPicker })
  }

  // 关闭颜色选择器
  const handleClose = () => {
    const pick = `rgba(${state.color.r},${state.color.g},${state.color.b},${state.color.a})`
    if (!state.history.includes(pick)) {
      // 增加历史记录
      state.history.push(pick)
    }
    // 设置笔刷颜色
    setBrushColor(pick)
    // 隐藏选择器
    setState({ ...state, displayColorPicker: false })
  }

  // 颜色改变
  const handleChange = (color) => {
    setState({
      ...state,
      color: color.rgb,
    })
  }

  return (
    <>
      <span
        onClick={handleClick}
        className={'mx-4 w-12 h-12 inline-block rounded-xl shadow-xl shadow-gray-400 '}
        style={{
          background: used
            ? `rgba(${state.color.r}, ${state.color.g}, ${state.color.b}, ${state.color.a})`
            : 'conic-gradient( rgb(240,40,40), rgb(240,240,40), rgb(40,240,40),rgb(40,240,240),rgb(40,40,240),rgb(240,40,240),rgb(240,40,40)',
        }}
      />
      {state.displayColorPicker ? (
        <div className={styles.popover}>
          <div className={styles.cover} onClick={handleClose} />
          <SketchPicker color={state.color} presetColors={state.history} onChange={handleChange} width={240} />
        </div>
      ) : null}
    </>
  )
}

export default ColorPicker
