
export const Modal = {
  wrapper : document.querySelector('.modal-wrapper'),
  message : document.querySelector('.modal .title span'),
  ButtonClose : document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },

  close () {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.ButtonClose.onclick = () => {
  Modal.close()
}

window.addEventListener('keydown', (event) => {
  if(event.key === 'Escape') {
    Modal.close()
  }
})