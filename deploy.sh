# deploy.sh
###
 # @Description: 
 # @Version: 1.0
 # @Autor: gll
 # @Date: 2020-11-28 15:49:38
 # @LastEditors: unicom
 # @LastEditTime: 2021-01-10 21:27:50
### 
# 错误时停止
set -e

# 打包
npm run docs:build

# 进入目标文件夹
cd docs-dist

# 提交到本地仓库

git init
git add -A
git commit -m 'deploy'
# https://github.com/guangliangliang/vue-admin
# 提交到 https://github.com:guangliangliang/vue-admin 项目的 gh-pages 分支
git push -f git@github.com:guangliangliang/dumi-component.git master:gh-pages

cd -