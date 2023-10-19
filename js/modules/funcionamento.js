export default function initFuncionamento() {
  
}

const agora = new Date();
const futuro = new Date('Dec 18 2023 23:59');

function transformarDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000);
}

console.log(transformarDias(agora.getTime()));
