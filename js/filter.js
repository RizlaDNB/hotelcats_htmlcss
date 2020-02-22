$(".filter-option :checkbox").click(function() {
    $(".section-catalogue-body-items__item").hide();
    $(".filter-option :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });
});

$('.filter-reset-button').click(function() {
    $('.section-catalogue-body-items__item').show();
});