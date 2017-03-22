/**
 * Created by zzmhot on 2017/3/21.
 *
 * @author: zzmhot
 * @github: https://github.com/zzmhot
 * @email: zzmhot@163.com
 * @Date: 2017/3/21 12:06
 * @Copyright(©) 2017 by zzmhot.
 *
 */

var Mock = require('mockjs')

exports.list = Mock.mock({
  code: 1,
  msg: '获取成功',
  'data|5-20': [{
    'id|1-100': 2,
    title: '@ctitle',
    time: "@datetime('yyyy-MM-dd')",
    class: '@csentence(3,6)',
    img: '@image("200x100")'
  }]
})
