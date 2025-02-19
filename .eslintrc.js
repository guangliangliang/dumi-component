/* eslint-disable linebreak-style */
module.exports = {
  // 环境，这里可以设置环来做区别判断
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  // 使用的扩展库
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  // 解析器用于解析代码
  // parser: 'babel-eslint',
  parser: '@typescript-eslint/parser',
  // 解析器配置
  parserOptions: {
    ecmaFeatures: true,
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  // 可以全局使用变量
  globals: {
    Babel: true,

    React: true,
  },
  // 第三方插件
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  // 规则配置
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    // 禁止缩进错误
    indent: 0,
    // 关闭不允许使用 no-tabs
    'no-tabs': 'off',
    'no-console': 0,
    // 设置不冲突 underscore 库
    'no-underscore-dangle': 0,
    // 箭头函数直接返回的时候不需要 大括号 {}
    'arrow-body-style': [2, 'as-needed'],
    'no-alert': 'error',

    // 设置是否可以重新改变参数的值
    'no-param-reassign': 0,
    // 允许使用 for in
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    // 不需要每次都有返回
    'consistent-return': 0,
    // 允许使用 arguments
    'prefer-rest-params': 0,
    // 允许返回 await
    'no-return-await': 0,
    // 不必在使用前定义 函数
    'no-use-before-define': 0,
    // 允许代码后面空白
    'no-trailing-spaces': 0,

    // 有一些 event 的时候，不需要 role 属性，不需要其他解释
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    // 类成员之间空行问题
    'lines-between-class-members': 0,

    // 不区分是否在 despendencies
    'import/no-extraneous-dependencies': 0,
    // 引用时候根据根目录基础
    'import/no-unresolved': 0,

    // 允许在 .js 和 .jsx 文件中使用  jsx
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // jsx > 紧跟着属性
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    // 不区分是否是 无状态组件
    'react/prefer-stateless-function': 0,
    'no-unused-vars': [
      0,
      {
        // 允许声明未使用变量
        vars: 'local',
        // 参数不检查
        args: 'none',
      },
    ],
    'prefer-const': 0, // 首选const
    'no-shadow': 0, // 外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    'no-undef': 0, // 不能有未定义的变量
    'no-return-assign': 0, // return 语句中不能有赋值表达式
    'func-names': 0, // 函数表达式必须有名字
    'prefer-destructuring': 0,
    'react/button-has-type': [
      0,
      {
        // 防止使用没有明确类型属性的按钮元素
        button: false,
      },
    ],
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
  },
};
