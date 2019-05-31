# vue 基础
## 路由
在 vue 实例中获取路由
```javascript
this.$route
//获取vue路由所带参
this.$route.query.id 
```
:::tip
获取常规url参数封装

```javascript
function getQueryVariable(variable) {
    var query = window.location.search;
    query = query.slice(1, -1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

export default getQueryVariable
```
:::

### 动态参数路径

```javascript
{
    path: '/hello/:id', // 动态的id
    name: 'Hello',
    component: HelloWorld,
    meta: {
        auth: true,
        keepAlive: false
    }
}
//参数值会被设置到 this.$route.params
```

如果从/hello/1 访问 /hello/2，**原来的组件实例会被复用，这也意味着组件的生命周期钩子不会再被调用。**

```javascript
// 解决：
// watch（监测变化） $route 对象
// beforeRouteUpdate 守卫2.2+
beforeRouteUpdate (to, from, next) {
// react to route changes...
// don't forget to call next()
}
```

### 路由嵌套

```javascript
const router = new VueRouter({
    routes: [{ 
        path: '/user/:id', 
        component: User,// 符号/会被当做根路径
        children: [{
            // 当 /user/:id/profile 匹配成功，
            // UserProfile 会被渲染在 User 的 <router-view> 中
            path: 'profile',
            component: UserProfile
        },{
            // 当 /user/:id/posts 匹配成功
            // UserPosts 会被渲染在 User 的 <router-view> 中
            path: 'posts',
            component: UserPosts
        }]
    }]
})
```

### 标签导航

```html
<router-link to="/foo"></router-link>
<router-view></router-view>
```

### 编程式导航

**在 Vue 实例内部，你可以通过**

`$router`

**访问路由实例。因此你可以调用** `this.$router.push`

```javascript
router.push(location, onComplete?, onAbort?)
// 字符串
router.push('home')
// 对象
router.push({ path: 'home' })
// 命名的路由
router.push({ name: 'user', params: { userId: 123 }})
// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
const userId = 123
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user
```

### router.replace

跟`router.push`很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

| |
| :--- |


| 声明式 | 编程式 |
| :--- | :--- |
| `<router-link :to="..." replace>` | `router.replace(...)` |

### router.go

这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似`window.history.go(n)`。

### window.history api

