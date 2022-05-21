/*
 * @Author: fzf404
 * @Date: 2022-01-03 15:54:37
 * @LastEditTime: 2022-05-21 22:26:40
 * @Description: 画布组件
 */

import React, { useEffect } from 'react'

const Canvas = ({ canvasRef, canvasConfig, brushColor, paintInfo }) => {
  // 鼠标事件处理
  useEffect(() => {
    const canvas = canvasRef.current
    // 鼠标左键点击事件处理
    canvas.addEventListener('click', handlePaint)
    // 鼠标右键点击事件处理
    canvas.addEventListener('contextmenu', handleClear)

    // 鼠标按下事件处理
    canvas.addEventListener('mousedown', onMouseDown)
    canvas.addEventListener('touchstart', onMouseDown)

    // 鼠标抬起事件处理
    canvas.addEventListener('mouseup', onMouseUp)
    canvas.addEventListener('mouseleave', onMouseLeave)
    canvas.addEventListener('touchend', onMouseUp)

    // 解除事件监听器
    return () => {
      canvas.removeEventListener('click', handlePaint)
      canvas.removeEventListener('contextmenu', handleClear)

      canvas.removeEventListener('mousedown', onMouseDown)
      canvas.removeEventListener('touchstart', onMouseDown)

      canvas.removeEventListener('mouseup', onMouseUp)
      canvas.removeEventListener('mouseleave', onMouseLeave)
      canvas.removeEventListener('touchend', onMouseUp)
    }
  }, [brushColor, canvasConfig])

  // 鼠标按下
  const onMouseDown = (event) => {
    const canvas = canvasRef.current

    if (event.button === 0) {
      canvas.addEventListener('mousemove', handlePaint)
      canvas.addEventListener('touchmove', handlePaint)
    } else if (event.button === 2) {
      canvas.addEventListener('mousemove', handleClear)
      canvas.addEventListener('touchmove', handleClear)
    } else {
      canvas.addEventListener('mousemove', handlePaint)
      canvas.addEventListener('touchmove', handlePaint)
    }
  }

  // 鼠标抬起
  const onMouseUp = (event) => {
    const canvas = canvasRef.current

    if (event.button === 0) {
      canvas.removeEventListener('mousemove', handlePaint)
      canvas.removeEventListener('touchmove', handlePaint)
    } else if (event.button === 2) {
      canvas.removeEventListener('mousemove', handleClear)
      canvas.removeEventListener('touchmove', handleClear)
    } else {
      canvas.removeEventListener('mousemove', handlePaint)
      canvas.removeEventListener('touchmove', handlePaint)
    }
  }

  // 鼠标释放
  const onMouseLeave = () => {
    const canvas = canvasRef.current

    canvas.removeEventListener('mousemove', handlePaint)
    canvas.removeEventListener('touchmove', handlePaint)
    canvas.removeEventListener('mousemove', handleClear)
    canvas.removeEventListener('touchmove', handleClear)
  }

  // 获得绘制位置
  const getPosition = (event) => {
    const canvas = canvasRef.current

    if (event.touches) {
      return {
        x: event.touches[0].pageX - canvas.offsetLeft,
        y: event.touches[0].pageY - canvas.offsetTop,
      }
    }
    return {
      x: event.pageX - canvas.offsetLeft,
      y: event.pageY - canvas.offsetTop,
    }
  }

  // 绘画事件处理
  const handlePaint = (event) => {
    event.preventDefault()

    const pixelPos = getPosition(event)
    // 获得网格位置
    const pixelX = Math.floor(pixelPos.x / canvasConfig.gridWidth)
    const pixelY = Math.floor(pixelPos.y / canvasConfig.gridWidth)
    const pixelXY = pixelX * 10000 + pixelY
    // 是否已绘制
    if (paintInfo.get(pixelXY, brushColor) != brushColor) {
      // 保存
      paintInfo.set(pixelXY, brushColor)
      // 绘制像素
      drawPixel(pixelX, pixelY, brushColor)
    }
  }

  // 擦除事件处理
  const handleClear = (event) => {
    event.preventDefault()

    const pixelPos = getPosition(event)
    // 获得网格位置
    const pixelX = Math.floor(pixelPos.x / canvasConfig.gridWidth)
    const pixelY = Math.floor(pixelPos.y / canvasConfig.gridWidth)
    const pixelXY = pixelX * 10000 + pixelY
    if (paintInfo.get(pixelXY) != undefined) {
      // 移除
      paintInfo.delete(pixelXY, brushColor)
      // 清空像素
      drawPixel(pixelX, pixelY, canvasConfig.bgColor)
    }
  }

  // 绘制一个像素
  const drawPixel = (pixelX, pixelY, brushColor) => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    context.fillStyle = brushColor
    context.fillRect(
      pixelX * canvasConfig.gridWidth + 1,
      pixelY * canvasConfig.gridWidth + 1,
      canvasConfig.gridWidth - 2,
      canvasConfig.gridWidth - 2
    )
  }
  // canvas 初始化
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    canvas.width = canvasConfig.width
    canvas.height = canvasConfig.height

    // 背景绘制
    context.fillStyle = canvasConfig.bgColor
    context.fillRect(0, 0, canvas.width, canvas.height)

    // 线条绘制
    context.lineWidth = 1 / 2
    context.strokeStyle = canvasConfig.gridColor

    // 绘制横向网格
    for (let i = canvasConfig.gridWidth; i < canvas.width; i += canvasConfig.gridWidth) {
      context.beginPath()
      context.moveTo(i, 0)
      context.lineTo(i, canvas.height)
      context.closePath()
      context.stroke()
    }

    // 绘制纵向网格
    for (let j = canvasConfig.gridWidth; j < canvas.height; j += canvasConfig.gridWidth) {
      context.beginPath()
      context.moveTo(0, j)
      context.lineTo(canvas.width, j)
      context.closePath()
      context.stroke()
    }
    // 重新绘制
    paintInfo.forEach((color, pos) => {
      drawPixel(Math.floor(pos / 10000), pos % 10000, color)
    })
  }, [canvasConfig])

  return <canvas ref={canvasRef} className="border-0 rounded-lg shadow-lg" />
}

Canvas.defaultProps = {
  canvasConfig: {
    width: 500,
    height: 500,
    bgColor: 'white',
    gridWidth: 20,
    gridColor: '#eee',
  },
  brushColor: '#f87171',
}

export default Canvas
