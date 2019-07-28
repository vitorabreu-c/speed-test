$('.card').on('click', function (event) {
    
    qlik.resize();
    
    $('.card').toggleClass('flipped');

    $(".card-grid").on('click', function (event) {
        console.log($(this).attr("id"))
        var id = $(this).attr("id");
        $("#" + id);
        $("#card4");
        console.log(id)
        console.log('$("#' + $(this).attr("id") + '").flip("toggle")')
        $("#" + id).flip("toggle");

    });

    $(".card-grid").flip({
        trigger: 'manual'
    });

});    