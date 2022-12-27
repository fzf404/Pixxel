/*
 * @Author: fzf404
 * @Date: 2022-01-06 14:19:45
 * @LastEditTime: 2022-12-28 01:33:36
 * @Description: 基础框架
 */

import Head from 'next/head'

const baiduAnalytics = () => {
  return {
    __html: `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?a25d3a09abf9ccb1a8385018d43843b2";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `,
  }
}

const Layout = ({ children }) => {
  return (
    <div className="contaner min-h-screen flex flex-col space-y-4 items-center bg-slate-200 ">
      <Head>
        <title>Pixxel</title>
        <meta name="viewport" content="width=device-width, initial-scale=0.6" />
        <script dangerouslySetInnerHTML={baiduAnalytics()} />
      </Head>
      {children}
    </div>
  )
}

export default Layout
