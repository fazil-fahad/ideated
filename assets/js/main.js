$(document).ready(function() {

    function headRoom() {
        var header = new Headroom(document.querySelector("#header"), {
            tolerance: {
                up: 8,
                down: 5
            },
            offset: 120,
        });
        header.init();
    }
    headRoom();

    function doAnimate() {
        var doAnimations = function() {
            var offset = $(window).scrollTop() + $(window).height(),
                $animatables = $('.animatable');
            if ($animatables.size() == 0) {
                $(window).off('scroll', doAnimations);
            }
            $animatables.each(function(i) {
                var $animatable = $(this);
                if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                    $animatable.removeClass('animatable').addClass('animated');
                }
            });

        };
        $(window).on('scroll', doAnimations);
        $(window).trigger('scroll');
        // console.log("fire animate");
    }
    doAnimate();

    function matchHeight() {
        var getWindowWidth = $(window).width();
        var getWindowHeight = $(window).height();
        $('.parent').each(function() {
            $(this).find('.child').matchHeight({
                byRow: true,
            });
        });
    }
    matchHeight();

    function viewPortHeight() {
        var getWindowWidth = $(window).width();
        var getWindowHeight = $(window).height();
        $(".viewport-banner").css({ "width": getWindowWidth, "height": getWindowHeight });
        console.log("getWindowWidth::" + getWindowWidth + "getWindowHeight::" + getWindowHeight);
    }
    viewPortHeight();

        $('[data-toggle="tooltip"]').tooltip();


    // resize
    $(window).resize(function() {
        viewPortHeight();
    });
});
