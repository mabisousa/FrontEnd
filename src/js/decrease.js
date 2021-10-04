let tamanho = 16;
const diminuir = () => {
  tamanho--;
  document.body.style.fontSize=`${tamanho}pt`;
  console.log(tamanho)
}

export default diminuir;
