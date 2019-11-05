(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{197:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("性能分析需要借助工具，通常使用 google 分析工具，以前叫 Timeline ，新的版本中叫 performance 。")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/javascript/performance.png"),alt:"performance"}}),e._v("\n## 案例分析\n通过一个在线 demo 来测试 performance 的使用方法。\n"),r("p",[r("a",{attrs:{href:"https://googlechrome.github.io/devtools-samples/jank/",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo"),r("OutboundLink")],1)]),e._v(" "),e._m(1),e._v(" "),r("img",{attrs:{src:e.$withBase("/javascript/memory.png"),alt:"memory"}}),e._v(" "),r("img",{attrs:{src:e.$withBase("/javascript/fps.png"),alt:"fps"}}),e._v(" "),r("p",[e._v("然后开启录制，一段时间后结束录制，就会生成性能报告。")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),r("img",{attrs:{src:e.$withBase("/javascript/performance1.png"),alt:"performance1"}}),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("FPS 的下方就是 CPU , CPU 对应下方的 summary 。通过分析 CPU 在各项处理上花费的时间排查性能问题。")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/javascript/summary.png"),alt:"summary"}})])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"google-performance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#google-performance"}},[this._v("#")]),this._v(" google performance")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("由于 google 插件会导致结果不准确，因此在使用前，先开启匿名模式 "),t("code",[this._v("ctrl + shift + N")]),this._v("。可以选择 screenshots（截图） 和 memory（内存）。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"fps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fps"}},[this._v("#")]),this._v(" FPS")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("FPS 是分析动画的重要指标，红色代表有性能问题，绿色越高，用户体验越好。下方 Frame 的 FPS 如果都在 60 以上，帧率就比较正常。\n可以使用快捷键 "),r("code",[e._v("ctrl + shift + P")]),e._v("，输入 "),r("code",[e._v("Rendering")]),e._v(" ，选择 "),r("code",[e._v("Show Rendering")]),e._v("，然后在下方面板勾选 "),r("code",[e._v("FPS Meter")]),e._v("。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"cpu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpu"}},[this._v("#")]),this._v(" CPU")])}],!1,null,null,null);t.default=a.exports}}]);