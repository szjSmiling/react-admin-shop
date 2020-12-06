/*
 * @Author: Jelly
 * @Date: 2020-11-15 21:31:52
 * @LastEditors: Jelly
 * @LastEditTime: 2020-12-06 22:26:36
 * @Github: https://github.com/szjSmiling/react-admin-shop
 */
import React from 'react';

class ListSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNumber: ''
    }
  }
  // 数据变化的时候
  onValueChange(e) {
    let name = e.target.name,
      value = e.target.value.trim();
    this.setState({
      [name]: value
    })
  }
  // 点击搜索的时候
  onSearch() {
    this.props.onSearch(this.state.orderNumber);
  }
  // 输入关键字回车
  onSearchKeywordKeyup(e) {
    if(e.keyCode === 13) {
      this.onSearch();
    }
  }
  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="form-inline search-wrap">
            <div className="form-group">
              <select className="form-control">
                <option value="productId">按订单号查询</option>
              </select>
            </div>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="请输入订单号"
                name="orderNumber"
                onKeyUp={(e) => this.onSearchKeywordKeyup(e)}
                onChange={(e) => this.onValueChange(e)}/>
            </div>
            <button className="btn btn-primary"
              onClick={(e) => this.onSearch(e)}>搜索</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListSearch;