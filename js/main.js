 $(function(){
    //Nav bar scrolling
    $('.page-sections li a').on('click', function(e) {
        let href = $(this).attr('href')
        $('.current-section').removeClass('current-section')

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 200)
        
        e.preventDefault()
      })

      //remove collapse on resize
      $(window).on('resize', function() {
        let win=$(this)
        if(win.width() < 1000 ){

          $('.sidebar').addClass('collapsed')
          $('.navbar').removeClass('collapsed')
        } else {
          $('.navbar').addClass('collapsed')
          $('.sidebar').removeClass('collapsed')

        }
      })

      //active navbar on scroll
      $(window).scroll(function(){
        let scroll = $(document).scrollTop()
        let aboutOffset = $('#about').offset().top-3
        let projectOffset = $('#projects').offset().top-10
        let expOffset = $('#experience').offset().top-300

        if(scroll >= aboutOffset) {
          $('#about-tab').addClass('current-section')
        } else {
          $('#about-tab').removeClass('current-section')
        }
        
        if(scroll >= projectOffset) {
          $('#project-tab').addClass('current-section')
          $('#about-tab').removeClass('current-section')
        } else {
          $('#project-tab').removeClass('current-section')
        }
        if(scroll >= expOffset) {
          $('#experience-tab').addClass('current-section')
          $('#project-tab').removeClass('current-section')
        } else {
          $('#experience-tab').removeClass('current-section')
        }
      })

      $('#contact-tab').on('click', function(){
        $('.current-section').removeClass('current-section')
        $(this).addClass('current-section')
      })

    });

