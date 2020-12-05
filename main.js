$(document).ready(function(){
 
    $('.form_box > form > input').click(function(){
        const $clickd = $(this);
        if( $clickd.hasClass('active')) {
          $clickd.removeClass('active');
          $('.form_box').removeClass('active');
          $('.search_box_list').removeClass('active');   
        }else {
            $clickd.addClass('active');
            $('.form_box').addClass('active');
            $('.search_box_list').addClass('active');
          }
        
        })
       
});