$(function(){//function para executar o JS depois do HTML e do CSS
     //slides para as bibliotecas da Section MAIN
     $('.main-music-container .center').slick({
        dots: false,
        arrows: true,
        centerMode: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: true,
              centerMode: false
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
              arrows: true,
              centerMode: false
            }
          },
          {
            breakpoint: 790,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: true,
              centerMode: false
            }
          }
        ]
    }); 
     //slides para as bibliotecas da Section MAIN


});