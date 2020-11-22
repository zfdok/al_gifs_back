const router = require('koa-router')()
const { query } = require("../mysql/query"); //引入异步查询方法
const { INSERT_DATAS } = require("../mysql/sql"); //部分引入sql库

router.prefix('/login')

router.get('/', async (ctx, next) => {
    let login_ip = (ctx.req.socket.remoteAddress).split(':').pop();
    let values = `0,now(),"${login_ip}","default"`
    query(INSERT_DATAS("access_log", values))
    ctx.body = {
        code: 0,
        msg: "OK"
    }
})

router.get('/version', async (ctx, next) => {
    let result = {}
    result.version = "V0.0.1"
    result.updateURL = "https://www.lanzou.com/"
    result.message = "😊本app为非商业软件,永久完全免费,不接受资助和打赏,但希望您能分享给身边的朋友. \r\n😊本软件仅供交流学习之用,请勿应用于任何商业用途!\r\n😊如果您有更好的资源请联系我:\r\n😠如果您是中国大陆用户,请您立即离开\r\n😊如果您有更好的资源请联系我: http://wwww.baidu.com \r\n"
    result.pic_ad = [
        { url: "http://wwww.baidu.com", src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605806271744&di=f812a7d4839cc61193b48f5c0686c945&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F46%2F73%2F66%2F57205d43d534d.jpg" },
        { url: "http://wwww.baidu.com", src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605806271744&di=f812a7d4839cc61193b48f5c0686c945&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F46%2F73%2F66%2F57205d43d534d.jpg" },
    ]
    ctx.body = result
})


module.exports = router