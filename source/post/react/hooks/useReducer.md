---
title: 'useReducer'
date: '2020-05-15'
draft: false
path: '/blog/react-hook-useReducer'
---

# useReducer

`useReducer` 跟 `useState` 一样的都是帮我们管理组件的状态的，但是呢与`useState`不同的是 `useReducer` 是集中式的管理状态的。

```tsx
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

# 参数

- `reducer` 是一个处理函数，用于更新状态, reducer 里面包含了两个参数，第一个参数是 `state`，第二个参数是 `action`。`reducer` 会返回一个新的 state。
- `initialArg` 是 `state` 的初始值。
- `init` 是一个可选的函数，用于初始化 `state`，如果编写了init函数，则默认值使用init函数的返回值，否则使用`initialArg`。

# 返回值

- `state` 代表当前的状态。
- `dispatch` 是一个函数，用于触发 `reducer` 函数,通常式携带这一个 type 属性标识的对象。

# 例子

```tsx
import React from 'react';
import { useReducer } from 'react';

const Father: React.FC = () => {
  console.log('render'); // 只要下面触发dispatch，就会重新渲染组件，和useState一样

  // 定义reducer，接收两个参数，state和action，返回新的state
  const reducer = (state: number, action: { type: string }) => {
    switch (action.type) {
      case 'add':
        return state + 1;
      case 'sub':
        return state - 1;
      default:
        return state;
    }
  };

  // 初始值加10.只是在组件第一次渲染的时候执行
  const init = (state: number) => {
    return state + 10;
  };

  const [count, dispatch] = useReducer(reducer, 0, init);

  return (
    <>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: 'add' })}>+</button>
      <button onClick={() => dispatch({ type: 'sub' })}>-</button>
    </>
  );
};

export default Father;
```

初始时通过 `init` 函数初始化数据
随后通过 `dispatch` 触发 `reducer` 函数， `reducer` 函数根据 `dispatch` 传递的 action.type 进行不同的操作，并返回新的 `state` 。

# 总结

`useReducer` 跟 `useState` 一样的都是帮我们管理组件的状态的，但是 `useReducer` 是集中式的管理状态的。`useReducer` 接收三个参数，第一个参数是 `reducer`，第二个参数是 `initialArg`，第三个参数是可选的 `init` 函数。`useReducer` 返回两个值，第一个值是 `state`，第二个值是 `dispatch` 函数。`dispatch` 函数接收一个对象，该对象包含 `type` 属性，`type` 标识了 `reducer` 函数应该执行什么操作。

# 与 useState 的区别

| 对比项   | useState | useReducer           |
| -------- | -------- | -------------------- |
| 适合场景 | 简单状态 | 复杂状态逻辑         |
| 更新方式 | setState | dispatch(action)     |
| 状态存放 | 当前组件 | Reducer 函数集中管理 |
| 可读性   | 简单直观 | 逻辑更清晰、易扩展   |
