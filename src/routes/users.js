const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/login', async (ctx, next) => {
  /* ctx.request.body 获取请求参数 */
  const { username, password } = ctx.request.body

  ctx.body = {
    username,
    password
  }
})

module.exports = router
