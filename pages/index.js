import Canvas from '../components/canvas'
import Color from '../components/color'
import Control from '../components/control'
import Saver from '../components/saver'
import { useState, useEffect, useRef } from 'react'
import Layout from './layout'

export default function Index() {
  // 笔刷颜色
  const [brushColor, setBrushColor] = useState('#f87171')
  // 绘画路径记录
  const [paintInfo, setPaintInfo] = useState(new Map())
  // canvas 标签
  const canvasRef = useRef(null)
  // canvas 设置
  const [canvasConfig, setCanvasConfig] = useState({
    width: 500,
    height: 500,
    bgColor: 'white',
    gridWidth: 20,
    gridColor: '#eee',
  })

  // 动态调整画布宽度
  useEffect(() => {
    const bodyWidth = document.body.clientWidth - 40
    if (canvasConfig.width > bodyWidth) {
      setCanvasConfig({ ...canvasConfig, width: bodyWidth })
    }
  }, [])

  return (
    <Layout>
      {/* 控制器 */}
      <div className="mt-4 space-x-4">
        <Control canvasConfig={canvasConfig} setCanvasConfig={setCanvasConfig} />
      </div>
      {/* 颜色选择器 */}
      <div className="">
        <Color setBrushColor={setBrushColor} brushColor={brushColor} />
      </div>
      {/* 画布 */}
      <div className="">
        <Canvas
          width="0"
          height="0"
          canvasRef={canvasRef}
          canvasConfig={canvasConfig}
          brushColor={brushColor}
          paintInfo={paintInfo}
        />
      </div>
      {/* 保存菜单 */}
      <div className="space-x-2 space-y-2">
        <Saver
          canvasRef={canvasRef}
          canvasConfig={canvasConfig}
          setCanvasConfig={setCanvasConfig}
          paintInfo={paintInfo}
          setPaintInfo={setPaintInfo}
        />
      </div>
    </Layout>
  )
}
