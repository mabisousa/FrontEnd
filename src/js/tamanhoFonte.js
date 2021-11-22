const tamanhoFonte = (tamanho) => {

  if( tamanho === "pequeno"){
    document.body.style.fontSize="14px";
    localStorage.setItem("Fontsize", "14px")
  }
  
  if( tamanho === "medio"){
    document.body.style.fontSize="16px";
    localStorage.setItem("Fontsize", "16px")
  }

  if( tamanho === "grande"){
    document.body.style.fontSize="18px";
    localStorage.setItem("Fontsize", "18px")
  }
  
  console.log(tamanho)
  
}

export default tamanhoFonte;

