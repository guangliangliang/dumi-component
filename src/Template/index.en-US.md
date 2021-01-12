---
nav:
  title: Components
  title.zh-CN: 组件
  order: 3
  path: /components
---

## Template

Demo:

```tsx
import React from 'react';
import { Template } from 'dumi-component';
export default () => (
  <Template
    optionalString=""
    optionalNumber={1}
    optionalObject={{}}
    optionalSymbol={Symbol(2)}
    optionalArray={[]}
    optionalBool={false}
    optionalFunc={() => {
      console.log(1);
    }}
    optionalMulti={1}
    optionalNode={0}
  />
);
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
