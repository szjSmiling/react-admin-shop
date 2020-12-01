/*
 * @Author: Jelly
 * @Date: 2020-11-15 21:31:52
 * @LastEditors: Jelly
 * @LastEditTime: 2020-12-01 23:38:47
 * @Github: https://github.com/szjSmiling/react-admin-shop
 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

// 页面
import ProductList from 'page/product/index/index.jsx';
import ProductSave from 'page/product/index/save.jsx';
import ProductDetail from 'page/product/index/detail.jsx';

class ProductRouter extends React.Component {
  render () {
    return (
      <Switch>
        <Route path="/product/index" component={ProductList} />
        <Route path="/product/save/:pid?" component={ProductSave} />
        <Route path="/product/detail/:pid" component={ProductDetail} />
        <Redirect exact from="/product" to="/product/index" />
      </Switch>
    );
  }
}

export default ProductRouter;