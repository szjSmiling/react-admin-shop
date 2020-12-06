/*
 * @Author: sunzhongjie
 * @Date: 2020-11-18 23:11:10
 * @LastEditors: Jelly
 * @LastEditTime: 2020-12-06 22:03:59
 */

import React from 'react';
import MUtil from 'util/mm.jsx'
import Product from 'service/product-service.jsx'

import PageTitle from 'component/page-title/index.jsx';

const _mm = new MUtil();
const _product = new Product();


class CategoryAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      parentId: 0,
      categoryName: ''
    }
  }
  componentDidMount() {
    this.loadCategoryList();
  }
  // 加载品类列表, 为了显示父类列表
  loadCategoryList() {
    _product.getCategoryList()
    .then(res => {
      this.setState({
        categoryList: res
      });
    }, errMsg => {
      _mm.errorTips(errMsg);
    })
  }
  // 表单的值发生变化
  onValueChange(e) {
    const name = e.target.name,
      value = e.target.value;
    this.setState({
      [name]: value
    })
  }
  onSubmit(e) {
    let categoryName = this.state.categoryName.trim();
    if(categoryName) {
      // 品类不为空, 提交数据
      _product.saveCategory({
        parentId: this.state.parentId,
        categoryName: categoryName
      }).then(res => {
        _mm.successTips(res);
        this.props.history.push('/product-category/index');
      }, errMsg => {
        _mm.errorTips(errMsg);
      })
    } else {
      // 提示错误
      _mm.errorTips('请输入品类名称');
    }
  }
  render () {
    return (
      <div id="page-wrapper">
        <PageTitle title="品类列表" />
        <div className="row">
          <div className="rol-md-12">
            <div className="form-horizontal">
              <div className="form-group">
                <label className="col-sm-2 control-label">所属品类</label>
                <div className="col-sm-5">
                  <select name="parentId"
                    className="form-control"
                    onChange={(e) => this.onValueChange(e)} >
                    <option value="0">根品类/</option>
                    {
                      this.state.categoryList.map((category, index) => (
                        <option key={index} value={category.id}>{category.name}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">品类名称</label>
                <div className="col-sm-5">
                  <input type="text"
                  className="form-control"
                  placeholder="请输入品类名称"
                  name="categoryName"
                  value={this.state.name}
                  onChange={(e) => this.onValueChange(e)}/>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit"
                  className="btn btn-primary"
                  onClick={(e) => this.onSubmit(e)}>保存</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CategoryAdd;
