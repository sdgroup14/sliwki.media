var step_percent;
var all_elem = $('.steps .circlestat').length;

$('.steps').find('.circlestat').each(function(i, elem) {
  step_percent = (i + 1) * 100 / all_elem;
  $(this).attr('data-percent', step_percent);
});

var all_elem_mob = $('.steps-mob .circlestat').length;

$('.steps-mob').find('.circlestat').each(function(i, elem) {
  step_percent = (i + 1) * 100 / all_elem_mob;
  $(this).attr('data-percent', step_percent);
});



$(function() {
  $('.circlestat').circliful();
});

$(function() {
  $('.slide-up').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
});


function ScreenView() {
  var mvp = document.getElementById('view');
  if (screen.width < 767) { $('#view').attr('content', 'width=480'); }
  if (screen.width >= 768) { $('#view').attr('content', 'width=1024'); }
  if (screen.width >= 1024) { $('#view').attr('content', 'width=device-width'); }
};


function AllSwipers() {
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    simulateTouch: false,
    slidesPerView: 2,
    spaceBetween: 0,
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 0,
        simulateTouch: true,
        paginationClickable: true
      }
    }
  });

  var swiper1 = new Swiper('.swiper-container1', {
    simulateTouch: false,
    slidesPerView: 5,
    spaceBetween: 25,
    breakpoints: {
      1023: {
        spaceBetween: 0
      },
      767: {
        spaceBetween: 8
      }
    }
  });

  var swiper2 = new Swiper('.swiper-container2', {
    simulateTouch: false,
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
      1023: {
        spaceBetween: 0
      },
      767: {
        spaceBetween: 8
      }
    }
  });


  var swiper3 = new Swiper('.swiper-container3', {
    pagination: '.swiper-pagination',
    simulateTouch: false,
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerView: 'auto',
        loop: true,
        centeredSlides: true,
        simulateTouch: true,
        paginationClickable: true
      }
    }
  });

  var swiper4 = new Swiper('.swiper-container4', {
    pagination: '.swiper-pagination',
    simulateTouch: false,
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerView: 'auto',
        loop: true,
        centeredSlides: true,
        simulateTouch: true,
        paginationClickable: true
      }
    }
  });
};


$().ready(function() {
  ScreenView();
  AllSwipers();
  $(window).on('resize', function() {
    ScreenView();
    AllSwipers();
  });
});


$("#phone1, #phone2, #phone3, #phone4, #phone5, #phone6, #phone7, #phone8, #phone9, #phone10").intlTelInput({
  onlyCountries: ["ru", "ua", "az", "by", "am", "kz", "kg", "md", "tj", "tm", "uz", "us", "gb", "at", "al", "ad", "be", "bg", "va", "hu", "de", "gr", "dk", "ie", "is", "es", "it", "lv", "lt", "li", "lu", "mk", "mt", "mc", "nl", "no", "pl", "pt", "ro", "sm", "rs", "sk", "sl", "fi", "fr", "hr", "me", "cz", "ch", "se", "ee"],
  initialCountry: "auto",
  geoIpLookup: function(callback) {
    $.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) {
      var countryCode = (resp && resp.country) ? resp.country : "";
      callback(countryCode);
    });
  },
  utilsScript: '',
  defaultCountry: 'auto',
  preferredCountries: ["ru", "ua"],
  nationalMode: false
});


$('.c1-l2-i1, .c1-l2-i2').on('mouseenter', function() {
  $('.c1-l1-center1').css('color', '#00aeef');
});

$('.c1-l2-i3, .c1-l2-i4').on('mouseenter', function() {
  $('.c1-l1-center2').css('color', '#00aeef');
});

$('.c1-l2-i5, .c1-l2-i6').on('mouseenter', function() {
  $('.c1-l1-center3').css('color', '#00aeef');
});



$('.c1-l1-item').on('mouseleave', function() {
  $('.c1-l1-center').css('color', '');
});

$('.c1-s9-head').on('click', function() {
  var show_div = $(this).next();
  if (show_div.hasClass('c1-s9-item-active')) {
    show_div.removeClass('c1-s9-item-active').slideUp(150);
    $(this).removeClass('c1-s9-head-active');
  } else {
    $('.c1-s9-head').removeClass('c1-s9-head-active');
    $('.c1-s9-item-hide').removeClass('c1-s9-item-active').slideUp(1);
    $(this).next().slideDown(150, 'linear').toggleClass('c1-s9-item-active');
    $(this).addClass('c1-s9-head-active');
  }
});




function initMap() {
  var centerLatLng = new google.maps.LatLng(48.9225504, 24.7151329);
  var mapOptions = {
    center: centerLatLng,
    zoom: 17,
    styles: [{
      "elementType": "geometry",
      "stylers": [{
        "color": "#f5f5f5"
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#f5f5f5"
      }]
    }, {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#bdbdbd"
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#eeeeee"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e5e5e5"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#dadada"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }, {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e5e5e5"
      }]
    }, {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [{
        "color": "#eeeeee"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#c9c9c9"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }]

  };





  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
    position: centerLatLng,
    map: map,
    icon: "../lp/img/marker_map.png"
  });
}
google.maps.event.addDomListener(window, "load", initMap);


