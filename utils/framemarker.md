# framemarker 入门
framemarker 本身是后端使用的一种模板，由于在项目中需要使用 framemarker ，在此做一个简单的入门。
和以往的工具使用不同，本次的目的并非是一种纯技术的入门，而是在提供了基础搭建后，对于模板文件的修改和使用。

## 模板
```html
${name}
```

## 语法
```
?? 是否为 null 或 未定义。
value！='' 预定义
```

## 指令

### 判断
```html
<#if true> something </#if>
```

### 遍历
```html
<#list array as item>

</#list>
```

### import
引入命名空间，而不是单纯的将另一个模板添加进来，可以有效地防止命名冲突。
```html
<#import "/utils/common.ftl" as com>
```

### assign
定义一个变量，并赋值
```html
<#assign isOfficial=com.getVFP(form,"isOfficial")!/>
```

### macro
定义自定义指令
```html
<#macro copyright date>
```