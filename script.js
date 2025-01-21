document.addEventListener('DOMContentLoaded', () => {
  const depoimentos = document.getElementById('depoimentos');
  const depoimentosArray = Array.from(depoimentos.children);
  const botaoAvancar = document.getElementById('avancar');
  const botaoVoltar = document.getElementById('voltar');
  const totalDepoimentos = depoimentosArray.length;
  let indiceAtual = 0;

  const atualizarCarrossel = () => {
    const deslocamento = -indiceAtual * 100;
    depoimentos.style.transform = `translateX(${deslocamento}%)`;
    depoimentosArray.forEach(depoimento => depoimento.classList.remove('central'));
    depoimentosArray[indiceAtual].classList.add('central');
  };

  botaoAvancar.addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % totalDepoimentos;
    atualizarCarrossel();
  });

  botaoVoltar.addEventListener('click', () => {
    indiceAtual = (indiceAtual - 1 + totalDepoimentos) % totalDepoimentos;
    atualizarCarrossel();
  });

  atualizarCarrossel();
});
