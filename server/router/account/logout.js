/**
 * @file logout
 * @author cuiliang
 * @since 2020.01.15
 */

const Mock = require('mockjs')
const router = require('koa-router')()

router.post('logout.json', async ctx => {
  const data = await new Promise(resolve => {
    setTimeout(() => {
      const data = Mock.mock({
        head: {
          code: '0',
          msg: 'success'
        },
        'body|5': [{
          'key|+1': 1,
          'mockTitle|1': ['春风得意马蹄疾', '一日看尽长安花'],
          'mockContent|1': ['待到山花烂漫时', '她在丛中笑']
        }]
      })
      resolve(data)
    }, 2000)
  })

  ctx.body = data
})

module.exports = router
