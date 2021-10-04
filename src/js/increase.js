let tamanho = 16;
const aumentar = () => {
    tamanho++;
    document.getElementById("name").style.fontSize=`${tamanho}pt`;
    console.log(tamanho)
  }
  
  export default aumentar;