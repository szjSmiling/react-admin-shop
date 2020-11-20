/*
 * @Author: Jelly
 * @Date: 2020-11-15 21:31:52
 * @LastEditors: Jelly
 * @LastEditTime: 2020-11-20 23:47:58
 * @Github: https://github.com/szjSmiling/react-admin-shop
 */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

// import 'font-awesome/css/font-awesome.min.css';

// 页面
import Home from 'page/home/index.jsx'
import Layout from 'component/layout/index.jsx'
class App extends React.Component {
  render () {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/product" component={Home} />
            <Route path="/product-category" component={Home} />
            {/* <Redirect from="*" to="/" /> */}
          </Switch>
        </Layout>
      </Router>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
)