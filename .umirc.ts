/*
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2020-12-28 17:08:16
 * @LastEditors: unicom
 * @LastEditTime: 2020-12-29 09:52:08
 */
import { defineConfig } from 'dumi';

const repo = 'gll-dumi-coomponent';

export default defineConfig({
  title: repo,
  favicon:
    'https://gitee.com/guangliangliang/images/raw/master/img/favicon.ico', //配置 favicon 地址（href 属性）。
  logo: 'https://gitee.com/guangliangliang/images/raw/master/img/favicon.ico', //配置 favicon 地址（href 属性）。
  // logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  // description:null,//配置文档的介绍，会显示在侧边栏菜单标题的下方，仅 doc 模式下可用。
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  exportStatic: {},
  // Because of using GitHub Pages
  base: `/${repo}/`, //设置路由前缀，通常用于部署到非根目录。
  publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/gll-dumi-coomponent',
    },
  ],
  /*  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ], */
  // 用于切换 antd 暗黑模式
  // antd: {
  //   dark: true,
  // },
  theme: {
    '@c-heading': '#454d64',
    //主题颜色变量名称参照 https://github.com/umijs/dumi/blob/master/packages/theme-default/src/style/variables.less
  },
  // more config: https://d.umijs.org/config
});
