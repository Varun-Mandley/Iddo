/* signup */
$(document).ready(function () {
    $(".signup").click(function (e) {
        e.preventDefault();
        $("body").append("<div class=overlay><div>");
        $("body").append("<div class=model><div>");
        $(".model").append('<button class="close">&times;</button>');
        var app = $(".account").html();
        $('.model').append(app);
        $(window).keydown(function (e) {
            if (e.which == 27) {
                $(".overlay ,.model").remove();
            }
        });
        $('.model .close, .overlay').click(function () {

            $(".overlay ,.model").remove();

        });
        // $(".model .close, .overlay").click($close);    //(above function  to other way)
        // function $close(){
        //     $(".model, .overlay").remove();
        // }



    });

});

/* accordian */

$(".acc a").click(function (e) {
    e.preventDefault();
    if ($(this).next("p").is(":hidden")) {
        $(".acc a").removeClass("active");
        $(this).addClass("active");
        $(".acc p").slideUp();
        $(this).next("p").slideDown();
    }
    // else{
    //   $(".acc a").removeClass("active");
    //   $(".acc p").slideUp();
    // }
});

/* scrooll */
$(window).scroll(function () {
    var top = $(this).scrollTop();
    if (top >= 3000) {
        $('.top').fadeIn();
    }
    else {
        $('.top').fadeOut();
    }
});

$('.top,.wrap-1 .hom').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: 0 });
});


/* onclick navbar on their proper postion */
$('.wrap-1 ul a').on("click", function (e) {
    e.preventDefault();
    $('.wrap-1 ul a').removeClass('act');
    $(this).addClass('act');
    var href = $(this).attr("href");
    var pos = $(href).offset().top;
    $('html , body').animate({ scrollTop: pos - 80 })
});

/* automatically navbar bottom-underline change to next one */

/* slider */
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});

/* mob */
$(document).ready(function () {
    $(".mobile-button").click(function () {
        $(this).toggleClass("active");
        $(".wrap-1 .down").slideToggle();
    })
    $(window).keydown(function (e) {
        if (e.which == 27) {
            $(".wrap-1 .down").slideUp();
            $(".wrap-1 .mobile-button").removeClass("active");
        }
    });

    // $('.wrap-2,.wrap-3,.wrap-4,.wrap-5,.wrap-6,.wrap-7,.wrap-8,.wrap-9,.wrap-10,.wrap-11').click(function () { 
    //     $(".wrap-1 .down").slideUp();
    //     $(".wrap-1 .mobile-button").removeClass("active");

    // });

    $(".mobile-button").focusout(function () {         //(above function doing also this way)
        $(".wrap-1 .down").slideUp();
        $(".wrap-1 .mobile-button").removeClass("active");

    });

});
