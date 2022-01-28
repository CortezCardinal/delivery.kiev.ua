$(document).ready(function(){
/*   ----------- scroll to form -----------  */
    $('.header__second-button a[href^="#"]').click(function () {
      var target = $(this).attr('href');
       $('html, body').animate({  
      scrollTop: $(target).offset().top
      }, 500);
    });
    $('.aplication-body__main-button a[href^="#"]').click(function () {
      var target = $(this).attr('href');
      $('html, body').animate({  
      scrollTop: $(target).offset().top
      }, 500);
    });
/*   ----------- scroll to form -----------  */
/*   ----------- SLIDER -----------  */
	const associate__carousel = $('#associate-body__carousel');
  const left                = $('#sliderLeft');
  const right               = $('#sliderRight');
  const owl                 = $('.owl-carousel');

left.click(function(){
    associate__carousel.trigger('prev.owl.carousel');
});

right.click(function(){
associate__carousel.trigger('next.owl.carousel');
});

  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:16,
    responsive:{
        0:{
            items:1
        },
        385:{
            items:1
        },
        900:{
            items:4
        }
    }
  });
/*   ----------- SLIDER -----------  */
 
$( ".footer-body__description-social a" ).click(function( e ){e.preventDefault();});
$(".sender-body__info-circle").click(function( event ) 
{
  $(".sender-body__info-circle").toggleClass("active-circle-circle");
  $(".sender-body__info-title").toggleClass("active-circle");
  $(".send-body-form2").toggleClass("send-body-form2-active");  
});
$(".burger-menu").click(function( event ) 
  {
    $(".burger-menu").addClass("burger-menu-active");
    $(".header__menu-bg").addClass("header__menu-bg-active");
    $(".menu-items").addClass("menu-items-active");
    $("body").addClass("body-active-menu");
    $(".menu-items__list").addClass("menu-items__list-active");
  });
$(".menu-burger-cross").click(function( event ) 
  {
    $(".burger-menu").removeClass("burger-menu-active");
    $(".header__menu-bg").removeClass("header__menu-bg-active");
    $(".menu-items").removeClass("menu-items-active");
    $("body").removeClass("body-active-menu");
    $(".menu-items__list").removeClass("menu-items__list-active");
    $(".sub-menu__items-link").removeClass("sub-menu__items-active");
  });
});
 