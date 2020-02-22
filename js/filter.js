$(".filter-option :checkbox").click(function() {
    $(".section-catalogue-body-items__item").hide();
    $(".filter-option :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });
});

$('.filter-reset-button').click(function() {
    $('.section-catalogue-body-items__item').show();
});

// let minPrice = document.querySelector('#min-price').value,
//     maxPrice = document.querySelector('#max-price').value,
//     roomPrice = document.querySelectorAll('.section-catalogue-body-items__item[data-price]');

// roomPrice.forEach(function(userItem) {
//     if (roomPrice <= minPrice) {

//     }
// });




// function filterCondtn1(event) {
//     var element = event.target
//     var condt1 = document.getElementsByClassName("option")
//     for (var i = 0; i < condt1.length; i++) {
//         if (condt1[i].innerHTML.toLowerCase() == element.value.toLowerCase()) {
//             if (element.checked == true) {
//                 condt1[i].parentElement.style = "display:block"
//             } else {
//                 condt1[i].parentElement.style = "display:none"
//             }
//         }
//     }
// }