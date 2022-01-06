/*
 * @Author: fzf404
 * @Date: 2022-01-05 11:45:30
 * @LastEditTime: 2022-01-06 18:03:06
 * @Description: 控制器
 */

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
          className="btn-sm rounded-l-full border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <p className="btn bg-indigo-50 border-indigo-500 text-indigo-600">画布宽度</p>
        <button
          onClick={increaseWidth}
          className="btn-sm rounded-r-full border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
      <nav className="inline-flex rounded-full shadow-md">
        <button
          onClick={reduceGridWidth}
          className="btn-sm rounded-l-full border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <p className="bg-indigo-50 border-indigo-500 text-indigo-600 btn">网格大小</p>
        <button
          onClick={increaseGridWidth}
          className="btn-sm rounded-r-full border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
      <nav className="inline-flex rounded-full shadow-md">
        <button
          onClick={reduceHeight}
          className="btn-sm rounded-l-full border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <p className=" bg-indigo-50 border-indigo-500 text-indigo-600 btn">画布高度</p>
        <button
          onClick={increaseHeight}
          className="btn-sm rounded-r-full border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </>
  )
}

export default Control
