## 基于vue开发的个人博客

---

### 项目技术栈：

1. 前台
   - 网站整体架构：vue
   - UI库：element-ui
   - 使用了日历插件
   - 调用了一个第三方笑话接口
2. 后台
   - 接口对接使用php
   - 数据库：mysql（有时间打算用mogodb重构数据）

### 项目中遇到的困难

1. ==浏览器跨域问题==

   ```js
   //允许所有域名访问
   header('Access-Control-Allow-Origin: *');
   -------------------
   //允许单个域名访问
   header('Access-Control-Allow-Origin: https://test.com');
   ```

   

2. ==搜索功能的实现==

   ```js
   //采用filter函数配合正则表达式遍历结果
   //找到符合条件的数据
   data.filter( data => {
       return data.match(search);
   })
   ```

3. ==vue页面刷新404==

   [解决vue页面刷新后报404](https://www.cnblogs.com/cx709452428/p/10338925.html)

   

4. ==使用promise解决回调地狱问题==

   参考作者B站：

   ​	[promise理解和使用(async_await)](https://www.bilibili.com/video/BV14C4y1t7ed/) 

   ![](https://i1.hdslb.com/bfs/archive/5892c99073a540208ccb9d92b8c659815f71fa58.png_320x200.png)



### 写在最后：

​	最能让人感到快乐的事，莫过于经过一番努力后，所有东西正慢慢变成你想要的样子。

![](https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3388408723,3354626501&fm=26&gp=0.jpg)
