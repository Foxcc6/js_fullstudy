const router = require('koa-router')()
const userService = require('../controllers/mysqlConfig')

router.prefix('/users')



router.get('/all',async function(ctx,next){
  await userService.getAllUsers().then((res)=>{
    ctx.body = res
  })
})

//登录注册
router.post('/userRegister',async(ctx,next) =>{
  var _username = ctx.request.body._username
  var _userpwd = ctx.request.body._userpwd
  var _nickname = ctx.request.body._nickname
})

module.exports = router
