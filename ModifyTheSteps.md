<!--
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-12 09:33:25
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-12 10:38:08
-->

# umicom-components 项目修改步骤

## 简介

    修改自此(项目)https://github.com/umijs/dumi-template

## 一、.添加 eslint(和 typescriptlint)例子

    ①.依赖命令：npm i eslint @babel/eslint-parser babel-eslint eslint-config-airbnb eslint-plugin-babel  eslint-plugin-flowtype eslint-plugin-import eslint-plugin-react-hooks eslint-plugin-react eslint-plugin-jsx-a11y@latest typescript @typescript-eslint/parser  @typescript-eslint/eslint-plugin --save-dev  
    ②.添加 eslint文件
    .eslintrc.js   eslint配置文件
    .eslintignore   eslint不包含的文件和文件夹
    ③.作用
    保存的时候自动格式化代码,通过npm run lint:js统一进行格式化

## 二、添加 babel

    ①.依赖命令：
    npm i @babel/eslint-parser  babel-eslint babel-plugin-import --save-dev
    ②.添加babel文件
    .babelrc babel配置文件
    ③.作用
    将es6代码转义为es5的,使用一些新特性

## 三、添加 stylelint

    ①.依赖命令：
    npm i stylelint stylelint-config-prettier stylelint-config-standard --save-dev
    ②.添加stylelintrc.json
    stylelint配置文件
    ③.作用
    保存格式化less,css 命令：npm run lint:style

## 四、添加 classnames 库

    ①.依赖命令:
    .npm i classnames --save
    ②.使用
     classNames({ name: true, name2: false })  ==> 'name'
    ③.作用
    动态class名称使用的库

## 五、添加 prop-types 库

    ①.依赖命令：
    npm i prop-types --save
    ②.使用
    import PropTypes from 'prop-types';
    PropTypes.string查看查看
    ③.作用
    给组件提供prop数据的类型校验

## 六、添加的五个模版组件 src 下

    FOO   -- 有多个展示样例的typescript的写法
    FOO2  -- typescript的写法
    FooFunction  -- typescript的写法用function
    Template  -- 使用jsx Class方式编写组件模版
    TemplateHook  -- 使用jsx 的function的方式编写组件模版
    注：必须在src下的index.ts中将组件导出在可以展示

## 七、添加自动生成组件说明 react-docgen

    ①.依赖命令：
    npm i react-docgen --save
    ②.使用
    到了组件哪个文件夹必须有docgen.js文件
    执行 node .\docgen.js 就会生成对应的temp.md文件
    ③.作用
    生成通用组件的参数说明md文件

## 八、docs 里面文件头部配置

    ①.基础配置
    nav.path :决定当前md文件在哪个页面
    ②.其他配置
    （ForntMatter文档）https://d.umijs.org/zh-CN/config/frontmatter

## 九、.umirc.ts 文件中是 dumi 的基本配置项

    ①.基础配置
    favicon：页面标题前面的图片
    logo:项目左上角的标题
    locales:标识默认是中文还是英文,默认是英文
    默认数据(表示默认英文)：[
        ['en-US', 'English'],
                            ['zh-CN','中文']
    ],
    默认的md代表英文md文件
    zh-CN.md结尾的代表中文文件
    默认中文的数据:[
    ['zh-CN','中文'],
    ['en-US','English']
    ]
    默认的md文件代表中文
    en-US.md结尾代表英文
    ②.其余配置
    (config文档)https://d.umijs.org/zh-CN/config

## 十、tree.txt 项目目录文件介绍

## 十一、发布到 npm

    ①.npm build
    ②.npm login  //登陆npm账号并且必须要验证邮箱
    ③.npm whoami //查看npm登陆的账号
    ④.npm publish //发布到npm上
    问题：
    需要先设置npm源为npmjs.org
    npm config set registry http://registry.npmjs.org
    提交完之后再改回淘宝源
    npm config set registry http://registry.npm.taobao.org
    查看npm源
    npm config get registry
