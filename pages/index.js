import Canvas from '../components/canvas'
import Color from '../components/color'
import Control from '../components/control'
import { useState, useEffect } from 'react'
import Layout from '../components/layout'

export default function Index() {
  const [brushColor, setBrushColor] = useState('#f87171')
  const [paintInfo, setPaintInfo] = useState(new Map())
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
      <div className="mt-4 m-2">
        <Control canvasConfig={canvasConfig} setCanvasConfig={setCanvasConfig} paintInfo={paintInfo} />
      </div>
      {/* 颜色选择器 */}
      <div className="m-1">
        <Color setBrushColor={setBrushColor} brushColor={brushColor} />
      </div>
      {/* 画布 */}
      <div className="m-1">
        <Canvas canvasConfig={canvasConfig} brushColor={brushColor} paintInfo={paintInfo} />
      </div>
    </Layout>
  )
}
