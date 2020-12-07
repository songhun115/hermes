$(document).ready(function(){
 
    $('.form_box > form > input').click(function(){
        const $clickd = $(this);
        if( $clickd.hasClass('active')) {
          $clickd.removeClass('active');
          $('.form_box').removeClass('active');
          $('.search_box').removeClass('active');
          
        }else {
            $clickd.addClass('active');
            $('.form_box').addClass('active');
            $('.search_box').addClass('active');
          
          }
        
        });
       
        $('.nav_item_menu_btn').click(function(){
          const $clickd = $(this);
          if( $clickd.hasClass('active')) {
            $clickd.removeClass('active');
            $('.all_menu').removeClass('active');
            $('.all_menu').removeClass('active');
          }else {
              $clickd.addClass('active');
              $('.all_menu').addClass('active');
            }

          })

          $('.close_btn').click(function(){
            $('.all_menu').removeClass('active');
            })
            
          
            $('.all_menu_item').click(function(){
              var submenu = $(this).children("ul");
              var $clickd = $(this);
              if( submenu.is(":visible") ){
                submenu.slideUp(300);
                $clickd.removeClass('active');
              }else{
                  submenu.slideDown(300);
                  $clickd.addClass('active');
              }
          });

});

$(function(){
	const shrinkHeader = 1;
    $(window).scroll(function(){
    	var scroll = getCurrentScroll();
        if(scroll >= shrinkHeader){
        	$('.header').addClass('color');
        }else{
        	$('.header').removeClass('color');
        }
    });
    function getCurrentScroll(){
    	return window.pageYOffset || document.documentElement.scrollTop;
    }
});
