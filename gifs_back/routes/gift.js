const router = require('koa-router')()

router.prefix('/gift')

router.get('/', async (ctx, next) => {
    let result = {}
    result.data = [
        {
            url: "https://www.baidu.com",
            src: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2430533811,340641124&fm=26&gp=0.jpg"
        },
        {
            url: "https://www.baidu.com",
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605938032124&di=68009ff7d716b2ee603903ce54863016&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F08%2F20161008174717_TNBeC.png"
        }, {
            url: "https://www.baidu.com",
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605938032123&di=ac2a21f4cf9caa4d1ce8166de3303166&imgtype=0&src=http%3A%2F%2Fpic115.nipic.com%2Ffile%2F20161114%2F3775745_181311216490_2.jpg"
        }, {
            url: "https://www.baidu.com",
            src: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2430533811,340641124&fm=26&gp=0.jpg"
        }, {
            url: "https://www.baidu.com",
            src: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2430533811,340641124&fm=26&gp=0.jpg"
        }, {
            url: "https://www.baidu.com",
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605939569996&di=91123bc7b8e8214358e7a1562308579c&imgtype=0&src=http%3A%2F%2Fpic141.nipic.com%2Ffile%2F20170924%2F765038_204728490034_2.jpg"
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