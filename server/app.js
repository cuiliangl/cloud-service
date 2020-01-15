const Koa = require('koa2')
const router = require('./router')
const cors = require('koa2-cors')

const app = new Koa()

// 需手动设置为true
app.use(cors({
  credentials: true
}))

// 注册启动路由
router.forEach(route => {
  app.use(route.routes(), route.allowedMethods())
})

app.listen(3000, err => {
  if (err) throw err
  console.log('runing...')
})
