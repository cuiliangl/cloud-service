/**
 * @file login
 * @author cuiliang
 * @since 2020.01.15
 */

const Mock = require('mockjs')
const router = require('koa-router')()

router.post('login.json', async ctx => {
  const data = Mock.mock({
    head: {
      code: '0',
      msg: 'success'
    },
    body: {
      url: 'http://www.baidu.com'
    }
  })

  ctx.body = data
})

module.exports = router
