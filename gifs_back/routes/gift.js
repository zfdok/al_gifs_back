const router = require('koa-router')()

router.prefix('/gift')

router.get('/', async (ctx, next) => {
    let result = {}
    result.data = [
        {
            url: "https://gifcheshen.com",
            src: "https://www.picnew.org/images/2020/11/28/or.png"
        }, {
            url: "https://haizhewang.xyz",
            src: "https://www.picnew.org/images/2020/11/29/7047783e5094d494.gif"
        }, {
            url: "https://github.com/oliverquinn2021/gifsc_back",
            src: "https://www.picnew.org/images/2020/11/27/card1.gif"
        }, {
            url: "https://www.baidu.com",
            src: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2430533811,340641124&fm=26&gp=0.jpg"
        }, {
            url: "https://www.baidu.com",
            src: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2430533811,340641124&fm=26&gp=0.jpg"
        }
    ]
    ctx.body = result
})

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

module.exports = router