/*
 * @Author: fzf404
 * @Date: 2022-01-05 11:40:24
 * @LastEditTime: 2022-01-06 17:55:45
 * @Description: 颜色选择器
 */

import ColorPicker from './picker'

const Color = ({ brushColor, setBrushColor }) => {
  const colorList = ['#f87171', '#fb923c', '#facc15', '#4ade80', '#60a5fa', '#c084fc']
  return (
    <>
      <span
        onClick={() => setBrushColor(colorList[0])}
        className={`color-circle bg-red-400  ring-red-200 ring-offset-red-300 ${
          brushColor == colorList[0] ? 'ring-4' : 'hover:ring-4'
        }`}></span>
      <span
        onClick={() => setBrushColor(colorList[1])}
        className={`color-circle bg-orange-400 ring-orange-200 ring-offset-orange-300 ${
          brushColor == colorList[1] ? 'ring-4' : 'hover:ring-4'
        }`}></span>
      <span
        onClick={() => setBrushColor(colorList[2])}
        className={`color-circle bg-yellow-400 ring-yellow-200 ring-offset-yellow-300 ${
          brushColor == colorList[2] ? 'ring-4' : 'hover:ring-4'
        }`}></span>
      {/* 颜色选择器 */}
      <ColorPicker setBrushColor={setBrushColor} />
      <span
        onClick={() => setBrushColor(colorList[3])}
        className={`color-circle bg-green-400 ring-green-200 ring-offset-green-300 ${
          brushColor == colorList[3] ? 'ring-4' : 'hover:ring-4'
        }`}></span>
      <span
        onClick={() => setBrushColor(colorList[4])}
        className={`color-circle bg-blue-400 ring-blue-200 ring-offset-blue-300 ${
          brushColor == colorList[4] ? 'ring-4' : 'hover:ring-4'
        }`}></span>
      <span
        onClick={() => setBrushColor(colorList[5])}
        className={`color-circle bg-purple-400 ring-purple-200 ring-offset-purple-300 ${
          brushColor == colorList[5] ? 'ring-4' : 'hover:ring-4'
        }`}></span>
    </>
  )
}

export default Color
