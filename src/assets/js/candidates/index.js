import renderer from './renderer';

class Candidates {
  constructor() {
    this.candidates = [];
    this.error = null;
    this.loading = true;
    this.fetchList = this.fetchList.bind(this);
    this.render = this.render.bind(this);
  }

  async fetchList() {
    try {
      const response = await fetch('/api/candidates');
      if (!response.ok) {
        throw new Error('Hubo un error al intentar obtener los datos de los candidatos');
      }
      this.candidates = await response.json();
    } catch (error) {
      this.error = error;
    } finally {
      this.loading = false;
    }
  }

  render(domNode) {
    renderer.render(domNode, this.candidates, this.loading, this.error);
    this.fetchList().then(() => {
      renderer.render(domNode, this.candidates, this.loading, this.error);
    });
  }
}

export default Candidates;
