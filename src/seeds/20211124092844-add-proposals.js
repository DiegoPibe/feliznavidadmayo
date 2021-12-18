const { QueryTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    const proposalsArray = [];

    const commonData = {
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    async function findCandidateIdByName(name) {
      const candidates = await queryInterface.sequelize.query(
        'SELECT "id" FROM "candidates" WHERE "candidates"."name" = ?',
        {
          replacements: [name],
          type: QueryTypes.SELECT,
        },
      );

      const [candidateId] = candidates.map(({ id }) => id);
      return candidateId;
    }

    let candidateId = await findCandidateIdByName('Gabriel Boric');

    if (candidateId) {
      proposalsArray.push({
        topic: 'Salud',
        content: 'En relación a salud, Gabriel Boric propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Pensiones',
        content: 'En relación a pensiones, Gabriel Boric propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Educación',
        content: 'En relación a educación, Gabriel Boric propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Economía',
        content: 'En relación a economía, Gabriel Boric propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Crisis climática',
        content: 'En relación a crisis climática, Gabriel Boric propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Derechos de la mujer',
        content: 'En relación a derechos de la mujer, Gabriel Boric propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });
    }

    candidateId = await findCandidateIdByName('Sebastián Sichel');

    if (candidateId) {
      proposalsArray.push({
        topic: 'Salud',
        content: 'En relación a salud, Sebastián Sichel propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Pensiones',
        content: 'En relación a pensiones, Sebastián Sichel propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Educación',
        content: 'En relación a educación, Sebastián Sichel propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Economía',
        content: 'En relación a economía, Sebastián Sichel propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Crisis climática',
        content: 'En relación a crisis climática, Sebastián Sichel propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Derechos de la mujer',
        content: 'En relación a derechos de la mujer, Sebastián Sichel propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });
    }

    candidateId = await findCandidateIdByName('Yasna Provoste');

    if (candidateId) {
      proposalsArray.push({
        topic: 'Salud',
        content: 'En relación a salud, Yasna Provoste propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Pensiones',
        content: 'En relación a pensiones, Yasna Provoste propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Educación',
        content: 'En relación a educación, Yasna Provoste propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Economía',
        content: 'En relación a economía, Yasna Provoste propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Crisis climática',
        content: 'En relación a crisis climática, Yasna Provoste propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Derechos de la mujer',
        content: 'En relación a derechos de la mujer, Yasna Provoste propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });
    }

    candidateId = await findCandidateIdByName('José Antonio Kast');

    if (candidateId) {
      proposalsArray.push({
        topic: 'Salud',
        content: 'En relación a salud, José Antonio Kast propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Pensiones',
        content: 'En relación a pensiones, José Antonio Kast propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Educación',
        content: 'En relación a educación, José Antonio Kast propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Economía',
        content: 'En relación a economía, José Antonio Kast propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Crisis climática',
        content: 'En relación a crisis climática, José Antonio Kast propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Derechos de la mujer',
        content: 'En relación a derechos de la mujer, José Antonio Kast propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });
    }

    candidateId = await findCandidateIdByName('Marco Enríquez Ominami');

    if (candidateId) {
      proposalsArray.push({
        topic: 'Salud',
        content: 'En relación a salud, Marco Enríquez Ominami propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Pensiones',
        content: 'En relación a pensiones, Marco Enríquez Ominami propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Educación',
        content: 'En relación a educación, Marco Enríquez Ominami propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Economía',
        content: 'En relación a economía, Marco Enríquez Ominami propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Crisis climática',
        content: 'En relación a crisis climática, Marco Enríquez Ominami propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Derechos de la mujer',
        content: 'En relación a derechos de la mujer, Marco Enríquez Ominami propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });
    }

    candidateId = await findCandidateIdByName('Eduardo Artés');

    if (candidateId) {
      proposalsArray.push({
        topic: 'Salud',
        content: 'En relación a salud, Eduardo Artés propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Pensiones',
        content: 'En relación a pensiones, Eduardo Artés propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Educación',
        content: 'En relación a educación, Eduardo Artés propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Economía',
        content: 'En relación a economía, Eduardo Artés propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Crisis climática',
        content: 'En relación a crisis climática, Eduardo Artés propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Derechos de la mujer',
        content: 'En relación a derechos de la mujer, Eduardo Artés propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });
    }

    candidateId = await findCandidateIdByName('Franco Parisi');

    if (candidateId) {
      proposalsArray.push({
        topic: 'Salud',
        content: 'En relación a salud, Franco Parisi propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Pensiones',
        content: 'En relación a pensiones, Franco Parisi propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Educación',
        content: 'En relación a educación, Franco Parisi propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Economía',
        content: 'En relación a economía, Franco Parisi propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Crisis climática',
        content: 'En relación a crisis climática, Franco Parisi propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });

      proposalsArray.push({
        topic: 'Derechos de la mujer',
        content: 'En relación a derechos de la mujer, Franco Parisi propone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum arcu, convallis cursus orci. Phasellus pulvinar cursus leo sit amet ullamcorper. Morbi placerat libero et ipsum pretium, ac imperdiet justo vehicula.',
        candidateId,
      });
    }

    await queryInterface.bulkInsert(
      'proposals',
      proposalsArray.map((proposal) => ({ ...proposal, ...commonData })),
    );
  },
  down: (queryInterface) => queryInterface.bulkDelete('proposals', null),
};
