const tamanhoFonte = (prarameterSize) => {

  if( prarameterSize === "pequeno"){
    document.body.style.fontSize="14px";
    localStorage.setItem("Fontsize", "14px")
  }
  
  if( prarameterSize === "medio"){
    document.body.style.fontSize="16px";
    localStorage.setItem("Fontsize", "16px")
  }

  if( prarameterSize === "grande"){
    document.body.style.fontSize="19px";
    localStorage.setItem("Fontsize", "19px")
  }
  
  console.log(prarameterSize)
  
}

export default tamanhoFonte;

