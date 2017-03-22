/**
 * Created by zzmhot on 2017/3/21.
 *
 * @author: zzmhot
 * @github: https://github.com/zzmhot
 * @email: zzmhot@163.com
 * @Date: 2017/3/21 12:12
 * @Copyright(©) 2017 by zzmhot.
 *
 */

var mock = require('../../mock/book')

module.exports = function (apiRouter) {
  apiRouter.get("/book/list", function (req, res) {
    res.json(mock.list)
  });
}
