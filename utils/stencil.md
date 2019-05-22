# stencil 入门
stencil 是一个 web 通用组件编译器， 他的产品定位是一款通用工具而非一个框架。这意味着 stencil 的通用性会更高。

## 能做什么
stencil 提倡 compile-time 工具，而不是 run-time 工具。他能让你使用浏览器并不直接支持的方案：<br>
- Virtual DOM
- Async rendering (inspired by React Fiber)
- Reactive data-binding
- TypeScript
- JSX

自动优化，web 标准等等。总结来说：
:::tip
stencil 是一款区别于传统运行时工具的运行时编译工具，在工具支持下你可以使用任何框架下使用前端的各类方案，并生成 web 标准的组件。
:::

## 浏览器支持
<img :src="$withBase('/utils/supported.png')"/>

<img :src="$withBase('/utils/supported-detail.png')"/>

## 开始
```
npm init stencil
```

:::tip
stencil 需要使用 npm 6+
:::
