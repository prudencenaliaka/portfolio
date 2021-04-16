
$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
    }
    else{
      $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 500){
$('.scroll-up-btn').addClass("show");
    }
    else{
  $('.scroll-up-btn').removeClass("show");
    }
  })
  $('.carousel .owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        autoPlay: 400,
        responsive:{
            0:{
                items:1
            },
            100:{
                items:2
              },
            200:{
                items:3
            },
            400:{
                items:4
            }
        }
    });
});
