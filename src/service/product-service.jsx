/*
 * @Author: sunzhongjie
 * @Date: 2020-11-24 22:03:52
 * @LastEditors: Jelly
 * @LastEditTime: 2020-12-06 22:07:07
 */
import MUtil from 'util/mm.jsx'

const _mm = new MUtil();

class Product {
  getProductList(listParam) {
    let url = '',
      data = {};
    if(listParam.listType === 'list') {
      url = '/manage/product/list.do';
      data.pageNum = listParam.pageNum;
    } else {
      url = '/manage/product/search.do';
      data.pageNum = listParam.pageNum;
      data[listParam.searchType] = listParam.searchKeyword;
    }
    return _mm.request({
      type: 'post',
      url,
      data
    })
  }
  // 获取商品详情
  getProduct(productId) {
    return _mm.request({
      type: 'post',
      url: '/manage/product/detail.do',
      data: {
        productId: productId || 0
      }
    })
  }
  // 变更商品销售状态
  setProductStatus(productInfo) {
    return _mm.request({
      type: 'post',
      url: '/manage/product/set_sale_status.do',
      data: productInfo
    })
  }
  // 检查保存商品表单数据
  checkProduct(product) {
    let result = {
      status: true,
      msg: '验证通过'
    };
    if(typeof product.name !== 'string' || product.name.length === 0) {
      return {
        status: false,
        msg: '商品名称不能为空!'
      }
    }
    if(typeof product.subtitle !== 'string' || product.subtitle.length === 0) {
      return {
        status: false,
        msg: '商品描述不能为空!'
      }
    }
    if(typeof product.categoryId !== 'number' || !(product.categoryId > 0)) {
      return {
        status: false,
        msg: '请选择商品分类!'
      }
    }
    if(typeof product.price !== 'number' || !(product.price >= 0)) {
      return {
        status: false,
        msg: '请输入正确的商品价格!'
      }
    }
    if(typeof product.stock !== 'number' || !(product.stock >= 0)) {
      return {
        status: false,
        msg: '请输入正确的库存数量!'
      }
    }
    return result;
  }
  saveProduct(product) {
    return _mm.request({
      type: 'post',
      url: '/manage/product/save.do',
      data: product
    })
  }
  /* 
   * 品类相关
  */
 // 根据父品类id获取品类列表
  getCategoryList(categoryId) {
    return _mm.request({
      type: 'post',
      url: '/manage/category/get_category.do',
      data: {
        categoryId: categoryId || 0
      }
    })
  }
  // 新增
  saveCategory(category) {
    return _mm.request({
      type: 'post',
      url: '/manage/category/add_category.do',
      data: category
    })
  }
  upDateCategoryName({categoryId, categoryName}) {
    return _mm.request({
      url: '/manage/category/set_category_name.do',
      data: {
        categoryId,
        categoryName
      }
    })
  }
}

export default Product;