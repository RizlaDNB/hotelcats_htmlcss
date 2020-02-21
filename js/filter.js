// $(function() {

//     let filter = $("[data-filter]");

//     filter.on("click", function() {
        
//         let size = $(this).data('filter');
        
//         if(size == 'all') {
//             $("[data-size]").removeClass("hide");
//         } else {
//             $("[data-size]").each(function() {
//                 let workSize = $(this).data('size');

//                 if(workSize != size) {
//                     $(this).addClass('hide');
//                 } else {
//                     $(this).removeClass('hide');
//                 }
//             });
//         }
//     });
// });