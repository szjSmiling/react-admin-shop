/*
 * @Author: Jelly
 * @Date: 2020-11-15 21:31:52
 * @LastEditors: Jelly
 * @LastEditTime: 2020-12-01 23:36:14
 * @Github: https://github.com/szjSmiling/react-admin-shop
 */
import React from 'react';
import MUtil from 'util/mm.jsx'
import Product from 'service/product-service.jsx'

const _mm = new MUtil();
const _product = new Product();

import './category-selector.scss'

class CategorySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCategoryList: [],
      firstCategoryId: 0,
      secondCategoryList: [],
      secondCategoryId: 0
    }
  }
  componentDidMount() {
    this.loadFirstCategory();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    let categoryIdChange = this.props.categoryId !== nextProps.categoryId,
      parentCategoryIdChange = this.props.parentCategoryId !== nextProps.parentCategoryId;
    if(!categoryIdChange && !parentCategoryIdChange) {
      // 数据没有发生变化时, 直接不做处理
      return
    }
    if(nextProps.parentCategoryId === 0) {
      // 只有一级品类
      this.setState({
        firstCategoryId: nextProps.categoryId,
        secondCategoryId: 0
      })
    } else {
      // 有两级品类
      this.setState({
        firstCategoryId: nextProps.parentCategoryId,
        secondCategoryId: nextProps.categoryId
      }, () => {
        parentCategoryIdChange && this.loadSecondCategory();
      })
    }
  }
  // 加载一级品类
  loadFirstCategory() {
    _product.getCategoryList().then(res => {
      this.setState({
        firstCategoryList: res
      })
    }, errMsg => {
      _mm.errorTips(errMsg);
    })
  }
  // 加载二级品类
  loadSecondCategory() {
    _product.getCategoryList(this.state.firstCategoryId).then(res => {
      this.setState({
        secondCategoryList: res
      })
    }, errMsg => {
      _mm.errorTips(errMsg);
    })
  }
  // 选择一级品类
  onFirstCategoryChange(e) {
    if(this.props.readOnly) return;
    let newValue = e.target.value || 0;
    this.setState({
      firstCategoryId: newValue,
      secondCategoryId: 0,
      secondCategoryList: []
    }, () => {
      // 更新二级品类
      this.loadSecondCategory();
      this.onPropsCategoryChange();
    })
  }
  // 选择了二级品类
  onSecondCategoryChange (e) {
    if(this.props.readOnly) return;
    let newValue = e.target.value || 0;
    this.setState({
      secondCategoryId: newValue
    }, () => {
      this.onPropsCategoryChange();
    })
  }
  // 传给父组件选中的结果
  onPropsCategoryChange() {
    // 判断props里的回调函数是否存在
    let categoryChangable = typeof this.props.onCategoryChange === 'function';
    // 如果有二级品类
    if(this.state.secondCategoryId) {
      categoryChangable && this.props.onCategoryChange(this.state.secondCategoryId, this.state.firstCategoryId);
    }
    // 如果只有一级品类
    else {
      categoryChangable && this.props.onCategoryChange(this.state.firstCategoryId, 0);
    }
  }
  render () {
    return (
      <div className="col-sm-10">
        <select className="form-control cate-select"
          readOnly={this.props.readOnly}
          value={this.state.firstCategoryId}
          onChange={(e) => this.onFirstCategoryChange(e)}>
          <option value="">请选择一级分类</option>
          {
            this.state.firstCategoryList.map((category, index) => (
              <option key={index} value={category.id} >{category.name}</option>
            ))
          }
        </select>
        {this.state.secondCategoryList.length ?
          (<select className="form-control cate-select"
            readOnly={this.props.readOnly}
            value={this.state.secondCategoryId}
            onChange={(e) => this.onSecondCategoryChange(e)}>
            <option value="">请选择二级分类</option>
            {
              this.state.secondCategoryList.map((category, index) => (
                <option key={index} value={category.id} >{category.name}</option>
              ))
            }
          </select>) : null
        }
      </div>
    );
  }
}

export default CategorySelector;