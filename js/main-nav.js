      let mainNavToggle = document.querySelector('.main-nav__icon');
      let mainNav = document.querySelector('.main-nav');
           
      


           mainNavToggle.addEventListener('click', function (evt) {
             evt.preventDefault();
             console.log('click') 
             mainNav.classList.toggle('main-nav--closed');
             });


           // btnSearch.addEventListener('click', function (evt) {
           //     evt.preventDefault();
           //     console.log('click') 
           //     popupSearch.classList.toggle('modal-form-search-show');
           //     popupSearch.classList.remove('modal-error');
           //     dataArrivel.focus();
           // });