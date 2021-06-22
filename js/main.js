$(function () {
  //Nav bar scrolling
  $(".page-sections li a").on("click", function (e) {
    e.preventDefault();
    let href = $(this).attr("href");
    console.log(href);
    $(".current-section").removeClass("current-section");
    $("html, body").animate(
      {
        scrollTop: $(`${href}`).offset().top,
      },
      200
    );
  });

  //remove collapse on resize
  $(window).on("resize load", function () {
    let win = $(this);
    if (win.width() < 1200) {
      $(".sidebar").addClass("collapsed");
      $(".navbar").removeClass("collapsed");
    } else {
      $(".navbar").addClass("collapsed");
      $(".sidebar").removeClass("collapsed");
    }
  });

  //reveal sidebar on click
  $(".nav-button").on("click", function () {
    let sidebar = $(".sidebar");
    sidebar.toggleClass("collapsed");
    setTimeout(() => {
      sidebar.toggleClass("collapsed");
    }, 10000);
  });

  //active navbar on scroll
  $(document).on("scroll", function () {
    let scroll = $(document).scrollTop();
    let aboutOffset = $("#about").offset().top - 200;
    let projectOffset = $("#projects").offset().top - 150;
    let expOffset = $("#experience").offset().top - 300;
    let conOffset = $('#contact').offset().top

    console.log(conOffset, expOffset, scroll)

    if (scroll >= aboutOffset && scroll < projectOffset) {
      $("#about-tab").addClass("current-section");
    } else {
      $("#about-tab").removeClass("current-section");
    }
    if (scroll >= projectOffset && scroll < expOffset) {
      $("#proj-tab").addClass("current-section");
      $("#about-tab").removeClass("current-section");
    } else {
      $("#proj-tab").removeClass("current-section");
    }
    if (scroll >= expOffset && scroll < expOffset + 200) {
      $("#exp-tab").addClass("current-section");
      $("#proj-tab").removeClass("current-section");
    } else {
      $("#exp-tab").removeClass("current-section");
    }
  });

  //set button as active tab when clicked on vs scroll
  $(".page-section").on("click", function () {
    $(".current-section").removeClass("current-section");
    $(this).addClass("current-section");
  });
});
