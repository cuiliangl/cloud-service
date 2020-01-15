/**
 * @file account
 * @author cuiliang
 * @since 2020.01.15
 */

const router = require('koa-router')()
const login = require('./login')
const logout = require('./logout')

const routes = [
  login,
  logout
]

const baseUrl = '/account/'

routes.forEach(route => {
  router.use(baseUrl, route.routes())
})

module.exports = router
