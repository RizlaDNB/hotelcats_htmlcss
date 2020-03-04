var body = document.querySelector('body'),
    modalWrapper = document.querySelector('.modal-wrapper'),
    modalBooking = document.querySelector('.modal-booking'),
    modalOverlay = document.querySelector('.modal-overlay'),
    modalOpen = document.getElementsByClassName('modal-open-button'),
    modalClose = document.getElementsByClassName('modal-close-button'),
    modalCloseFilter = document.querySelector('.modal-filter-close-button'),
    modalSuccefful = document.querySelector('.modal-booking-successful'),
    modalSucceffulCloseBtn = document.querySelector('.button-modal-booking-successful'),
    modalSend = document.querySelector('.modal-send-button'),
    catalogueFilterForm = document.querySelector('.section-catalogue-body-filter'),
    catalogueFilterOpenButton = document.querySelector('.button-catalogue-filter'),
    catalogueFilterCloseButton = document.querySelector('.filter-submit-button'),
    form = modalBooking.querySelector('.modal-booking-form'),
    emptyFieldCheck = form.querySelectorAll('.field-checker'),
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
            modalWrapper.classList.add('modal-show');
            modalBooking.classList.add('modal-show');
            modalOverlay.classList.add('modal-show');
            body.classList.add('scroll-lock');
            ownerName.focus();
        })  
};


//Закрытие модалки по крестику
for (var i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', function(evt) {
        evt.preventDefault();
        body.classList.remove('scroll-lock');
        modalBooking.classList.remove('modal-show');
        modalOverlay.classList.remove('modal-show');
        modalSuccefful.classList.remove('modal-show');
        modalWrapper.classList.remove('modal-show');
        catalogueFilterForm.classList.remove('modal-show');
    })  
};


//Закрытие модалки по клику в оверлей
modalOverlay.addEventListener('click', function() {
    body.classList.remove('scroll-lock');
    modalBooking.classList.remove('modal-show');
    modalOverlay.classList.remove('modal-show');
    modalSuccefful.classList.remove('modal-show');
    modalWrapper.classList.remove('modal-show');
    modalCloseFilter.classList.remove('modal-show');
    catalogueFilterForm.classList.remove('modal-show');
});


//Закрытие модалки по клику на кнопку "ОК"
modalSucceffulCloseBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalBooking.classList.remove('modal-show');
    modalOverlay.classList.remove('modal-show');
    modalSuccefful.classList.remove('modal-show');
    modalWrapper.classList.remove('modal-show');
    body.classList.remove('scroll-lock');
});


//Временный функционал отправки формы бронирования
modalSend.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalSuccefful.classList.add('modal-show');
    modalSucceffulCloseBtn.focus();
});

//Открытие фильтра каталога
catalogueFilterOpenButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    catalogueFilterForm.classList.add('modal-show');
    modalCloseFilter.classList.add('modal-show');
    modalOverlay.classList.add('modal-show');
    modalWrapper.classList.add('modal-show');
});

//Закрытие фильтра по крестику
modalCloseFilter.addEventListener('click', function(evt) {
    evt.preventDefault();
    catalogueFilterForm.classList.remove('modal-show');
    modalCloseFilter.classList.remove('modal-show');
    modalOverlay.classList.remove('modal-show');
    modalWrapper.classList.remove('modal-show');
});

catalogueFilterCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    catalogueFilterForm.classList.remove('modal-show');
    modalCloseFilter.classList.remove('modal-show');
    modalOverlay.classList.remove('modal-show');
    modalWrapper.classList.remove('modal-show');
});

//TODO Алерт, в случае если не все поля формы заполнены
// form.addEventListener('submit', function(evt) {
//     evt.preventDefault();
//     for (var i = 0; i < emptyFieldCheck.length; i++) {
//         if (!emptyFieldCheck[i].value) {
//             evt.preventDefault();
//             console.log('field is blank', emptyFieldCheck[i]);
//         }
//         else {
//             evt.preventDefault();
//             modalSuccefful.classList.add('modal-show');
//             modalSucceffulCloseBtn.focus();
//         }
//     }
// });

// email.addEventListener("input", function (event) {
//     if (email.validity.typeMismatch) {
//       email.setCustomValidity("I expect an e-mail, darling!");
//     } else {
//       email.setCustomValidity("");
//     }
// });