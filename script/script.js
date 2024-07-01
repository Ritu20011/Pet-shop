$(document).ready(function () {
    $('.toggler').click(function(){
        $('body').addClass('active');
        $('.mainNav').addClass('active');
    })
    function closeNav(){
        $('body').removeClass('active');
        $('.mainNav').removeClass('active');
    }
    $('.close').click(function () { 
        closeNav();
    });
    $(window).resize(function (){
        closeNav();
    })
    $(document).keydown(function (event) {
        if (event.key === 'Escape') { // Check if the key pressed is Escape
            if ($('.mainNav').hasClass('active')) {
                closeNav();
            }
        }
    });
})