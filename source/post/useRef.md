---
title: 'useRef'
date: '2020-05-15'
draft: false
path: '/blog/react-hook-useRef'
---

# useRef

`useRef` 是 React 提供的一个 Hook，用于在函数组件中创建一个**可变的引用对象**，它在组件的整个生命周期内**保持不变**。

通常用于两种情况：

1. **直接操作 DOM 元素**；
2. **在渲染之间保存可变值**（不会触发重新渲染）。

> 它类似于 Vue 的 `ref`，不同的是：
>
> - Vue 的 `ref` 是响应式的（改变会触发视图更新）。
> - React 的 `ref` 是非响应式的（改变不会导致重新渲染）。

---

# 语法

```tsx
const ref = useRef(initialValue);
```

## 参数

- `initialValue`：`ref.current` 的初始值。

## 返回值

- 一个对象 `{ current: initialValue }`，可读可写。
  你可以通过修改 `ref.current` 来存储任意值。

---

# 应用场景

## 1. 处理DOM元素

`useRef` 最常见的用途是获取 DOM 节点的引用，进行原生操作（如聚焦、滚动、测量尺寸等）。

```tsx
import React from 'react';
import { useRef } from 'react';

const Father: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder='点击按钮聚焦' />
      <button onClick={handleFocus}>聚焦输入框</button>
    </div>
  );
};

export default Father;
```

- 当组件渲染时，React 会自动把对应的 DOM 节点赋值给 `inputRef.current`。
- 操作 DOM 不会触发组件重新渲染。

## 2. 保持持久性数据

`useRef` 可以在多次渲染之间保存一个值，而不会引起重新渲染。

```tsx
import React from 'react';
import { useRef, useState } from 'react';

const Father: React.FC = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef<number | NodeJS.Timeout>(null);

  const start = () => {
    if (timerRef.current) return; // 避免重复创建定时器
    timerRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div>
      <p>计数：{count}</p>
      <button onClick={start}>开始</button>
      <button onClick={stop}>停止</button>
    </div>
  );
};

export default Father;
```

- `timerRef.current` 存储定时器 ID；
- 组件多次渲染时该值保持不变；
- 修改它不会触发重新渲染。

---

# 对比

| **特性**         | **useRef**                      | **useState**                     |
| ---------------- | ------------------------------- | -------------------------------- |
| **触发重新渲染** | 不会                            | 会                               |
| **数据持久性**   | 在组件生命周期内持久化          | 状态更新后重新渲染，旧值可能丢失 |
| **典型用途**     | 访问 DOM、存储不触发渲染的值    | 管理需要更新 UI 的状态值         |
| **更新方式**     | 直接修改 `ref.current`          | 通过 `setState` 更新             |
| **何时选择**     | 需要持久化数据或操作 DOM 时使用 | 需要更新 UI 时使用               |
