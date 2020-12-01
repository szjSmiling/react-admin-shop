/*
 * @Author: Jelly
 * @Date: 2020-11-15 21:31:52
 * @LastEditors: Jelly
 * @LastEditTime: 2020-11-26 21:59:35
 * @Github: https://github.com/szjSmiling/react-admin-shop
 */
import React from 'react';

class ListSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: 'productId', // productId, productName
      searchKeyword: ''
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
    this.props.onSearch(this.state.searchType, this.state.searchKeyword)
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
              <select className="form-control"
                name="searchType"
                onChange={(e) => this.onValueChange(e)}>
                <option value="productId">按商品ID查询</option>
                <option value="productName">按商品名称查询</option>
              </select>
            </div>
            <div className="form-group">
              <input className="form-control"
                type="text"
                placeholder="关键词"
                name="searchKeyword"
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