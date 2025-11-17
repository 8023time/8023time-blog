---
title: 'useRef'
date: '2020-05-15'
draft: false
path: '/blog/react-hook-useRef'
---

# useId

> `useId` 是 React 18 新增的 Hook，用于生成**稳定且唯一的 ID**，主要用于无障碍（Accessibility, a11y）属性或组件之间的关联。  
> 它在服务端渲染（SSR）和客户端渲染（CSR）中保持一致，避免 ID 不匹配问题。

---

# 使用场景

- 为组件生成唯一的 ID，以便在组件中使用
- 解决 SSR 场景下的 ID 不一致的问题
- 无障碍交互唯一ID

---

# 语法

```tsx
import { useId } from 'react';

const id = useId();
```

## 参数

无

## 返回值

返回一个稳定的、唯一的字符串 ID。
比如： `:r0:` `:r1:`
这些 ID 会在每个组件实例中保持唯一性，并在服务端和客户端渲染之间保持一致。

---

# 示例

```tsx
import { useId } from 'react';

export default function NameField() {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>姓名：</label>
      <input id={id} type='text' />
    </div>
  );
}
```

`useId` 可以保证每个表单组件都有自己独立的 ID，避免多实例冲突。