$('.menu-button').on('click', function() {
  $('.modal-tint').addClass('modal-tint-active popup-active');
  $('body').addClass('body-scroll-hide');
  $('.mobile-menu').css('display', 'table-cell');
  $(this).css('display', 'none');
});

$('.mobile-menu-close').on('click', function() {
  $('.modal-tint').removeClass('modal-tint-active popup-active');
  $('body').removeClass('body-scroll-hide');
  $('.mobile-menu').css('display', '');
  $($('.menu-button')).css('display', '');
});

$('.content-btn').on('click', function() {
  $('.modal-tint').addClass('modal-tint-active popup-active');
  $('body').addClass('body-scroll-hide');
  $('.calc1').css('display', 'table-cell');
});

$('.case1-s10-sbmt').on('click', function(e) {
  e.preventDefault();
  $('.modal-tint').addClass('modal-tint-active popup-active');
  $('body').addClass('body-scroll-hide');
  $('.download-file').css('display', 'table-cell');
});

$('.c1-s11-btn').on('click', function(e) {
  e.preventDefault();
  $('.modal-tint').addClass('modal-tint-active popup-active');
  $('body').addClass('body-scroll-hide');
  $('.details').css('display', 'table-cell');
  $('.dynamic-header').text($(this).closest('.c1-s11-down').find('h3').text());
});

$('.c1-s12-btn').on('click', function(e) {
  e.preventDefault();
  $('.modal-tint').addClass('modal-tint-active popup-active');
  $('body').addClass('body-scroll-hide');
  $('.subsc').css('display', 'table-cell');
});

$('.c1-f-btn').on('click', function(e) {
  e.preventDefault();
  $('.modal-tint').addClass('modal-tint-active popup-active');
  $('body').addClass('body-scroll-hide');
  $('.call').css('display', 'table-cell');
});




$('.c1-f-polit').on('click', function(e) {
  e.preventDefault();
  $('.modal-tint').addClass('modal-tint-active popup1-active');
  $('body').addClass('body-scroll-hide');
  $('.politics').css('display', 'block');
});

$('.c1-f-compl').on('click', function(e) {
  e.preventDefault();
  $('.modal-tint').addClass('modal-tint-active popup1-active');
  $('body').addClass('body-scroll-hide');
  $('.compl').css('display', 'block');
});

$('.c1-f-renoun').on('click', function(e) {
  e.preventDefault();
  $('.modal-tint').addClass('modal-tint-active popup1-active');
  $('body').addClass('body-scroll-hide');
  $('.respon').css('display', 'block');
});


$('.popup1-close, .modal-close-dwn').on('click', function(e) {
  e.preventDefault();
  $('.modal-tint').removeClass('modal-tint-active popup1-active popup-active');
  $('body').removeClass('body-scroll-hide');
  $('.popup1').css('display', 'none');
  $('.popup').css('display', 'none');
});

$(window).on('keydown', function(e) {
  if (e.which == 27 && $('.modal-tint').hasClass('modal-tint-active')) {
    $('.modal-tint').removeClass('modal-tint-active popup1-active popup-active');
    $('body').removeClass('body-scroll-hide');
    $('.popup1').css('display', 'none');
    $('.popup').css('display', 'none');
  }
});


$(".calc1-phone, .case1-s3-phone, .case1-s7-phone, .case1-s8-phone, .details-phone, .call-phone, .calc-phone, .statem-phone").intlTelInput({
        onlyCountries: ["ru", "ua", "az", "by", "am", "kz", "kg", "md", "tj", "tm", "uz", "us", "gb", "at", "al", "ad", "be", "bg", "va", "hu", "de", "gr", "dk", "ie", "is", "es", "it", "lv", "lt", "li", "lu", "mk", "mt", "mc", "nl", "no", "pl", "pt", "ro", "sm", "rs", "sk", "sl", "fi", "fr", "hr", "me", "cz", "ch", "se", "ee"],
        initialCountry: "auto",
        geoIpLookup: function(callback) {
            $.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                callback(countryCode);
            });
        },
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.12/js/utils.js',
        defaultCountry: 'auto',
        preferredCountries: ["ru", "ua"],
        nationalMode: false
    });


$('.case1-s8-btn').on('click', function(e){
  e.preventDefault();
  $(this).parents('.card').addClass('card-active');
});

$('.case1-s8-close').on('click', function(){
  $(this).parents('.card').removeClass('card-active');
});



// $('.card-wrap').off('mouseenter mouseleave');

$('.c11-slider-wrap').on('click', function(){
  $(this).toggleClass('c11-slider-wrap-active');
});




$('.mob-list-item a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();

$('.modal-tint').removeClass('modal-tint-active popup-active');
  $('body').removeClass('body-scroll-hide');
  $('.mobile-menu').css('display', '');
  $($('.menu-button')).css('display', '');
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 500, 'swing', function () {
 window.location.hash = target;
 });
 });



