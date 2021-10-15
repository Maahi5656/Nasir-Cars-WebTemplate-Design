$('.car-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        centerPadding: '40px',
        dots: true
      }
    },
    {
       breakpoint: 991,
       settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
       }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(document).ready(function(){

    $('.slider-section-image').owlCarousel({
         loop:true,
         margin:1,
         nav:false,
         dots:true,
         responsive:{
             0:{
                items:1
             },
             600:{
                items:1
             },
             1000:{
                items:1
             }
         }

    });

    

  $(document).ready(function(event){

    //sticky navbar
    $(window).scroll(function(){
      let scrollDistance = $(document).scrollTop();

      if(scrollDistance > 60){
        $('.main-header').addClass('sticky');
      }else{
        $('.main-header').removeClass('sticky');
      }

    });
  })  
});

