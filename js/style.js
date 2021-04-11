

$(document).ready(function(){
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    $(".hand-pointer").addClass( "fa-hand-point-right" );
    $(window).on('load resize', function(){
        var winHeight = $(window).height();
        var winWidth = $(window).width();

        if(winWidth < 584) {

            $(".hand-pointer").removeClass( "fa-hand-point-right" );
            $(".hand-pointer").addClass( "fa-hand-point-down" );

            $(".skill_cir").css("width", "80px");
            $(".skill_text").css("font-size", "0.8rem");
            $('.dial').trigger(
                'configure',
                {
                    "width" : 80,
                    "height" : 80,
                    'fgColor': '#007BFF',
                    'bgColor': '#E5E5E5'
                }
            );
        } 
        else if(winWidth < 980) {
            $(".hand-pointer").addClass( "fa-hand-point-right" );
            $(".skill_cir").css("width", "130px");
            $(".skill_text").css("font-size", "1rem");
            $('.dial').trigger(
                'configure',
                {
                    "width" : 100,
                    "height" : 100,
                    'fgColor': '#007BFF',
                    'bgColor': '#E5E5E5'
                }
            );
        }
        else {
            $(".hand-pointer").addClass( "fa-hand-point-right" );
            $(".skill_cir").css("width", "150px");
            $(".skill_text").css("font-size", "18px");
            $('.dial').trigger(
                'configure',
                {
                    "width" : 120,
                    "height" : 120,
                    'fgColor': '#007BFF',
                    'bgColor': '#E5E5E5'
                }
            );
        }
    });
    
    $(".dial").knob({
        "readOnly":true,
        "width" : 150,
        "height" : 150,
        'fgColor': '#007BFF',
        'bgColor': '#E5E5E5',
        draw: function () {
            $(this.i).val(this.cv + '%');
        }
    });
});

