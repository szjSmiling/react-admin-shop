/*
 * @Author: sunzhongjie
 * @Date: 2020-11-18 23:11:10
 * @LastEditors: Jelly
 * @LastEditTime: 2020-11-25 22:35:55
 */

import React from 'react';
import { Link } from 'react-router-dom';

import PageTitle from 'component/page-title/index.jsx';

class ErrorPage extends React.Component {

  render () {
    return (
      <div id="page-wrapper">
        <PageTitle title="出错啦" />
        <div className="row">
          <div className="col-md-12">
            <span>只要不到该路径.</span>
            <Link to="/">点我返回首页</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default ErrorPage
