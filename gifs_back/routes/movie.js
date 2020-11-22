const router = require('koa-router')()

router.prefix('/movie')

router.get('/', async (ctx, next) => {
    let result = {}
    result.url = "https://www.baidu.com"
    ctx.body = result
})

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

module.exports = router