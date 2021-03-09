

$(document).ready(function(){
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    
    $(window).on('load resize', function(){
        var winHeight = $(window).height();
        var winWidth = $(window).width();
        if(winWidth < 495) {
            $(".skill_cir").css("width", "80px");
            $(".skill_text").css("font-size", "12px");
            $('.dial').trigger(
                'configure',
                {
                    "width" : 80,
                    "height" : 80
                }
            );
        }
        else {
            $(".skill_cir").css("width", "150px");
            $(".skill_text").css("font-size", "18px");
            $('.dial').trigger(
                'configure',
                {
                    "width" : 120,
                    "height" : 120
                }
            );
        }
    });
    
    $(".dial").knob({
        "readOnly":true,
        "width" : 150,
        "height" : 150,
        draw: function () {
            $(this.i).val(this.cv + '%');
        }
    });
});

