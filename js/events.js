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

var swiper_html = '<div class="c1-list1 clearfix"> <div class="c1-list1-l"> <div class="swiper-container3"> <div class="swiper-wrapper"> <div class="swiper-slide slide-c1-s2  slide-s2-1"  data-q="" data-aft=""> <div class="slide-c1-s2-head">Кому?</div> <div class="c1-l1-item  c1-l2-i1"> <h3>Действующему&nbsp;<br class="c2-br2-768">бизнесу</h3> <p>Предпринимателям и компаниям в<br>сфере розничной и промышленной<br>торговли, услуг, консалтинга, B2B<br>и интернет бизнеса.</p> </div> </div> <div class="swiper-slide slide-c1-s2 slide-s2-2" data-q="" data-aft=""> <div class="slide-c1-s2-head">Зачем?</div> <div class="c1-l1-item c1-l2-i3"> <h3>Увеличение&nbsp;<br class="c2-br2-768">продаж</h3> <p>Для&nbsp;взаимодействия&nbsp;с&nbsp;максимально <br class="c2-br1-768">точной ЦА которая будет покупать&nbsp;<br class="c2-br1-768">Ваши товары/услуги на 30% больше&nbsp;<br class="c2-br1-768">благодаря актуальному предложению.</p> </div> </div> <div class="swiper-slide slide-c1-s2 slide-s2-3" data-q="" data-aft=""> <div class="slide-c1-s2-head">Следствие</div> <div class="c1-l1-item c1-l2-i5"> <h3>Перекрытие&nbsp;<br class="c2-br2-768">утечки денег</h3> <p>Вы сохраните до 58% прибыли которую&nbsp;<br class="c2-br1-768">Вы теряете каждый день недополучая&nbsp;<br class="c2-br1-768">десятки заявок от Ваших потенциальных&nbsp;<br class="c2-br1-768">клиентов готовых заплатить Вам деньги.</p> </div> </div> </div> <div class="swiper-pagination"></div> </div> </div> <div class="c1-list1-r"> <div class="swiper-container4"> <div class="swiper-wrapper"> <div class="swiper-slide slide-c1-s2  slide-s2-1" data-q="" data-aft=""> <div class="slide-c1-s2-head">Кому?</div> <div class="c1-l1-item c1-l2-i2"> <h3>Начинающему бизнесу</h3> <p>Начинающим предпринимателям,<br>которым важно максимально быстро<br>и эффективно запустить свою идею,<br>а так же извлечь первую прибыль.</p> </div> </div> <div class="swiper-slide slide-c1-s2 slide-s2-2" data-q="" data-aft=""> <div class="slide-c1-s2-head">Зачем?</div> <div class="c1-l1-item c1-l2-i4"> <h3>Получение первой прибыли</h3> <p>Для быстрого тестирования и анализа&nbsp;<br class="c2-br1-768">спроса в нише, а так же для бюджетного&nbsp;<br class="c2-br1-768">запуска бизнес идеи которая позволит&nbsp;<br class="c2-br1-768">получить клиентов уже на второй день.</p> </div> </div> <div class="swiper-slide slide-c1-s2 slide-s2-3"  data-q="" data-aft=""> <div class="slide-c1-s2-head">Следствие</div> <div class="c1-l1-item c1-l2-i6"> <h3>Снятие рисков провала</h3> <p>В результате запуска Вашей бизнес идеи&nbsp;<br class="c2-br1-768">Вы отсечете все риски провала, а так же&nbsp;<br class="c2-br1-768">сохраните свои деньги для дальнейшего&nbsp;<br class="c2-br1-768">и эффективного масштабирования.</p> </div> </div> </div> <div class="swiper-pagination"></div> </div> </div> </div>';

