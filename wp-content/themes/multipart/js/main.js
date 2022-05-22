$(window).scroll(function(){
  if ($(window).scrollTop() >=18) {
    $('header').addClass('header-fixed');
   }
   else {
    $('header').removeClass('header-fixed');
   }
});