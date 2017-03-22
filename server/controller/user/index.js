/**
 * Created by zzmhot on 2017/3/21.
 *
 * @author: zzmhot
 * @github: https://github.com/zzmhot
 * @email: zzmhot@163.com
 * @Date: 2017/3/21 10:50
 * @Copyright(©) 2017 by zzmhot.
 *
 */
var mock = require('../../mock/user')

module.exports = function (apiRouter) {
  apiRouter.get("/hello", function (req, res) {
    res.json(mock.info)
  });
}
