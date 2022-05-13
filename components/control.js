/*
 * @Author: fzf404
 * @Date: 2022-01-05 11:45:30
 * @LastEditTime: 2022-05-13 16:12:00
 * @Description: 控制器
 */
import LeftSVG from '../assets/left.svg'
import RightSVG from '../assets/right.svg'

const Control = ({ canvasConfig, setCanvasConfig }) => {
  // 修改画布宽度
  const reduceWidth = () => {
    if (canvasConfig.width > canvasConfig.gridWidth * 2) {
      setCanvasConfig({ ...canvasConfig, width: canvasConfig.width - canvasConfig.gridWidth })
    }
  }
  const increaseWidth = () => {
    if (canvasConfig.width < document.body.clientWidth - 20) {
      setCanvasConfig({ ...canvasConfig, width: canvasConfig.width + canvasConfig.gridWidth })
    }
  }
  // 修改画布高度
  const reduceHeight = () => {
    if (canvasConfig.height > canvasConfig.gridWidth * 2) {
      setCanvasConfig({ ...canvasConfig, height: canvasConfig.height - canvasConfig.gridWidth })
    }
  }
  const increaseHeight = () => {
    if (canvasConfig.height < document.body.clientHeight - 20) {
      setCanvasConfig({ ...canvasConfig, height: canvasConfig.height + canvasConfig.gridWidth })
    }
  }
  // 修改网格大小
  const reduceGridWidth = () => {
    if (canvasConfig.gridWidth > 4) {
      setCanvasConfig({ ...canvasConfig, gridWidth: canvasConfig.gridWidth - 2 })
    }
  }
  const increaseGridWidth = () => {
    if (canvasConfig.gridWidth * 2 < canvasConfig.width) {
      setCanvasConfig({ ...canvasConfig, gridWidth: canvasConfig.gridWidth + 2 })
    }
  }
  return (
    <>
      <nav className="inline-flex rounded-full shadow-md">
        <button
          onClick={reduceWidth}
          className="btn-sm rounded-l-full border-gray-300 bg-white text-gray-500 hover:bg-gray-50 ">
          <LeftSVG className="h-5 w-5" />
        </button>
        <p className="btn bg-indigo-50 border-indigo-500 text-indigo-600">画布宽度</p>
        <button
          onClick={increaseWidth}
          className="btn-sm rounded-r-full border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
          <RightSVG className="h-5 w-5" />
        </button>
      </nav>
      <nav className="inline-flex rounded-full shadow-md">
        <button
          onClick={reduceGridWidth}
          className="btn-sm rounded-l-full border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
          <LeftSVG className="h-5 w-5" />
        </button>
        <p className="bg-indigo-50 border-indigo-500 text-indigo-600 btn">网格大小</p>
        <button
          onClick={increaseGridWidth}
          className="btn-sm rounded-r-full border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
          <RightSVG className="h-5 w-5" />
        </button>
      </nav>
      <nav className="inline-flex rounded-full shadow-md">
        <button
          onClick={reduceHeight}
          className="btn-sm rounded-l-full border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
          <LeftSVG className="h-5 w-5" />
        </button>
        <p className=" bg-indigo-50 border-indigo-500 text-indigo-600 btn">画布高度</p>
        <button
          onClick={increaseHeight}
          className="btn-sm rounded-r-full border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
          <RightSVG className="h-5 w-5" />
        </button>
      </nav>
    </>
  )
}

export default Control
