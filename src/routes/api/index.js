const KoaRouter = require('koa-router');
const jwt = require('koa-jwt');
const auth = require('./auth');
const candidates = require('./candidates');
const { apiSetCurrentUser } = require('../../middlewares/auth');

const router = new KoaRouter({ prefix: '/api' });

router.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err.status) {
      const { status, message } = err;
      ctx.app.emit('error', err, ctx);
      ctx.status = status;
      ctx.body = {
        status,
        message,
      };
    } else {
      throw err;
    }
  }
});

router.get('api.base', '/', async (ctx) => {
  const usersCount = await ctx.orm.user.count();
  ctx.body = {
    message: 'Bienvenidos a la API de la Interrogación del curso IIC2513',
    usersCount,
  };
});

router.use('/auth', auth.routes());

/* Protected routes */

router.use(jwt({ secret: process.env.JWT_SECRET, key: 'authData' }).unless({ method: 'GET' }));
router.use(apiSetCurrentUser);
router.use('/candidates', candidates.routes());

module.exports = router;
