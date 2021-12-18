const KoaRouter = require('koa-router');

const router = new KoaRouter();

// LISTA DE CANDIDATOS

router.get('api.candidates.list', '/', async (ctx) => {
  const Candidates = await ctx.orm.candidate.findAll();
  const hoy = new Date();
  for (let i = 0; i < Candidates.length; i += 1) {
    const nacimiento = new Date(Candidates[i].birthdate);
    if (hoy.getMonth() > nacimiento.getMonth()) {
      Candidates[i].dataValues.years = hoy.getFullYear() - nacimiento.getFullYear();
    } else if (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() > nacimiento.getDate()) {
      Candidates[i].dataValues.years = hoy.getFullYear() - nacimiento.getFullYear();
    } else {
      Candidates[i].dataValues.years = hoy.getFullYear() - nacimiento.getFullYear() - 1;
    }
  }
  ctx.body = Candidates;
});

// PROGRAMA DE CANDIDATOS

router.param('id', async (id, ctx, next) => {
  ctx.state.candidate = await ctx.orm.candidate.findByPk(id);
  if (!ctx.state.candidate) {
    return ctx.throw(404, 'Error 404: El candidato seleccionado no existe.');
  }
  return next();
});

router.get('api.candidates.show', '/:id/proposals', async (ctx) => {
  const { candidate } = ctx.state;
  const Proposals = await ctx.orm.proposal.findAll();
  const proposalscandidate = [];
  for (let i = 0; i < Proposals.length; i += 1) {
    if (Proposals[i].candidateId === candidate.id) {
      const proposalcandidate = { topic: Proposals[i].topic };
      // REVISAR DESPUES !!!
      // eslint-disable-next-line
      proposalcandidate.candidateLastName = candidate.name.split(' ').reverse()[0];
      const creacion = new Date(Proposals[i].createdAt);
      if (creacion.getDate() >= 11 && creacion.getDate() <= 13) {
        // REVISAR DESPUES !!!
        // eslint-disable-next-line
        proposalcandidate.createdAt = `${creacion.toLocaleString('default', { month: 'long' })} ${creacion.getDate()}th` + `, ${creacion.getFullYear()}`;
      } else if (creacion.getDate() % 10 === 1) {
        // REVISAR DESPUES !!!
        // eslint-disable-next-line
        proposalcandidate.createdAt = `${creacion.toLocaleString('default', { month: 'long' })} ${creacion.getDate()}st` + `, ${creacion.getFullYear()}`;
      } else if (creacion.getDate() % 10 === 2) {
        // REVISAR DESPUES !!!
        // eslint-disable-next-line
        proposalcandidate.createdAt = `${creacion.toLocaleString('default', { month: 'long' })} ${creacion.getDate()}nd` + `, ${creacion.getFullYear()}`;
      } else if (creacion.getDate() % 10 === 3) {
        // REVISAR DESPUES !!!
        // eslint-disable-next-line
        proposalcandidate.createdAt = `${creacion.toLocaleString('default', { month: 'long' })} ${creacion.getDate()}rd` + `, ${creacion.getFullYear()}`;
      } else {
        // REVISAR DESPUES !!!
        // eslint-disable-next-line
        proposalcandidate.createdAt = `${creacion.toLocaleString('default', { month: 'long' })} ${creacion.getDate()}th` + `, ${creacion.getFullYear()}`;
      }
      proposalscandidate.push(proposalcandidate);
    }
  }
  ctx.body = proposalscandidate;
});

// ACCION SOBRE CANDIDATOS

router.patch('api.candidates.edit', '/:id', async (ctx) => {
  try {
    const { candidate } = ctx.state;
    const params = ctx.request.body;
    if (params.description === undefined) {
      ctx.status = 400;
      ctx.throw(400, 'Error 400: Bad request');
    } else if (params.description === '') {
      ctx.status = 422;
      ctx.throw(422, 'Error 422: Unprocessable entity');
    } else {
      await candidate.update(params, { fields: ['description'] });
      ctx.body = candidate;
      ctx.status = 200;
    }
  } catch (ValidationError) {
    if (ctx.status === 400) {
      ctx.throw(400, 'Error 400: El campo seleccionado no esta sujeto a cambios.');
    } else if (ctx.status === 422) {
      ctx.throw(422, 'Error 422: Los datos ingresados son incorrectos.');
    } else {
      ctx.throw(404, 'Error 404: El candidato seleccionado no existe.');
    }
  }
});

module.exports = router;
