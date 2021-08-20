/*const openContainerButtons = document.querySelectorAll('[data-modal-target]')
const closeContainerButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openContainerButtons.forEach(button => {
  button.addEventListener('click', () => {
    const container = document.getElementById("container")
    opencontainer(container)
  })
})

overlay.addEventListener('click', () => {
  const containers = document.querySelectorAll('#container.active')
  containers.forEach(container => {
    closecontainer(container)
  })
})

closeContainerButtons.forEach(button => {
  button.addEventListener('click', () => {
    const container = button.closest('#container')
    closecontainer(container)
  })
})

export function openContainer(container) {
  if (container == null) return
  container.classList.add('active')
  overlay.classList.add('active')
}

export function closeContainer(container) {
  if (container == null) return
  container.classList.remove('active')
  overlay.classList.remove('active')
}*/

export function modal() {
    var popup = document.getElementsByClassName("container");
    popup.classList.toggle("show");
  }