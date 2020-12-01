import React from 'react'

import TopNav from 'component/nav-top/index.jsx';
import SlideNav from 'component/nav-slide/index.jsx';

import './index.scss';
import './theme.scss';

class Layout extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div id="wrapper">
        <TopNav />
        <SlideNav />
        {this.props.children}
      </div>
    )
  }
}

export default Layout;