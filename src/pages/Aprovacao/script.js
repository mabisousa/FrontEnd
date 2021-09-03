export function checkbox(isSelected) {

  const hold = document.getElementById("count");
  const button = document.getElementById("visualizar");
  const buttons = document.getElementById("buttons");
  
  if(!isSelected) { 
    hold.style.width = "26vw";
    button.style.width = "92%";
    buttons.style.visibility = "visible";
    buttons.style.transitionDelay = "1s";
  } else {
    buttons.style.transitionDelay = "0s";
    hold.style.width = "22vw";
    button.style.width = "92%";
    buttons.style.visibility = "hidden";
  }
}
export function closeRequest() {
  const request = document.getElementById("request");
  request.style.visibility = "hidden";
}
export function openRequest(choice) {

  const request = document.getElementById("request");
  request.style.visibility = "visible"; 
}

export function openDescription(isOpened) {
  const description = document.getElementById("descricao");
  
  if(!!isOpened) {
    description.style.width = "0px";
    description.style.visibility = "hidden";
    description.style.transitionDuration = "0"
  } else {
    description.style.visibility = "visible";
    description.style.width = "330px";
  } 
}