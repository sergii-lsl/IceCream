(() => {
   const refs = {
     openModalBtn: document.querySelector("[data-product1-modal-open]"),
     closeModalBtn: document.querySelector("[data-product1-modal-close]"),
     modal: document.querySelector("[data-product1-modal]"),
   };
 
   refs.openModalBtn.addEventListener("click", toggleModal);
   refs.closeModalBtn.addEventListener("click", toggleModal);
 
   function toggleModal() {
     refs.modal.classList.toggle("is-hidden");
   //   e.preventDefault();
   }
 })();

(() => {
   const refs = {
     openModalBtn: document.querySelector("[data-product2-modal-open]"),
     closeModalBtn: document.querySelector("[data-product2-modal-close]"),
     modal: document.querySelector("[data-product2-modal]"),
   };
 
   refs.openModalBtn.addEventListener("click", toggleModal);
   refs.closeModalBtn.addEventListener("click", toggleModal);
 
   function toggleModal(e) {
     refs.modal.classList.toggle("is-hidden");
     e.preventDefault();
   }
 })();

(() => {
   const refs = {
     openModalBtn: document.querySelector("[data-product3-modal-open]"),
     closeModalBtn: document.querySelector("[data-product3-modal-close]"),
     modal: document.querySelector("[data-product3-modal]"),
   };
 
   refs.openModalBtn.addEventListener("click", toggleModal);
   refs.closeModalBtn.addEventListener("click", toggleModal);
 
   function toggleModal(e) {
     refs.modal.classList.toggle("is-hidden");
     e.preventDefault();
   }
 })();