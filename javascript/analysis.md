# google performance
性能分析需要借助工具，通常使用 google 分析工具，以前叫 Timeline ，新的版本中叫 performance 。

<img :src="$withBase('/javascript/performance.png')" alt="performance">
## 案例分析
通过一个在线 demo 来测试 performance 的使用方法。

[demo](https://googlechrome.github.io/devtools-samples/jank/)

由于 google 插件会导致结果不准确，因此在使用前，先开启匿名模式 ` ctrl + shift + N `。可以选择 screenshots（截图） 和 memory（内存）。

<img :src="$withBase('/javascript/memory.png')" alt="memory">
<img :src="$withBase('/javascript/fps.png')" alt="fps">

然后开启录制，一段时间后结束录制，就会生成性能报告。
### FPS
FPS 是分析动画的重要指标，红色代表有性能问题，绿色越高，用户体验越好。下方 Frame 的 FPS 如果都在 60 以上，帧率就比较正常。
可以使用快捷键 ` ctrl + shift + P `，输入 ` Rendering ` ，选择 ` Show Rendering `，然后在下方面板勾选 ` FPS Meter `。

<img :src="$withBase('/javascript/performance1.png')" alt="performance1">

### CPU
FPS 的下方就是 CPU , CPU 对应下方的 summary 。通过分析 CPU 在各项处理上花费的时间排查性能问题。

<img :src="$withBase('/javascript/summary.png')" alt="summary">