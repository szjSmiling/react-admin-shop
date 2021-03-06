/*
 * @Author: sunzhongjie
 * @Date: 2020-11-18 23:11:10
 * @LastEditors: Jelly
 * @LastEditTime: 2020-11-26 21:37:43
 */

import React from 'react';
import MUtil from 'util/mm.jsx'
import User from 'service/user-service.jsx'

import PageTitle from 'component/page-title/index.jsx';
import TableList from 'util/table-list/index.jsx';
import Pagination from 'util/pagination/index.jsx';

const _mm = new MUtil();
const _user = new User();


class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      pageNum: 1,
      firstLoading: true
    }
  }
  componentDidMount() {
    this.loadUserList();
  }
  loadUserList() {
    _user.getUserList(this.state.pageNum)
    .then(res => {
      this.setState(res, () => {
        this.setState({
          firstLoading: false
        })
      });
    }, errMsg => {
      _mm.errorTips(errMsg);
    })
  }
  onPageNumChange(pageNum) {
    this.setState({
      pageNum
    }, () => {
      this.loadUserList();
    })
  }
  render () {
    // const colorArr = ['active', 'success', 'warning', 'danger', 'info'];
    return (
      <div id="page-wrapper">
        <PageTitle title="用户列表" />
        <TableList tableHeads={['ID','用户名','邮箱','电话','注册时间']}>
          {
            this.state.list.map((user, index) => {
              return (
                <tr /* className={colorArr[index%5]} */ key={index}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{new Date(user.createTime).toLocaleString()}</td>
                </tr>
              )
            })
          }
        </TableList>
        <Pagination
          current={this.state.pageNum}
          total={this.state.total}
          onChange={(pageNum) => this.onPageNumChange(pageNum)} />
      </div>
    )
  }
}
export default UserList
