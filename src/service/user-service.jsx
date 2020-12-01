/*
 * @Author: sunzhongjie
 * @Date: 2020-11-24 22:03:52
 * @LastEditors: Jelly
 * @LastEditTime: 2020-11-25 23:26:09
 */
import MUtil from 'util/mm.jsx'

const _mm = new MUtil();

class User {
  login(loginInfo) {
    return _mm.request({
      type: 'post',
      url: '/manage/user/login.do',
      data: loginInfo
    })
  }
  // 检查登录接口数据是不是合法
  checkLoginInfo(loginInfo) {
    let username = $.trim(loginInfo.username),
      password = $.trim(loginInfo.password);
    if(typeof username !== 'string' || username.length === 0) {
      return {
        status: false,
        msg: '用户名不能为空!'
      }
    }
    if(typeof password !== 'string' || password.length === 0) {
      return {
        status: false,
        msg: '密码不能为空!'
      }
    }
    return {
      status: true,
      msg: '验证通过!'
    }
  }
  // 退出登录
  logout() {
    return _mm.request({
      type: 'post',
      url: '/user/logout.do'
    })
  }
  getUserList(pageNum) {
    return _mm.request({
      type: 'post',
      url: '/manage/user/list.do',
      data: {
        pageNum
      }
    })
  }
}

export default User;