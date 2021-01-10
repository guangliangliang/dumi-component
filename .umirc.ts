/*
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-10 21:15:30
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-10 21:20:41
 */
import { defineConfig } from 'dumi';

const repo = 'dumi-component';

export default defineConfig({
  title: repo,
  favicon:
    'https://gitee.com/guangliangliang/images/raw/master/img/favicon.ico', //配置 favicon 地址（href 属性）。
  logo: 'https://gitee.com/guangliangliang/images/raw/master/img/favicon.ico', //配置 favicon 地址（href 属性）。
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/gll-dumi-coomponent',
    },
  ],
  // more config: https://d.umijs.org/config
});
