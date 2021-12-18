import Candidates from './candidates';

const rootElem = document.getElementById('root');

if (rootElem) {
  const candidates = new Candidates();
  candidates.render(rootElem);
}
