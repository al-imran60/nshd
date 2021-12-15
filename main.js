

(function($){
  'use strict';



  $('.section-2').on('click', function(){
    $('.sec-2-hide').fadeIn();
    $('.sec-1-hide').hide();
    $('.sec-3-hide').hide();
    $('.sec-4-hide').hide();
    $('.sec-5-hide').hide();
    $('.sec-6-hide').hide();
  });
  $('.section-1').on('click', function(){
    $('.sec-1-hide').fadeIn();
    $('.sec-2-hide').hide();
    $('.sec-3-hide').hide();
    $('.sec-4-hide').hide();
    $('.sec-5-hide').hide();
    $('.sec-6-hide').hide();
  });
  $('.section-3').on('click', function(){
    $('.sec-3-hide').fadeIn();
    $('.sec-1-hide').hide();
    $('.sec-2-hide').hide();
    $('.sec-4-hide').hide();
    $('.sec-5-hide').hide();
    $('.sec-6-hide').hide();
  });
  
  $('.section-4').on('click', function(){
    $('.sec-3-hide').hide();
    $('.sec-1-hide').hide();
    $('.sec-2-hide').hide();
    $('.sec-4-hide').fadeIn();
    $('.sec-5-hide').hide();
    $('.sec-6-hide').hide();
  });
  $('.section-5').on('click', function(){
    $('.sec-3-hide').hide();
    $('.sec-1-hide').hide();
    $('.sec-2-hide').hide();
    $('.sec-4-hide').hide();
    $('.sec-5-hide').fadeIn();
    $('.sec-6-hide').hide();
  });
  $('.section-6').on('click', function(){
    $('.sec-3-hide').hide();
    $('.sec-1-hide').hide();
    $('.sec-2-hide').hide();
    $('.sec-4-hide').hide();
    $('.sec-5-hide').hide();
    $('.sec-6-hide').fadeIn();
  });







}) (jQuery);