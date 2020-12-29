---
nav:
  title: Components
  title.zh-CN: 组件
  order: 2
  path: /components
---

## Foo-function

Demo:

```tsx
import React from 'react';
import { FooFunction } from 'gll-dumi-coomponent';

export default () => (
  <>
    <FooFunction>主按钮</FooFunction>
    <pre />
    <FooFunction type="ghost">次按钮</FooFunction>
    <pre />
    <FooFunction type="dashed">虚线按钮</FooFunction>
    <pre />
    <FooFunction type="link">链接按钮</FooFunction>
    <pre />
    <FooFunction type="text">文本按钮</FooFunction>
  </>
);
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
