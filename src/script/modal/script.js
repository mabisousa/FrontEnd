export function openModal() {
  var popup = document.getElementById("container");
  popup.style.display = "block";
  var overlay = document.getElementById("overlay");
  overlay.style.opacity = 1;
  overlay.style.pointerEvents = "all";
}

export function closeModal(){
  var popup = document.getElementById("container");
  popup.style.display = "none";
  var overlay = document.getElementById("overlay");
  overlay.style.opacity = 0;
  overlay.style.pointerEvents = "all";
}