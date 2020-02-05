var modal = document.querySelector('.modal-booking'),
    modalOverlay = document.querySelector('.modal-overlay'),
    modalOpen = document.getElementsByClassName('modal-open-button'),
    modalClose = document.querySelector('.modal-close-button'),
    ownerName = document.querySelector('[name=owner-name]'),
    petName = document.querySelector('[name=pet-name]'),
    phoneNumber = document.querySelector('[name=phone-number]'),
    email = document.querySelector('[name=email]'),
    fromDate = document.querySelector('[name=from-date]'),
    toDate = document.querySelector('[name=to-date]'),
    formError = modal.querySelector('form');

//Открытие модального окна с любой кнопки
for (var i = 0; i < modalOpen.length; i++) {
        modalOpen[i].addEventListener('click', function(evt) {
            evt.preventDefault();
            modal.classList.add('modal-show');
            modalOverlay.classList.add('modal-show');
            ownerName.focus();
        })  
};

//Закрытие модалки по кнопке
modalClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.remove('modal-show');
    modalOverlay.classList.remove('modal-show');
});

//Закрытие модалки по клику в любую область, кроме модалки
modalOverlay.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.remove('modal-show');
    modalOverlay.classList.remove('modal-show');
});

//TODO Алерт, в случае если ничего не введено в форму
formError.addEventListener('submit', function(evt) {
    if (!ownerName || !petName || !phoneNumber || !email || !fromDate || !toDate) {
        evt.preventDefault();
        console.log('Заполните все поля');
    }
});