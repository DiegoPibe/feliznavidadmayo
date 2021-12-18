const KoaRouter = require('koa-router');

const candidates = require('./routes/candidates');
const index = require('./routes/index');

const router = new KoaRouter();

router.use(async (ctx, next) => {
  ctx.state.paths = {
    index: ctx.router.url('index'),
    candidates: ctx.router.url('candidates'),
    theory: ctx.router.url('theory'),
  };
  ctx.state.path = ctx.path;

  await next();
});

router.use('/', index.routes());
router.use('/candidates', candidates.routes());

module.exports = router;
