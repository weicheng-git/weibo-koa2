const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/profile/:username', async (ctx, next) => {
  const { username } = ctx.params
  ctx.body = {
    title: 'This is profile page',
    username
  }
})

router.get('/load-more/:username/:page', async (ctx, next) => {
  const { username, page } = ctx.params
  ctx.body = {
    title: 'This is loadMore API',
    username,
    page
  }
})

module.exports = router
