# 进制转换
## 十进制转二进制
### 十进制整数转化为二进制，将整数除以 2 取余，余 1 写 1 ，除尽写 0 ，直到除完，然后将所有余数倒序就是二进制。
<img :src="$withBase('/base-on-requirement/transfer.png')" alt="transfer">

十进制负数重复上述过程，然后再取补码。

## 二进制转十进制