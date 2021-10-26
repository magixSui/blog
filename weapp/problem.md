<!--
 * @Author: your name
 * @Date: 2021-08-18 08:10:14
 * @LastEditTime: 2021-08-24 12:37:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qz-admind:\projects\blog\weapp\problem.md
-->
# 小程序

## 获取头像不清晰
小程序通过用户授权访问的用户信息接口会返回头像 url ，但是这个图片并不是原图，可以通过更改最后一个参数的数值调整像素大小。

```
// 可选数值 0、46、64、96、132
https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIdTW04fUcDr9y1dhqbm4cxibUVVoxxxxxxxxxxxxxxxxxxxxx/0
```

## 分享被篡改
在分享函数中，要加入自定义图片，避免被篡改

## 实时数据监听
在小程序端可以使用 collection 的 watch 方法对数据进行实时监听，但是要注意开启数据库中数据权限所有用户可读。

## 联表查询 lookup
```
const { list } = await db.collection('rooms').aggregate().lookup({
    from: 'users',
    let: {
      room_players: '$playerList'
    },
    pipeline: $.pipeline().match(_.expr($.in(['$openid', '$$room_players'])))
      .project({
        avatarUrl: 1,
        nickName: 1,
        openid: 1
      }).done(),
    as: 'players',
  }).lookup({
    from: 'users',
    let: {
      room_owner: '$ownerInfo'
    },
    pipeline: $.pipeline().match(
      _.expr($.and([
        $.eq(['$openid', '$$room_owner'])
      ]))
    )
      .project({
        avatarUrl: 1,
        nickName: 1,
        openid: 1
      }).done(),
    as: 'owner',
  }).project({
    players: 1,
    owner: 1,
    name: 1,
    isEntry: 1,
  }).end()
```