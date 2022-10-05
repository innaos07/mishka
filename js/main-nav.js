let mainNavToggle = document.querySelector('.main-nav__icon');
let mainNavs = document.querySelectorAll('.main-nav');
           

    mainNavToggle.addEventListener('click', function (evt) {
        evt.preventDefault();
        for (let item of mainNavs) {
            item.classList.toggle('main-nav--closed');
        }
        mainNavToggle.classList.toggle('main-nav__icon--open')
        mainNavToggle.classList.toggle('main-nav__icon--closed')
    });