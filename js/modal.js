var modal = document.querySelector('.modal-booking'),
    modalOverlay = document.querySelector('.modal-overlay'),
    ownerName = document.querySelector('[name=owner-name]'),
    petName = document.querySelector('[name=pet-name]'),
    phoneNumber = document.querySelector('[name=phone-number]'),
    email = document.querySelector('[name=email]'),
    fromDate = document.querySelector('[name=from-date]'),
    toDate = document.querySelector('[name=to-date]'),
    formError = modal.querySelector('form');

$('.modal-open').on('click', function (evt) {
    evt.preventDefault();
    modal.style.display = "block";
    modalOverlay.style.display = "block";
    ownerName.focus();
});

$('.modal-close').on('click', function (evt) {
    evt.preventDefault();
    modal.style.display = "none";
    modalOverlay.style.display = "none";
});

$('form').on('submit', function(evt){
    if (!ownerName || !petName || !phoneNumber || !email || !fromDate || !toDate) {
        evt.preventDefault();
        console.log('Заполните все поля');
    }
});