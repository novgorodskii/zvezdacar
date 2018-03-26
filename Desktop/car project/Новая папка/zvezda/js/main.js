jQuery(document).ready(function(){

  $(".tabContent").not(":first").hide();
  $(".tab").click(function() {
    $(".tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tabContent").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
  });
  
  // slider init
  $('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<a class="bt-prev fa fa-angle-left">',
    nextArrow: '<a class="bt-next fa fa-angle-right">',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
  });
  
  function slowScroll (id) {
    var offset = 0;
    $('html,body').animate ({
      scrollTop: $(id).offset ().top - offset
    }, 800);
    return false;
  }
  
  $('a[data-target^="anchor"]').on('click', function () { $('.navbar-collapse').collapse('hide'); $a = $($(this).attr('href')); return false; });
  