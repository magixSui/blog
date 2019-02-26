# schema 设计
从最开始的毫无所知，到现在心中有了一点点的规划。
## 字段的定义
在最初的阶段，并不需要很复杂的数据结构，因此只需要了解最基本的结构。
```json
{
  username: {
    unique: true,
    type: String
  },
  password: String,
  dynamic: [{
    type:Schema.Types.ObjectId,
    ref:'News'
  }],
  compony: {
    type:Schema.Types.ObjectId,
    ref:'compony'
  },
  watchers:Array,
  bill:Object,
  meta: {
    createAt: {
      type: Date,
      dafault: Date.now()
    },
    updateAt: {
      type: Date,
      dafault: Date.now()
    }
  }
}
这是一个我目前使用的 schema 结构，对于每一项，可以设置类型：Array/Object/String/Number 以及关联。
```
:::tip
我的习惯一向如此，学习一门新的语言，了解一项新的技术，从基础的实现开始，而不是熟知每一个
api。
:::
## 关联
这里我花了较长的时间来理解和使用。考虑以下的场景：
已经存在两个模型（model）：User 与 Article。其中的关系是，用户拥有多篇文章，文章所属一个作者。现在
我要在查看用户时，同时查看用户的动态：多篇文章；在查看文章时，显示文章的作者。
schema的设计简写如下：
```javascript
let userSchema = new Schema({
  dynamic: [{
    type:Schema.Types.ObjectId,
    ref:'Article'
  }]
})

let articleSchema = new Schema({
  author: {
    type:Schema.Types.ObjectId,
    ref:'User'
  }
})
```
这样基本的结构定义好了，但是在存储和查询时，单纯的结构并不能实现我的需求，现在从绑定和查询两个角度，来
分别讲述，怎么基于结构绑定数据。
### 绑定
分析一下这两个模型：当我创建一个用户时，动态还没有创建。当用户创建一片文章时，一定存在用户。因此从创建文章
入手：
```javascript
  const article = new Article({
  author:author._id
})
```
这样在创建文章时，就把用户与文章关联起来了。如果查询数据库的话，会发现作者字段变成了 ` "author" : ObjectId("5c6f4230051cca1b64c1e3c9") `。
但是此时查询 user 文档，user 文档并不会发生变化。所以需要继续把文章绑定到作者上。
```javascript
  author.push(article)
  author.save()
```
### 查询
在正确的查询出结果之前，我的思路一直是以对象为条件，查询结果，但是并没有达到预期的结果：
```javascript
  Article.find({author:{name:'xxx'}})
```
在查看文档后，发现了 mongoose 独特的 polulate 方法：
```javascript
  Article.find().populate('author')
```
这样就得到了完整的 json 结构。