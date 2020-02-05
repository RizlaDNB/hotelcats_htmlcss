var modal = document.querySelector('.modal-booking'),
    modalOverlay = document.querySelector('.modal-overlay');

$('.modal-open').on('click', function (evt) {
    evt.preventDefault();
    modal.style.display = "block";
    modalOverlay.style.display = "block";
});

$('.modal-close').on('click', function (evt) {
    evt.preventDefault();
    modal.style.display = "none";
    modalOverlay.style.display = "none";
});