      let mainNavToggle = document.querySelector('.main-nav__icon');
      let mainNavs = document.querySelectorAll('.main-nav');
           
      


           mainNavToggle.addEventListener('click', function (evt) {
             evt.preventDefault();
             console.log('click') 
             mainNavs[0].classList.toggle('main-nav--closed');
             mainNavs[1].classList.toggle('main-nav--closed');
             mainNavToggle.classList.toggle('main-nav__icon--open')
             mainNavToggle.classList.toggle('main-nav__icon--closed')

             });


           // btnSearch.addEventListener('click', function (evt) {
           //     evt.preventDefault();
           //     console.log('click') 
           //     popupSearch.classList.toggle('modal-form-search-show');
           //     popupSearch.classList.remove('modal-error');
           //     dataArrivel.focus();
           // });