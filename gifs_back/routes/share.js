const router = require('koa-router')()
const { query } = require("../mysql/query"); //引入异步查询方法
const { INSERT_DATAS } = require("../mysql/sql"); //部分引入sql库

router.prefix('/share')

router.get('/', async (ctx, next) => {
    ctx.body = "最邪呃的动态图gif导航站:\r\n👉👉👉👉GIF车神站👈👈👈👈\r\n🌹https://t6p.cn/3cc2🌹\r\ngif出处,福利动图,完全免费"
})

module.exports = router