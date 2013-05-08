$(document).ready(function(){

  //buttons that toggle themselves, and nothing more
  $('.js-button-toggle').on('click',function(e){
    $(this).toggleClass('button_active',!$(this).hasClass('button_active'));
  });

  $('.js-social-toggle').on('click',function(e){
    e.preventDefault();
    $(this).toggleClass('button_gray disabled',!$(this).hasClass('button_gray disabled'));
  });
});