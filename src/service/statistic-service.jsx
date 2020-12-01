/*
 * @Author: sunzhongjie
 * @Date: 2020-11-24 22:03:52
 * @LastEditors: Jelly
 * @LastEditTime: 2020-11-25 22:26:57
 */
import MUtil from 'util/mm.jsx'

const _mm = new MUtil();

class Statistic {
  // 首页数据统计
  getHomeCount() {
    return _mm.request({
      url: '/manage/statistic/base_count.do'
    })
  }
}

export default Statistic;