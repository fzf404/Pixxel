/*
 * @Author: fzf404
 * @Date: 2022-01-06 14:19:45
 * @LastEditTime: 2022-01-06 14:29:21
 * @Description: 基础框架
 */

import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div className="contaner bg-slate-200 min-h-screen flex flex-col items-center">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.6" />
        <title>Pixxel</title>
      </Head>
      {children}
    </div>
  )
}
export default Layout
