const modal = document.querySelector('.modal-booking'),
    modalOverlay = document.querySelector('.modal-overlay'),
    closeButton = document.querySelector('.modal-close'),
    openButton = document.querySelector('.modal-open');

closeButton.addEventListener('click', function(){
    modal.classList.toggle('closed');
    modalOverlay.classList.toggle('closed');
});

openButton.addEventListener('click', function(){
    modal.classList.toggle('closed');
    modalOverlay.classList.toggle('closed');
});

modalOverlay.addEventListener('click', function(){
    modal.classList.toggle('closed');
    modalOverlay.classList.toggle('closed');
});