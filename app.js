 $(document).ready(function(){

  $(".search_button button").click(function(){
      if ( $(".search_button input").hasClass("active") ) {
        $('.search_button input').removeClass('active');
    } else{
        $('.search_button input').addClass('active');
    }
  });
  $(".search_button button").click(function(){
    if ( $(".btn").hasClass("active") ) {
      $('.btn').removeClass('active');
  } else{
      $('.btn').addClass('active');
  }
});
  
  });

