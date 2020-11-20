/*
 * @Author: sunzhongjie
 * @Date: 2020-11-18 23:11:10
 * @LastEditors: Jelly
 * @LastEditTime: 2020-11-20 23:59:39
 */

import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
// import './index.scss'

class Home extends React.Component {
  render () {
    return (
      <div id="page-wrapper">
        <PageTitle title="首页" />
        <div className="row">
          <div className="col-md-12">
            body
          </div>
        </div>
      </div>
    )
  }
}
export default Home
