/**
 * Created by zzmhot on 2017/3/21.
 *
 * @author: zzmhot
 * @github: https://github.com/zzmhot
 * @email: zzmhot@163.com
 * @Date: 2017/3/21 10:55
 * @Copyright(©) 2017 by zzmhot.
 *
 */

var Mock = require('mockjs')

exports.login = Mock.mock({
  code: 1,
  msg: "获取成功",
  'data|10-100': [{
    'id|1-100': 1,
    'name': '@cname',
    'city': '@county(true)'
  }]
})
exports.info = Mock.mock({
  code: 1,
  msg: "获取成功",
  'data|10-100': [{
    'id|1-100': 1,
    'name': '@cname',
    'city': '@county(true)'
  }]
})
