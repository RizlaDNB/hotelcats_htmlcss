var modal = document.querySelector('.modal-booking'),
    modalOverlay = document.querySelector('.modal-overlay'),
    modalOpen = document.getElementsByClassName('modal-open-button'),
    modalClose = document.querySelector('.modal-close-button'),
    modalSuccefful = document.querySelector('.modal-booking-successful'),
    modalSucceffulBtn = document.querySelector('.button-modal-booking-successful'),
    modalSend = document.querySelector('.modal-send-button'), //Убрать позднее
    form = modal.querySelector('form'),
    ownerName = form.querySelector('[name=owner-name]'),
    petName = form.querySelector('[name=pet-name]'),
    phoneNumber = form.querySelector('[name=phone-number]'),
    email = form.querySelector('[name=email]'),
    fromDate = form.querySelector('[name=from-date]'),
    toDate = form.querySelector('[name=to-date]');


//Открытие модального окна с любой кнопки
for (var i = 0; i < modalOpen.length; i++) {
        modalOpen[i].addEventListener('click', function(evt) {
            evt.preventDefault();
            modal.classList.add('modal-show');
            modalOverlay.classList.add('modal-show');
            ownerName.focus();
        })  
};


//Закрытие модалки по крестику
modalClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.remove('modal-show');
    modalOverlay.classList.remove('modal-show');
    modalSuccefful.classList.remove('modal-show');
});


//Закрытие модалки по клику в оверлей
modalOverlay.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.remove('modal-show');
    modalOverlay.classList.remove('modal-show');
    modalSuccefful.classList.remove('modal-show');
});


//Закрытие модалки по клику на кнопку "ОК"
modalSucceffulCloseBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.remove('modal-show');
    modalOverlay.classList.remove('modal-show');
    modalSuccefful.classList.remove('modal-show');
});


//TODO Алерт, в случае если не все поля формы заполнены
form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    console.log('Клик по кнопке');
    console.log('Имя клиента:');
    console.log('Имя питомца:');
    console.log('Телефон:');
    console.log('E-mail:');
    console.log('Дата заезда:');
    console.log('Дата выезда:');
});