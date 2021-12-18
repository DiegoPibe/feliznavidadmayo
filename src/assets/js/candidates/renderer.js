function render(domNode, candidates, loading, error) {
  domNode.innerHTML = ''; // eslint-disable-line no-param-reassign
  if (loading) {
    const loadingElem = document.createElement('span');
    loadingElem.textContent = 'Cargando...';
    domNode.appendChild(loadingElem);
    return;
  }

  if (error) {
    const errorElem = document.createElement('span');
    errorElem.textContent = error;
    domNode.appendChild(errorElem);
    return;
  }

  const listElem = document.createElement('div');
  listElem.classList.add('candidates-container');
  candidates.forEach((candidate) => {
    const article = document.createElement('article');
    article.classList.add('candidate-item');

    const title = document.createElement('h2');
    title.textContent = candidate.name;

    const subtitle = document.createElement('span');
    const party = document.createElement('strong');
    party.textContent = candidate.party;
    const years = document.createElement('em');
    years.textContent = `, ${candidate.years} años`;
    subtitle.appendChild(party);
    subtitle.appendChild(years);

    const description = document.createElement('p');
    description.textContent = candidate.description;

    const photo = document.createElement('img');
    photo.setAttribute('src', candidate.photo);

    const votes = document.createElement('span');
    votes.classList.add('votes');
    votes.textContent = `${candidate.votes} votos`;

    article.appendChild(title);
    article.appendChild(subtitle);
    article.appendChild(description);
    article.appendChild(photo);
    article.appendChild(votes);

    listElem.appendChild(article);
  });
  domNode.appendChild(listElem);
}

export default {
  render,
};
