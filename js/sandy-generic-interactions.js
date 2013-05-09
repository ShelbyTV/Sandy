$(document).ready(function(){

  State = {
    //cache shelves
    $documentShelves : $('.shelf'),

    getParams : function() {
      return window.location.hash.split('#')[1];
    },

    DocumentState : function(index) {
      console.log('documentstate',index);
      index = index || this.getParams() || 'init';
      console.log('documentstate param',index);

      this.$documentShelves.toggleClass('hidden', true);
      $('.shelf--'+index).toggleClass('hidden',false);

      this.updateState(index);
    },

    updateState : function(state) {
      history.pushState(null,null,'#'+state);
    }
  };


  //buttons that toggle themselves, and nothing more
  $('.js-button-toggle').on('click',function(e){
    $(this).toggleClass('button_active',!$(this).hasClass('button_active'));
  });

  $('.js-social-toggle').on('click',function(e){
    e.preventDefault();
    $(this).toggleClass('button_gray disabled',!$(this).hasClass('button_gray disabled'));
  });

    //basic functioning of a progressive flow.
    $('.js-next').on('submit',function(e){
      e.preventDefault();

      var nextSlide = $(this).data('go_to');

      State.DocumentState(nextSlide);
    });

    $('.js-split-decision').on('click',function(e){
      e.preventDefault();

      var nextSlide = $(this).data('go_to');

      State.DocumentState(nextSlide);
    });

    //handle for backbutton
    $(window).hashchange(function(){
      State.DocumentState();
    });
});