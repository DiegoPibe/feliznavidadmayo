module.exports = {
  up: async (queryInterface) => {
    const candidatesArray = [
      {
        name: 'Gabriel Boric',
        party: 'Apruebo Dignidad',
        birthdate: '1986-02-11',
        photo: 'https://pbs.twimg.com/profile_images/1451665633259753477/-NVkukeB_400x400.jpg',
        description: 'Político chileno, que actualmente ejerce como diputado por la Región de Magallanes y de la Antártica Chilena. Tras ganar en las primarias presidenciales del 18 de julio de 2021, Gabriel Boric se convirtió en el candidato presidencial de la coalición Apruebo Dignidad para la elección presidencial de 2021',
      },
      {
        name: 'Sebastián Sichel',
        party: 'Chile Podemos +',
        birthdate: '1977-07-30',
        photo: 'https://info-electoral.cl/wp-content/uploads/2021/09/sichel.jpg',
        description: 'Abogado y expolítico chileno. Es el candidato de Chile Vamos a la elección presidencial de noviembre de 2021, tras ganar la primaria de su coalición realizada el 18 de julio de ese año.',
      },
      {
        name: 'Yasna Provoste',
        party: 'Nuevo Pacto Social',
        birthdate: '1969-12-16',
        photo: 'https://www.maray.cl/wp-content/uploads/2020/09/unnamed.jpg',
        description: 'Profesora de educación física y política democratacristiana chilena de ascendencia diaguita. Es la candidata de la coalición de centroizquierda Nuevo Pacto Social a la elección presidencial de noviembre de 2021.',
      },
      {
        name: 'José Antonio Kast',
        party: 'Frente Social Cristiano',
        birthdate: '1966-01-18',
        photo: 'https://info-electoral.cl/wp-content/uploads/2021/09/kast.jpg',
        description: 'Abogado y político chileno de ascendencia alemana,3 líder del Partido Republicano, exdiputado y candidato presidencial en las elecciones de 2017 y de 2021.',
      },
      {
        name: 'Marco Enríquez Ominami',
        party: 'Partido Progresista',
        birthdate: '1973-06-12',
        photo: 'https://www.progresistas.cl/wp-content/uploads/2018/08/Marco-perfil-300x300.jpg',
        description: 'También conocido debido a sus iniciales ME-O, es un cineasta y político franco-chileno. En 2010 fundó el Partido Progresista, su consejo federal lo proclamó unánimemente en julio de 2013 candidato a las presidenciales de fines de año, donde obtuvo nuevamente la tercera mayoría.',
      },
      {
        name: 'Eduardo Artés',
        party: 'Unión Patriótica',
        birthdate: '1951-10-25',
        photo: 'https://info-electoral.cl/wp-content/uploads/2021/10/artes.jpg',
        description: 'Profesor de educación general básica y dirigente social chileno de ideología antirrevisionista, que ejerce como secretario general del Partido Comunista Chileno (Acción Proletaria), y presidente de Unión Patriótica. Fue candidato presidencial por dicha colectividad durante la elección presidencial de 2017 y de 2021',
      },
      {
        name: 'Franco Parisi',
        party: 'Partido de la Gente',
        birthdate: '1967-08-25',
        photo: 'https://pbs.twimg.com/profile_images/859590998325948416/6HAih9Vj.jpg',
        description: 'Ingeniero comercial y político chileno.2 Es uno de los fundadores y actual líder del Partido de la Gente, y candidato presidencial en las elecciones de 2013 y de 2021. Distintos medios, expertos y periodistas lo han definido como populista y de derecha política.',
      },
    ];

    const commonData = {
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await queryInterface.bulkInsert(
      'candidates',
      candidatesArray.map((candidate) => ({ ...candidate, ...commonData })),
    );
  },
  down: (queryInterface) => queryInterface.bulkDelete('candidates', null),
};
