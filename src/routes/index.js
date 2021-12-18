const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('index', '/', async (ctx) => {
  await ctx.render('static/index');
});

router.get('theory', 'preguntas-teoricas', async (ctx) => {
  await ctx.render('static/preguntas-teoricas');
});

module.exports = router;
