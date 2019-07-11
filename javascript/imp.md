# js 通用方法
在此记录我在代码中遇到或是自己封装的一些通用方法。

## extends inherit 
```javascript

```

## function cached version
```javascript
// Create a cached version of a pure function.
function cached (fn) {
	const cache = Object.create(null)
	return (function cachedFn (str) {
        const hit = cache[str]
        return hit || (cache[str] = fn(str))
    })
}
```

## camelize
```javascript
// Create a cached version of a pure function.
function cached (fn) {
	const cache = Object.create(null)
	return (function cachedFn (str) {
        const hit = cache[str]
        return hit || (cache[str] = fn(str))
    })
}

const camelizeRE = /-(\w)/g
const camelize = cached((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
})
```