**参考**[`window.history.pushState`**、**`window.history.replaceState`**和**`window.history.go`](https://developer.mozilla.org/en-US/docs/Web/API/History)

[Browser History APIs](https://developer.mozilla.org/en-US/docs/Web/API/History_API)

### 命名路由

```javascript
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
router.push({ name: 'user', params: { userId: 123 }})
```

### 命名视图

场景：同时展示多个视图

```javascript
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<div id="app">
<h1>Named Views</h1>
<ul>
<li>
<router-link to="/">/</router-link>
</li>
<li>
<router-link to="/other">/other</router-link>
</li>
</ul>
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
</div>
```

```javascript
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Baz = { template: '<div>baz</div>' }

const router = new VueRouter({
    mode: 'history',
    routes: [{ 
        path: '/',
        // a single route can define multiple named components
        // which will be rendered into <router-view>s with corresponding names.
        components: {
            default: Foo,
            a: Bar,
            b: Baz
            }
        },{
        path: '/other',
        components: {
            default: Baz,
            a: Bar,
            b: Foo
        }
    }]
})

new Vue({
router,
el: '#app'
})
```

### 重定向

```javascript
const router = new VueRouter({
    routes: [{
        path: '/a', redirect: to => {
        // 方法接收 目标路由 作为参数
        // return 重定向的 字符串路径/路径对象
        }
    }]
})
```

### 别名

```javascript
const router = new VueRouter({
routes: [{
     path: '/a', component: A, alias: '/b' 
     }]
})
```

### 导航守卫

**如果首次beforeEach未触发，是因为main函数内加载顺序的问题，需要将导航守卫提前。**

### 完整的导航解析流程 {#完整的导航解析流程}

1. 导航被触发。
2. 在失活的组件里调用离开守卫。
3. 调用全局的`beforeEach`守卫。
4. 在重用的组件里调用`beforeRouteUpdate`守卫 \(2.2+\)。
5. 在路由配置里调用`beforeEnter`。
6. 解析异步路由组件。
7. 在被激活的组件里调用`beforeRouteEnter`。
8. 调用全局的`beforeResolve`守卫 \(2.5+\)。
9. 导航被确认。
10. 调用全局的`afterEach`钩子。
11. 触发 DOM 更新。
12. 用创建好的实例调用`beforeRouteEnter`守卫中传给`next`的回调函数。

### 路由元信息

自定义的meta键值对，可以在`$route.matched中遍历，判断登录状态等功能。`

### 数据渲染

1. 在导航前获取数据。beforeRouteEnter
2. 在导航后获取数据。//created loading

### 模块导出

```javascript
export default {
    methodA : function(){},
    dataB : 'aaa'
}
```

## Vue插件

```javascript
install(Vue, options) {//创建一个全局组件
Vue.mixin({
    methods:{
        addPath(url){
            if(process.env.NODE_ENV === 'development'){
                return 'http://carowl.cn'+url
            }else{
                return Vue.prototype.$.host+url
            }
        }
    }
})
Vue.prototype.$ = {

}
}
//使用 this.addPath this.$.xxx
```

## Vue缓存

当路由有参数，无法返回时，可以用keepAlive，但是会导致进入的页面不会刷新，为了解决这个问题，引入了一个新的生命周期函数

**activated,想要刷新的内容在此执行。**

**deactivated this.$destroy销毁**

```javascript
meta: {
    auth : false,
    keepAlive : true
}
<keep-alive v-if="$route.meta.keepAlive">
<router-view/>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"/>
```

### 如果keepalive不能缓存滚动位置

```javascript
Vue.directive('scroll-save', {
    inserted(el) {
        el.addEventListener('scroll', function(e) {
        el.dataset.y = e.target.scrollTop;
        }, false);
    }
})
activated(){
    let el = document.getElementById('commend')
    el.scrollTop = el.dataset.y
}
```

## 自定义指令Vue.directive

在vue中如果需要操作dom，可以使用drective方法，这里ode需求是对一个表单的validate封装。因为我使用了mint-ui组件，而常规的valiadate需要自己写样式，所以我打算基于mint-ui做一个可扩展的封装。

```javascript
//注册一个最简的自定义指令，直接在元素中v-focus就可以使用
Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
    console.log(el)
}
})
```

但是inserted只有在创建dom时才执行，所以这里明显不符合我的使用场景。

### 钩子

* `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。

* `inserted`：被绑定元素插入父节点时调用 \(仅保证父节点存在，但不一定已被插入文档中\)。

* `update`：所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 \(详细的钩子函数参数见下\)。

* `componentUpdated`：指令所在组件的 VNode**及其子 VNode**全部更新后调用。

* `unbind`：只调用一次，指令与元素解绑时调用。

参数

* `el`：指令所绑定的元素，可以用来直接操作 DOM 。
* `binding`：一个对象，包含以下属性：
* `name`：指令名，不包括`v-`前缀。
* `value`：指令的绑定值，例如：`v-my-directive="1 + 1"`中，绑定值为`2`。
* `oldValue`：指令绑定的前一个值，仅在`update`和`componentUpdated`钩子中可用。无论值是否改变都可用。
* `expression`：字符串形式的指令表达式。例如`v-my-directive="1 + 1"`中，表达式为`"1 + 1"`。
* `arg`：传给指令的参数，可选。例如`v-my-directive:foo`中，参数为`"foo"`。
* `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar`中，修饰符对象为`{ foo: true, bar: true }`。
* `vnode`：Vue 编译生成的虚拟节点。移步[VNode API](https://cn.vuejs.org/v2/api/#VNode-接口)来了解更多详情。
* `oldVnode`：上一个虚拟节点，仅在`update`和`componentUpdated`钩子中可用。

## Object.freeze\(\)

## track-by="$index"

## vm.$compile 编译dom

```javascript
//但注意这是个私有api，随时都有可能变动，并且这种做法有违vue的理念。
new Vue({
    data: {
        value: 'demo'
    },
    created () {
        let dom = document.createElement('div');
        dom.innerHTML = '{{ value }}';
        this.$compile(dom);
    }
})
```

## vm.$emit

```javascript
this.$emit(name,event)
this.$emit(name,[param1,param2])
```

### 数据绑定不实时刷新

根本原因是使用的语法并未触发Vue的get set监听。

```javascript
this.prefer[index] = this.tool[item.sn]//不会触发刷新
// Vue.set 触发监听
Vue.set(example1.items, indexOfItem, newValue)
// Array.prototype.splice`
example1.items.splice(indexOfItem, 1, newValue)
example1.items.splice(newLength)
this.$set(this.carts, index, obj);
```
### 上传文件
accept可接受的文件类型，可选参数：
* | audio/\* | 接受所有的声音文件。 |
| :--- | :--- |
| video/\* | 接受所有的视频文件。 |
| image/\* | 接受所有的图像文件。 |
| MIME\_type | MIME\_type |

```javascript
<input type="file" name="vr" @change="uploadVr" accept="">
```
判断文件类型（根据后缀）
```javascript
var copy_ulr = this.$refs.vr_file.value.toLowerCase();
var suffix =copy_ulr.slice(copy_ulr.lastIndexOf('.'),copy_ulr.length)
console.log(suffix)

if(suffix === ('.zip' || '.rar') ){
this.vr_url = this.$refs.vr_file.value;
}else {

}
```

### 聊天输入框
输入框支持emoji图片显示 ： 使用div代替textarea
```javascript
contenteditable="true"
```
div支持keydown
```javascript
@keydown="trySendMessage($event)" tabIndex="1"
```

### v-model
实际上是个语法糖，实际效果与下相同:
```javascript
v-bind:value="message" v-on:input="setMsg"
```
v-model 只支持&lt;select&gt; &lt;input&gt; &lt;textarea&gt;

### Vue.component
Vue.component 注册组件要在new Vue之前才能成功注册。
vm == Vue实例
```javascript
new Vue({
//选项
})
```
> **所有的 Vue.js 组件其实都是被扩展的 Vue 实例。**
> **v-once : 一次性数据，不会随着data改变而改变**
> **过滤器只能在 `mustache {message}` 绑定和`v-bind`表达式（从 2.1.0 开始支持）中使用，其他复杂情况使用计算属性**
```