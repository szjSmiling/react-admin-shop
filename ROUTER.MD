<!--
 * @Author: sunzhongjie
 * @Date: 2020-11-18 23:25:09
 * @LastEditors: Jelly
 * @LastEditTime: 2020-11-18 23:37:29
-->
### 1.页面路由
```js
*只能在浏览器看到, 在js无法操作
window.location.href = 'http://www.baidu.com'
window.back()
```

### 2. hash路由
```js
window.location ="#test"
window.location ="#test1"
window.onhashchange = function () {
  console.log('current: ', window.location.hash)
  // 可以在这里判断地址, 进行逻辑处理
}
```

### 3. H5路由
```js
history.pushState(name, title, address)
*title字段已废弃, address: 页面要跳转的地址,可以是'#test',也可是'/test'
history.pushState('test', 'Title', '/user/index')
window.onpopstate = function (e) {
  // 只有在后退的时候触发
  console.log('H5 router change: ', e.state);
}
// repalceState是替换当前的路由,不会往历史记录里添加被替换的路由
history.replaceState('test', null, '/index/test');
```