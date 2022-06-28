(() => {
    const refs = {
      openModalBtnMob: document.querySelector("[data-franchise-modal-open]"),
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      openModalSuccessBtn: document.querySelector("[data-modal-success-open]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtnMob.addEventListener("click", toggleModal);
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.openModalSuccessBtn.addEventListener("click", toggleModal);
  
    function toggleModal(e) {
      refs.modal.classList.toggle("is-hidden");
      e.preventDefault();
    }
  })();