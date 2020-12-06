/*
 * @Author: Jelly
 * @Date: 2020-11-15 21:31:52
 * @LastEditors: Jelly
 * @LastEditTime: 2020-12-06 22:54:05
 * @Github: https://github.com/szjSmiling/react-admin-shop
 */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

// import 'font-awesome/css/font-awesome.min.css';
import Layout from 'component/layout/index.jsx';
// 页面
import Home from 'page/home/index.jsx';
import Login from 'page/login/index.jsx';
import ProductRouter from 'page/product/router.jsx';
import OrderList from 'page/order/index.jsx';
import OrderDetail from 'page/order/detail.jsx';
import UserList from 'page/user/index.jsx';
import ErrorPage from 'page/error/index.jsx';
class App extends React.Component {
  render () {
    let LayoutRoute = (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={ProductRouter} />
          <Route path="/product-category" component={ProductRouter} />
          <Route path="/order/index" component={OrderList} />
          <Route path="/order/detail/:orderNumber" component={OrderDetail} />
          <Route path="/user/index" component={UserList} />
          <Redirect exact from="/order" to="/order/index" />
          <Redirect exact from="/user" to="/user/index" />
          <Route component={ErrorPage} />
          {/* <Redirect from="*" to="/" /> */}
        </Switch>
      </Layout>
    );
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={props => (
            LayoutRoute
          )} />
        </Switch>
      </Router>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
)