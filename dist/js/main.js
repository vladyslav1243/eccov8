"use strict";

var myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log("width ".concat(myWidth, " \n height ").concat(myHeight));
document.querySelector('html').style.overflowY = 'hidden';

window.onload = function () {
  document.querySelector('.loader').style.display = 'none';
  document.querySelector('html').style.overflowY = 'scroll';
  /*
      date increase
   */

  var today = new Date(),
      tomorrow = new Date(),
      day,
      month,
      year,
      i = 3,
      period = document.querySelectorAll('p.period output');
  tomorrow.setDate(today.getDate() + i);
  day = tomorrow.getDate();
  month = tomorrow.getMonth() + 1;
  year = tomorrow.getFullYear().toString().slice(2);
  day = day > 9 ? day : "0".concat(day);
  month = month > 9 ? month : "0".concat(month);

  for (var _i = 0; _i < period.length; _i++) {
    period[_i].innerHTML = "".concat(day, ".").concat(month, ".").concat(year);
  }
  /*
      loop fancybox
   */


  $.fancybox.defaults.loop = true;
  /*
      gallery slider
   */

  var gallerySlider = $('.video .video__content .video__content-gallery .slider'),
      galleryCenter;
  gallerySlider.on('init', function (slick, event) {
    galleryCenter = $('.slick-center');
    galleryCenter.prev().find('.slider-item').css({
      width: '123%',
      marginLeft: 0,
      opacity: 1,
      position: 'relative',
      top: 0,
      left: 0,
      zIndex: 9
    });
    galleryCenter.find('.slider-item').css({
      width: '90%',
      display: 'block',
      marginLeft: 'auto',
      opacity: 0.6,
      position: 'relative',
      top: 81,
      left: 0,
      zIndex: 7
    });
  });
  gallerySlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.video__content-gallery .counter span.counterSlide').text('0' + i + '/');
    $('.video__content-gallery .counter span.allSlide').text('0' + slick.slideCount);
  });
  gallerySlider.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    speed: 300,
    arrows: true,
    prevArrow: $('.gallery-prev'),
    nextArrow: $('.gallery-next'),
    swipe: false,
    responsive: [{
      breakpoint: 577,
      settings: {
        centerMode: false,
        slidesToShow: 1
      }
    }]
  });
  gallerySlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if (currentSlide > nextSlide && (nextSlide !== 0 || currentSlide === 1) || currentSlide === 0 && nextSlide === slick.slideCount - 1) {
      galleryCenter = $('.slick-center').prev();
    } else if (currentSlide === nextSlide) {
      galleryCenter = $('.slick-center');
    } else {
      galleryCenter = $('.slick-center').next();
    }

    galleryCenter.prev().find('.slider-item').css({
      width: '123%',
      marginLeft: 0,
      opacity: 1,
      position: 'relative',
      top: 0,
      left: 0,
      zIndex: 9
    });
    galleryCenter.find('.slider-item').css({
      width: '90%',
      display: 'block',
      marginLeft: 'auto',
      opacity: 0.6,
      position: 'relative',
      top: 81,
      left: 0,
      zIndex: 7
    });
  });
  /*
      catalog slider
   */

  var sneakersSlider = $('.catalog__block.sneakers .catalog__block-photo .slider'),
      bootsSlider = $('.catalog__block.boots .catalog__block-photo .slider'),
      sandalsBlackSlider = $('.catalog__block.sandals-black .catalog__block-photo .slider'),
      sandalsWhiteSlider = $('.catalog__block.sandals-white .catalog__block-photo .slider');
  var sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    swipe: false,
    arrows: true,
    prevArrow: '',
    nextArrow: '',
    responsive: [{
      breakpoint: 768,
      settings: {
        swipe: true
      }
    }]
  };
  sneakersSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.catalog__block.sneakers .catalog__block-photo .counter span.counterSlide').text('0' + i + '/');
    $('.catalog__block.sneakers .catalog__block-photo .counter span.allSlide').text('0' + slick.slideCount);
  });
  bootsSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.catalog__block.boots .catalog__block-photo .counter span.counterSlide').text('0' + i + '/');
    $('.catalog__block.boots .catalog__block-photo .counter span.allSlide').text('0' + slick.slideCount);
  });
  sandalsBlackSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.catalog__block.sandals-black .catalog__block-photo .counter span.counterSlide').text('0' + i + '/');
    $('.catalog__block.sandals-black .catalog__block-photo .counter span.allSlide').text('0' + slick.slideCount);
  });
  sandalsWhiteSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.catalog__block.sandals-white .catalog__block-photo .counter span.counterSlide').text('0' + i + '/');
    $('.catalog__block.sandals-white .catalog__block-photo .counter span.allSlide').text('0' + slick.slideCount);
  });
  sneakersSlider.slick(sliderSettings, sliderSettings.prevArrow = $('.sneakers-prev'), sliderSettings.nextArrow = $('.sneakers-next'));
  bootsSlider.slick(sliderSettings, sliderSettings.prevArrow = $('.boots-prev'), sliderSettings.nextArrow = $('.boots-next'));
  sandalsBlackSlider.slick(sliderSettings, sliderSettings.prevArrow = $('.sandals-black-prev'), sliderSettings.nextArrow = $('.sandals-black-next'));
  sandalsWhiteSlider.slick(sliderSettings, sliderSettings.prevArrow = $('.sandals-white-prev'), sliderSettings.nextArrow = $('.sandals-white-next'));
  /*
      change active size
   */

  var allSize = document.querySelectorAll('.size figure span');

  var _loop = function _loop(_i2) {
    var _loop2 = function _loop2(j) {
      allSize[j].addEventListener('click', function () {
        allSize[_i2].classList.remove('active');

        allSize[j].classList.add('active');
      });
    };

    for (var j = 0; j < allSize.length; j++) {
      _loop2(j);
    }
  };

  for (var _i2 = 0; _i2 < allSize.length; _i2++) {
    _loop(_i2);
  }
  /*
      review slider
   */


  var reviewSlider = $('.review .review__content .slider'),
      reviewCenter;
  reviewSlider.on('init', function (slick, event) {
    reviewCenter = $('.slick-center');
    reviewCenter.prev().find('.slider-items').css({
      marginLeft: 0
    });
    reviewCenter.find('.slider-items').css({
      marginLeft: 'auto'
    });
  });
  reviewSlider.slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: 0,
    arrows: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: $('.review-prev'),
        nextArrow: $('.review-next')
      }
    }]
  });
  reviewSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if (currentSlide > nextSlide && (nextSlide !== 0 || currentSlide === 1) || currentSlide === 0 && nextSlide === slick.slideCount - 1) {
      reviewCenter = $('.slick-center').prev();
    } else if (currentSlide === nextSlide) {
      reviewCenter = $('.slick-center');
    } else {
      reviewCenter = $('.slick-center').next();
    }

    reviewCenter.prev().find('.slider-items').css({
      marginLeft: 0
    });
    reviewCenter.find('.slider-items').css({
      marginLeft: 'auto'
    });
  });
  /*
      timer
   */

  var myTimer = function myTimer() {
    var today = new Date(),
        tomorrow,
        timer,
        days,
        hours,
        minutes,
        seconds,
        newDay = 3;
    tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + newDay);
    timer = tomorrow.getTime() - today.getTime();
    days = parseInt(timer / (24 * 60 * 60 * 1000));
    hours = parseInt(timer / (60 * 60 * 1000)) % 24;
    minutes = parseInt(timer / (60 * 1000)) % 60;
    seconds = parseInt(timer / 1000) % 60;
    days = days > 9 ? days : "0".concat(days);
    hours = hours > 9 ? hours : "0".concat(hours);
    minutes = minutes > 9 ? minutes : "0".concat(minutes);
    seconds = seconds > 9 ? seconds : "0".concat(seconds);
    document.querySelector('#timer .numbers span.days').innerText = days.toString();
    document.querySelector('#timer .numbers span.hours').innerHTML = hours.toString();
    document.querySelector('#timer .numbers span.minutes').innerHTML = minutes.toString();
    document.querySelector('#timer .numbers span.seconds').innerHTML = seconds.toString();
    setTimeout(myTimer, 1000);
  };

  myTimer();
  /*
      animate
   */

  var fade = [$('.bucket'), $('.advantages__content h5'), $('.advantages__content p.medium'), $('.advantages__content-img'), $('.advantages__content-block__circle'), $('.advantages__content .to-order'), $('.video__content-clip h3'), $('.video__content-clip figure'), $('.video__content-gallery'), $('.stock__content h3'), $('.stock__content-img'), $('.stock__content p'), $('.catalog__block-photo'), $('.catalog__block-img'), $('.catalog__block-info'), $('.spray__content-text p'), $('.spray__content-text .price'), $('.spray__content-img'), $('.spray__content-order'), $('.review h4'), $('.review__content'), $('.delivery h4'), $('.delivery p.medium'), $('.delivery__content figure')];

  for (var _i3 = 0; _i3 < fade.length; _i3++) {
    fade[_i3].waypoint(function (direction) {
      if (direction === 'down') {
        $(this.element).addClass('animated');
        this.destroy();
      }
    }, {
      offset: function offset() {
        return this.context.innerHeight() * 0.82;
      }
    });
  }
  /*
      hide bucket on mobile
   */


  var hideBucket = function hideBucket() {
    var topOfWindow = window.pageYOffset + myHeight,
        catalogTopPosition = document.querySelector('.catalog').offsetTop,
        sprayTopPosition = document.querySelector('.spray').offsetTop,
        footerTopPosition = document.querySelector('.footer').offsetTop,
        footerLinkTopPosition = document.querySelector('.to-order.last').offsetTop,
        bucket = document.querySelector('.bucket');

    if (topOfWindow > catalogTopPosition && topOfWindow < sprayTopPosition) {
      bucket.classList.remove('animated');
      bucket.style.display = 'none';
    } else if (topOfWindow > footerTopPosition + footerLinkTopPosition) {
      bucket.classList.remove('animated');
      bucket.style.display = 'none';
    } else {
      bucket.classList.add('animated');
      bucket.style.display = 'block';
    }
  };
  /*
      change href on mobile
   */


  if (/iPhone|iPod|iPad|Android/i.test(navigator.userAgent)) {
    myHeight = window.innerHeight;
    var href = $('#mobile-order').offset().top - myHeight - 40;
    $('.to-order a, a.bucket').on('click', function () {
      $('html, body').animate({
        scrollTop: href
      }, 800);
      return false;
    });
    window.addEventListener('scroll', function () {
      hideBucket();
    }, false);
    window.addEventListener('resize', function () {
      myHeight = window.innerHeight;
      hideBucket();
    }, false);
  } else {
    var _href = $('#catalog').offset().top;
    $('.to-order a, a.bucket').on('click', function () {
      $('html, body').animate({
        scrollTop: _href
      }, 800);
      return false;
    });
  }
};