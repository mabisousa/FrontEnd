
const decrease= (prarameterSize) => {
  
  let size = parseInt(prarameterSize);  
  size--;
  document.body.style.fontSize=`${size}px`;
  console.log(size)
}

export default decrease;