$().ready(function() {
  ScreenView();
  $('.c1-list1').detach();
  $('.case1-s2 .container').append(swiper_html);
  var swiper3 = new Swiper('.swiper-container3', {
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
        simulateTouch: false,
        paginationClickable: false
      },
      767: {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        simulateTouch: true,
        paginationClickable: true,
        onSlideChangeEnd: function() {
          $('.swiper-container3').find('.swiper-slide-active').attr('data-aft', $('.swiper-container3').find('.swiper-slide-active').next().find('.slide-c1-s2-head').text());
          $('.swiper-container3').find('.swiper-slide-active').attr('data-q', $('.swiper-container3').find('.swiper-slide-active').prev().find('.slide-c1-s2-head').text());
        }
      }
    }
  });

  var swiper4 = new Swiper('.swiper-container4', {

    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
        simulateTouch: false,
        paginationClickable: false
      },
      767: {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        simulateTouch: true,
        paginationClickable: true,
        onSlideChangeEnd: function() {
          $('.swiper-container4').find('.swiper-slide-active').attr('data-aft', $('.swiper-container4').find('.swiper-slide-active').next().find('.slide-c1-s2-head').text());
          $('.swiper-container4').find('.swiper-slide-active').attr('data-q', $('.swiper-container4').find('.swiper-slide-active').prev().find('.slide-c1-s2-head').text());
        }
      }
    }
  });


  $(window).on('resize', function() {
    var ww = $(window).width()
    ScreenView();

    if (ww < 767) {
      $('.c1-list1').detach();
      $('.case1-s2 .container').append(swiper_html);
      var swiper3 = new Swiper('.swiper-container3', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        simulateTouch: true,
        paginationClickable: true,
        onSlideChangeEnd: function() {
          $('.swiper-container3').find('.swiper-slide-active').attr('data-aft', $('.swiper-container3').find('.swiper-slide-active').next().find('.slide-c1-s2-head').text());
          $('.swiper-container3').find('.swiper-slide-active').attr('data-q', $('.swiper-container3').find('.swiper-slide-active').prev().find('.slide-c1-s2-head').text());
        }
      });

      var swiper4 = new Swiper('.swiper-container4', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        simulateTouch: true,
        paginationClickable: true,
        onSlideChangeEnd: function() {
          $('.swiper-container4').find('.swiper-slide-active').attr('data-aft', $('.swiper-container4').find('.swiper-slide-active').next().find('.slide-c1-s2-head').text());
          $('.swiper-container4').find('.swiper-slide-active').attr('data-q', $('.swiper-container4').find('.swiper-slide-active').prev().find('.slide-c1-s2-head').text());
        }
      });


    } else if (screen.width >= 767) {
      $('.c1-list1').detach();
      $('.case1-s2 .container').append(swiper_html);
    }
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

  $('.details-popup-show').css('display', 'none');
  $('.details-popup-show[data-details="'+$(this).closest('.c1-s11-down').find('h3').attr('data-s11-h3')+'"]').css('display', 'block');
  console.log($(this).closest('.c1-s11-down').find('h3').attr('data-s11-h3'));

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

$('.c1-s5-calc-start').on('click', function(e) {
  e.preventDefault();
  $('.modal-tint').addClass('modal-tint-active popup-active');
  $('body').addClass('body-scroll-hide');
  $('.statem').css('display', 'table-cell');
});

$('.c1-s5-calc-end').on('click', function(e) {
  e.preventDefault();
  $('.modal-tint').addClass('modal-tint-active popup-active');
  $('body').addClass('body-scroll-hide');
  $('.calc').css('display', 'table-cell');
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


$('.case1-s8-btn').on('click', function(e) {
  e.preventDefault();
  $(this).parents('.card').addClass('card-active');
});

$('.case1-s8-close').on('click', function() {
  $(this).parents('.card').removeClass('card-active');
});





$('.c11-slider-wrap').on('click', function() {
  $(this).toggleClass('c11-slider-wrap-active');
});




$('.mob-list-item a[href^="#"]').bind('click.smoothscroll', function(e) {
  e.preventDefault();

  $('.modal-tint').removeClass('modal-tint-active popup-active');
  $('body').removeClass('body-scroll-hide');
  $('.mobile-menu').css('display', '');
  $($('.menu-button')).css('display', '');

  var target = this.hash,
    $target = $(target);

  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 500, 'swing', function() {
    window.location.hash = target;
  });
});


$('body').on('mouseenter', '.c1-l2-i1, .c1-l2-i2', function() {
  $('.c1-l1-center1').css('color', '#00aeef');
});

$('body').on('mouseenter', '.c1-l2-i3, .c1-l2-i4', function() {
  $('.c1-l1-center2').css('color', '#00aeef');
});

$('body').on('mouseenter', '.c1-l2-i5, .c1-l2-i6', function() {
  $('.c1-l1-center3').css('color', '#00aeef');
});



$('body').on('mouseleave', '.c1-l1-item', function() {
  $('.c1-l1-center').css('color', '');
});