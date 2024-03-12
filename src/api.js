import receitas from './receitas.json';

const obterReceitas = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(receitas);
    }, 1000);
  });
};

export default obterReceitas;
