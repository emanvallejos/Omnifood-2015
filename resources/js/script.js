$(document).ready(function() {

  /* For the sticky nav */
  $('.js-section-features').waypoint(function(direction) {
      if (direction == "down") {
          $('nav').addClass('sticky');
      } else {
          $('nav').removeClass('sticky');
      }
  }, {
      offset: '10%;'
  });

  /* For the scroll on buttons */
  $('.js-scroll-to-plans').click(function () {
      $('html, body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000);
  });

  $('.js-scroll-to-start').click(function () {
      $('html, body').animate({scrollTop: $('.js-section-features').offset().top}, 1000);
  });

  /* For the navigation scroll */
  $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 'smooth');
            return false;
          }
        }
      });
  });

  /* For the animation on scroll */
  $('.js-way-1').waypoint(function(direction) {
    $('.js-way-1').addClass('animate__fadeIn');
  }, {
    offset: '50%'
  });

  $('.js-way-2').waypoint(function(direction) {
    $('.js-way-2').addClass('animate__fadeInUp');
  }, {
    offset: '50%'
  });

  $('.js-way-3').waypoint(function(direction) {
    $('.js-way-3').addClass('animate__fadeIn');
  }, {
    offset: '50%'
  });

  $('.js-way-4').waypoint(function(direction) {
    $('.js-way-4').addClass('animate__pulse');
  }, {
    offset: '50%'
  });

  /* Mobile nav */
  $('.js-nav-icon').click(function () {
    var nav = $('.js-main-nav');
    var icon = $('.js-nav-icon i');

    nav.slideToggle(200);
    if(icon.hasClass('menu-outline')) {
      icon.addClass('close-outline');
      icon.removeClass('menu-outline');
    } else {
      icon.addClass('menu-outline');
      icon.removeClass('close-outline');
    }

  });

});

