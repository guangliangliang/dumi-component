/* eslint-disable linebreak-style */
/*
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-12 13:56:33
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-12 13:57:13
 */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable linebreak-style */
const msgPath = process.env.HUSKY_GIT_PARAMS;
const msg = require('fs')
  .readFileSync(msgPath, 'utf-8')
  .trim();

const commitRE = /^(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|release|workflow)(\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
  console.log();
  console.error(`
        不合法的 commit 消息格式。
        请查看 git commit 提交规范：https://github.com/guangliangliang/vue-admin/blob/master/gitCommitConfig.md
    `);

  process.exit(1);
}
