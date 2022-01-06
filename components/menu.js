/*
 * @Author: fzf404
 * @Date: 2022-01-06 17:16:48
 * @LastEditTime: 2022-01-06 21:21:48
 * @Description: description
 */

import { saveAs } from 'file-saver'

const Menu = ({ canvasRef, canvasConfig, setCanvasConfig, paintInfo, setPaintInfo }) => {
  // 保存为 .px 文件
  const handleSavePx = () => {
    const pxData = {
      canvasConfig: canvasConfig,
      paintInfo: Object.fromEntries(paintInfo),
    }
    // 转换为二进制流
    const blob = new Blob([JSON.stringify(pxData)], { type: 'text/plain;charset=utf-8' })
    saveAs(blob, 'pixeel.px')
  }
  // 保存为 .png 文件
  const handleSavePng = () => {
    const canvas = canvasRef.current
    canvas.toBlob(function (blob) {
      saveAs(blob, 'pixxel.png')
    })
  }
  // 加载 .px 文件
  const handleLoadPx = () => {
    // 读取文件
    const reader = new FileReader()
    reader.readAsText(document.getElementById('input').files[0])
    // 读取处理
    reader.onload = (event) => {
      // 解析
      const result = JSON.parse(event.target.result)
      const newMap = new Map()
      // 加载颜色
      Object.entries(result.paintInfo).forEach(([key, value]) => {
        newMap.set(parseInt(key), value)
      })
      // 写入画笔
      setPaintInfo(newMap)
      // 写入画布配置
      setCanvasConfig(result.canvasConfig)
    }
  }
  return (
    <>
      <input id="input" type="file" accept=".px" className="hidden" onChange={handleLoadPx}></input>
      <button onClick={handleSavePx} className="btn-round border-gray-300 text-white bg-indigo-600 hover:bg-indigo-700">
        保存(.px)
      </button>
      <button onClick={handleSavePng} className="btn-round border-gray-300 text-white bg-green-600 hover:bg-green-700 ">
        保存(.png)
      </button>
      <button
        onClick={() => {
          document.getElementById('input').click()
        }}
        className="btn-round border-gray-300 text-white bg-amber-600 hover:bg-amber-700 ">
        载入(.px)
      </button>
    </>
  )
}

export default Menu
