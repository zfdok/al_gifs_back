const router = require("koa-router")();
const { query } = require("../mysql/query"); //引入异步查询方法
const { QUERY_DATAS, DATAS_COUNT, QUERY_DATA_BY_ID, UPDATE_DATA, QUERY_DATA_BY_ID_IN_RANGE, INSERT_DATAS } = require("../mysql/sql"); //部分引入sql库

router.prefix('/sql')

//获取所有文章数量
router.get("/articals_total_count", async (ctx, next) => {
  let query_res = await query(DATAS_COUNT("articals"));//异步方法调用
  console.log(query_res);
  ctx.body = query_res;
});

//获取所有文章
router.get("/get_all_articals", async (ctx, next) => {
  let query_res = await query(QUERY_DATAS("articals"));//异步方法调用
  ctx.body = query_res;
});

//获取按id范围获取文章
router.get("/get_some_articals", async (ctx, next) => {
  let query_articals_count = await query(DATAS_COUNT("articals"));
  let articals_count = query_articals_count[0]['COUNT(*)'];
  let from = articals_count - ctx.query.to
  let to = articals_count - ctx.query.from
  from = from > 0 ? from : 0;
  to = to > 0 ? to : 0;
  console.log("from:" + from);
  console.log("to:" + to);
  let query_res = await query(QUERY_DATA_BY_ID_IN_RANGE("articals", from, to));//异步方法调用
  ctx.body = query_res;
});

//获取某篇文章
router.get("/get_an_artical", async (ctx, next) => {
  let id = ctx.query.id
  let query_res = await query(DATAS_COUNT("articals"));//异步方法调用
  let total = query_res[0]['COUNT(*)'];
  let result = {}
  if (total < id) {
    result.code = -1
    result.msg = "out of range"
    result.status = "fail"
  } else {
    let query_res = await query(QUERY_DATA_BY_ID("articals", id));//异步方法调用
    result.code = 0
    result.msg = "get done!"
    result.status = "success"
    result.title = query_res[0].title
    result.created_time = query_res[0].created_time
    result.content = JSON.parse(query_res[0].gifs_src)
    result.readcount = ++query_res[0].readcount
    query(UPDATE_DATA("articals", id, "readcount", result.readcount));//异步方法调用
  }
  ctx.body = result;
});

router.get("/set_an_artical", async (ctx, next) => {
  let recive = ctx.query;
  let atricaldatas = {
    count: 5,
    data: [
      {
        url: recive.i1_img,
        desc: recive.i1_desc,
        secret_code: recive.i1_code
      },
      {
        url: recive.i2_img,
        desc: recive.i2_desc,
        secret_code: recive.i2_code
      },
      {
        url: recive.i3_img,
        desc: recive.i3_desc,
        secret_code: recive.i3_code
      },
      {
        url: recive.i4_img,
        desc: recive.i4_desc,
        secret_code: recive.i4_code
      },
      {
        url: recive.i5_img,
        desc: recive.i5_desc,
        secret_code: recive.i5_code
      }
    ]
  }
  // console.log(JSON.stringify(atricaldatas));
  let values = `0,now(),'${recive.name}','${JSON.stringify(atricaldatas)}',1,'${recive.i1_img}'`
  console.log(values);
  let query_res = await query(INSERT_DATAS("articals", values))
  ctx.body = query_res
})
module.exports = router;