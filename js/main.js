$(document).ready(function(){
            var scroll_pos = 0;
            $(document).scroll(function() {
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 210) {
                    $("#navbar-primary").css('background-color', 'white');
                    $("#navbar-primary .navbar-nav > li").css('color', 'black');
                    $('.nav > li > a').css('padding', '0 30px');
                } else {
                    $("#navbar-primary").css('background-color', 'transparent');
                    $("#navbar-primary .navbar-nav > li").css('color', 'white');

                    $('.nav > li > a').css('padding', '15px 30px');
                }
            });
        });
