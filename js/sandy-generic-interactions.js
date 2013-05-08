$(document).ready(function(){

  //buttons that toggle themselves, and nothing more
  $('.js-button-toggle').on('click',function(){
    $(this).toggleClass('button_active',!$(this).hasClass('button_active'));
  });
});