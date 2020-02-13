var modal = document.querySelector('.modal-booking'),
    modalOverlay = document.querySelector('.modal-overlay'),
    modalOpen = document.getElementsByClassName('modal-open-button'),
    modalClose = document.querySelector('.modal-close-button'),
    modalSuccefful = document.querySelector('.modal-booking-successful'),
    modalSucceffulCloseBtn = document.querySelector('.button-modal-booking-successful'),
    modalSend = document.querySelector('.modal-send-button'),
    form = modal.querySelector('.modal-booking-form'),
    emptyFieldCheck = modal.querySelectorAll('.field-checker'),
    ownerName = form.querySelector('[name=owner-name]'),
    petName = form.querySelector('[name=pet-name]'),
    phoneNumber = form.querySelector('[name=phone-number]'),
    email = form.querySelector('[name=e-mail]'),
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
// form.addEventListener('submit', function(evt) {
//     evt.preventDefault();
    
//     var errors = form.querySelectorAll('.error');

//     for (var i = 0; i < errors.length; i++) {
//         errors[i].remove();
//     }

//     for (var i = 0; i < emptyFieldCheck.length; i++) {
//         if (!emptyFieldCheck[i].value) {
//             console.log('field is blank', emptyFieldCheck[i]);
//             var error = document.createElement('div');
//             error.className = 'error';
//             error.style.color = 'red';
//             error.innerHTML = 'Cannot be blank';
//             form[i].parentElement.insertBefore(error, emptyFieldCheck[i]);
//         }
//     }
// });