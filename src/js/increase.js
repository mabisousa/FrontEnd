const increse = (prarameterSize) => {
  let size = parseInt(prarameterSize);  
  size++;
  document.body.style.fontSize=`${size}px`;
  console.log(size)
  localStorage.setItem("Fontsize", `${size}px`)
}

export default increse;

