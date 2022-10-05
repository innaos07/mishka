let btnOrders = document.querySelectorAll('.btn__order');
let modalSize = document.querySelector('.modal-size');
let modalIndicator = document.querySelector('[name=size]');
let modalClose = document.querySelector('.modal-size__icon');


    for (let btnOrder of btnOrders) {
       btnOrder.addEventListener('click', function (evt) {
            evt.preventDefault();
            modalSize.classList.toggle('modal-size--open');
            modalIndicator.focus();
       });
    }

    modalClose.addEventListener('click', function (evt) {
        evt.preventDefault();
        modalSize.classList.remove('modal-size--open');

    });
    
    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault(); 

            if (modalSize.classList.contains('modal-size--open')){
               modalSize.classList.remove('modal-size--open');
            }
        }
    });
