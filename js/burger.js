var burgerIcon = document.querySelector('.section-header-burger'),
    header = document.querySelector('.section-header'),
    headerMenu = document.querySelector('.section-header-menu'),
    menuLink = document.getElementsByClassName('section-header-menu__item'),
    body = document.querySelector('body');


//Анимация меню-бургер
burgerIcon.addEventListener('click', function(evt) {
    evt.preventDefault();
    burgerIcon.classList.toggle('section-header-burger-active');
    headerMenu.classList.toggle('section-header-menu-active');
    body.classList.toggle('scroll-lock');
    header.classList.toggle('section-header-active');
});

//Закрытие меню-бургер по клику в ссылку этого меню
for (var i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function() {
        burgerIcon.classList.toggle('section-header-burger-active');
        headerMenu.classList.toggle('section-header-menu-active');
        body.classList.toggle('scroll-lock');
        header.classList.toggle('section-header-active');
    })  
};