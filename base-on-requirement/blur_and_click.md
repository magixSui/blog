# blur 与 click 事件的冲突

在表单中，如果是 input 状态，点击会失效。这是因为 javascript 是单线程，同一时间只能处理一个事件。
如果先触发了 blur 事件，那么 click 事件就不会执行。

## 解决办法

- 利用 mousedown 事件发生在 blur 之前，将点击事件写到 mousedown 中。
- 将 blur 事件增加延迟执行。
- 在 mousedown 中阻止浏览器默认事件，不执行 blur，再执行 click。