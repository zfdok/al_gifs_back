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
    result.version = "V1.0.0"
    result.updateURL = "https://github.com/oliverquinn2021/gifsc_back"
    result.message = "😊本app为非商业软件,永久完全免费,但需要您到分享才能维持. \r\n😊如果您有更好的资源请联系我: oliverquinn2021@gmail.com \r\n🚢🚢GIF车神导航🚢🚢\r\n最新地址:http://gifcheshen.com\r\n💗💗海蜇王资源网💗💗\r\n最新地址:http://haizhewang.xyz"
    result.pic_ad = [
        { url: "https://gifcheshen.com", src: "https://www.picnew.org/images/2020/11/28/or.png" },
        { url: "http://haizhewang.xyz", src: "https://www.picnew.org/images/2020/11/29/7047783e5094d494.gif" },
    ]
    ctx.body = result
})

module.exports = router