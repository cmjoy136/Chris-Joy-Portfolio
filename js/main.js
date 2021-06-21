 $(function(){

    //Nav bar scrolling
    $('.page-sections li a').on('click', function(e) {
        let href = $(this).attr('href')

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 200)
        
        e.preventDefault()
      })

      $('.carousel').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.prev',
        nextArrow: '.next',
        appendDots:$('.dots-container'),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      })

  });