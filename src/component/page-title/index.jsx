/*
 * @Author: sunzhongjie
 * @Date: 2020-11-18 23:11:10
 * @LastEditors: Jelly
 * @LastEditTime: 2020-11-21 00:00:31
 */

import React from 'react';

class PageTitle extends React.Component {
  constructor (props) {
    super(props);
  }
  componentWillMount () {
    document.title = this.props.title + ' - HAPPY MMALL';
  }
  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1 className="page-header">{this.props.title}</h1>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default PageTitle
