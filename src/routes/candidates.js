const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('candidates', '/', async (ctx) => {
  await ctx.render('candidates/index');
});

module.exports = router;
