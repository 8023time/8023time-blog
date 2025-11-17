---
title: 'useState'
date: '2020-05-15'
draft: false
path: '/blog/react-hook-useState'
---

# useState

`useState` 是一个 React Hook，允许函数组件在内部管理状态。

> 组件通常需要根据交互更改屏幕上显示的内容，例如点击某个按钮更改值，或者输入文本框中的内容，这些值被称为状态值也就是(state)

# 语法

`useState` 返回一个数组，数组的第一个元素是当前状态值，第二个元素是一个函数，该函数用于更新状态值。

```tsx
const [state, setState] = useState(initialState);
```

## 参数

- `initialState`：初始状态值，可以是任何类型的的值,也可以是函数，该函数会在组件第一次渲染时被调用，并返回初始化值，注意这个只会执行一次，更新的时候就不会执行了

## 返回值

- `state`：当前状态值
- `setState`：用于更新状态值的函数

## `setState`的两种写法【推荐使用函数式更新】

1. setXxx(newValue): 参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
2. setXxx(value => newValue): 参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原来的状态值

# 示例代码

```tsx
import React from 'react';
import { useState } from 'react';

const Father: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>当前计数：{count}</p>
      <button onClick={handleClick}>增加</button>
    </div>
  );
};
```

# 注意事项

- `useState` 只能在 `组件的顶层` 或自己的 `Hook` 中调用它
- 在严格模式中，React 将 两次调用初始化函数，以 帮你找到意外的不纯性。这只是开发时的行为，不影响生产环境。
- `useState` 更新状态值时，组件会重新渲染

# useState 的更新机制

## 异步机制

在 `React` 事件中，`setState` 是异步的。
这是出于性能考虑：`React` 会将多个更新合并（批量更新），只进行一次重新渲染。

```tsx
import { useState } from 'react';
function App() {
  let [index, setIndex] = useState(0);
  const handleClick = () => {
    setIndex(index + 1);
    console.log(index, 'index'); // 0 index
  };
  return (
    <>
      <h1>Index:{index}</h1>
      <button onClick={handleClick}>更改值</button>
    </>
  );
}
export default App;
```

上面的代码中，如果想要拿到最新值，应该使用函数式更新：

```tsx
setIndex((prev) => {
  console.log(prev, 'prev'); // 打印最新状态
  return prev + 1;
});
```

## 批量更新

多个 setState 调用在同一事件中不会立即生效，而是合并为一次更新,最后一个setState生效。

```tsx
setCount(count + 1);
setCount(count + 1);
```

最终结果是 count + 1，而不是 count + 2。
如果想要实现 count + 2的效果，正确写法应为使用函数式更新：

```tsx
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
```

这样最终结果才会是 count + 2。

# useState 与对象 / 数组状态

`useState` 不会自动合并对象或数组，更新时要手动创建新引用

```tsx
const [user, setUser] = useState({ name: 'Tom', age: 20 });

// 错误写法：丢失其他属性
setUser({ age: 21 });

// 正确写法：使用展开运算符
setUser((prev) => ({ ...prev, age: 21 }));
```

## 数组

在React中你需要将数组视为只读的，不可以直接修改原数组，例如：不可以调用 arr.push() arr.pop() 等方法。

| 操作类型 | 避免使用（会改变原始数组） | 推荐使用（会返回一个新数组）  | 示例                                            |
| -------- | -------------------------- | ----------------------------- | ----------------------------------------------- |
| 添加元素 | `push`、`unshift`          | `concat`、`[...arr, newItem]` | `const newArr = [...arr, newItem]`              |
| 删除元素 | `pop`、`shift`、`splice`   | `filter`、`slice`             | `const newArr = arr.filter(item => item !== x)` |
| 替换元素 | `splice`、`arr[i] = ...`   | `map`                         | `const newArr = arr.map(v => v === x ? y : v)`  |
| 排序     | `reverse`、`sort`          | 先复制后操作                  | `const newArr = [...arr].sort()`                |

## 对象

在使用setObject的时候，可以使用Object.assign合并对象 或者 ... 合并对象，不能单独赋值，不然会覆盖原始对象。

```tsx
const [user, setUser] = useState({ name: 'Tom', age: 20 });

// 错误写法：单独赋值会覆盖原始对象
user.name = 'Jerry';

// 正确写法：使用Object.assign合并对象
setUser(Object.assign({}, user, { name: 'Jerry' }));

// 正确写法：使用展开运算符合并对象
setUser({ ...user, name: 'Jerry' });
```
