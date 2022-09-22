 $(document).ready(function(){

    $(".search_button button").click(function(){
        if ( $(".search_button input").hasClass("active") ) {
          $('.search_button input').removeClass('active');
      } else{
          $('.search_button input').addClass('active');
      }
    });
    $(".search_button button").click(function(){
      if ( $(".btn-retract").hasClass("active") ) {
        $('.btn-retract').removeClass('active');
    } else{
        $('.btn-retract').addClass('active');
    }
  });


let  btnBurger = document.querySelector('.burger')

function addburgerbtn(){
  if ( btnBurger.clientWidth <= 448 ) {
    $('.burger-main .btn').addClass('btn-retract');
} else{
  $('.burger-main .btn').removeClass('btn-retract');
}
};
window.onload = function()
{

  $(".burger-header").click(function(){
    if ( $(".burger").hasClass("active-burger") ) {
      $('.burger').removeClass('active-burger');
  } else{
      $('.burger').addClass('active-burger');
  }
});


addburgerbtn();
}

$(window).on("scroll resize", function() {
  addburgerbtn();
  });
  
  $('.scroll-to-block').click(function(e){
    e.preventDefault();
    let target = $(this).data('block');
    $('html, body').animate({
      scrollTop:$(target).offset().top
    },700)
  })



});
