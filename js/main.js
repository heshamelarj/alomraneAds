$(document).ready(function(){
    AOS.init();

            var scroll_pos = 0;
            $(document).scroll(function() {
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 110) {
                    $("#navbar-primary").css('background-color', '#ffffff');
                    $("#navbar-primary .navbar-nav > li").css('color', 'black');
                    $('.nav > li > a').css('padding', '0 30px');
                } else {
                    $("#navbar-primary").css('background-color', 'transparent');
                    $("#navbar-primary .navbar-nav > li").css('color', 'white');

                    $('.nav > li > a').css('padding', '15px 30px');
                }
            });

    var gallery = $('.gallery a').simpleLightbox();

    $.simpleLightbox({

// shows fullscreen overlay
            overlay:    true,

// shows loading spinner
            spinner:    true,

// shows navigation arrows
            nav:      true,

// text for navigation arrows
            navText:    ['&larr;','&rarr;'],

// shows image captions
            captions:   true,
            captionDelay:   0,
            captionSelector:  'img',
            captionType:    'attr',
            captionPosition:  'bottom',

// captions attribute (title or data-title)
            captionsData: 'title',

// shows close button
            close:      true,

// text for close button
            closeText:    'X',

// show counter
            showCounter:  true,

// file extensions
            fileExt:    'png|jpg|jpeg|gif',

            animationSlide:   true,

// animation speed in ms
            animationSpeed: 250,

// image preloading
            preloading:   true,

// keyboard navigation
            enableKeyboard: true,

// endless looping
            loop:     true,

// closes the lightbox when clicking outside
            docClose:     true,

// how much pixel you have to swipe
            swipeTolerance: 50,

// lightbox wrapper Class
            className:    'simple-lightbox',

// width / height ratios
            widthRatio:   0.8,
            heightRatio:  0.9,

// disable right click
            disableRightClick:  false,


});

    // Opens the lightbox
    gallery.open();

// Closes the lightbox
    gallery.close();

// Goto next image
    gallery.next();

// Goto previous image
    gallery.prev();

// re-init the lightbox
    gallery.refresh();

// Destroys the lightbox
    gallery.destroy();



});
/*
Google Api Key
 AIzaSyA0HSG50J7Q_KJOFpciT0R4RVW8u8vZ-yY
 */

function initMap() {
    var myLatLng = {lat: 34.653861, lng: -1.910353};
    var mapDiv = document.getElementById('lacoline_map');
    var map = new google.maps.Map(mapDiv, {
        center: myLatLng,
        zoom: 13
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Alomrane-La COLINE!'
    });
}

