$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
   console.log("document is ready");
});

$('.example-1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
  
    responsive:{
        0:{
            items:3,
            slideBy: 3
        },
        460:{
            items:4,
            slideBy: 4
        },
        768:{
            items:5,
            slideBy: 5
        },
        1000:{
            items:6,
            slideBy: 6
        }
    }
});
$('.example-2').owlCarousel({
  loop:true,
  center:true,
  margin:90,
  nav:true,

  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      992:{
          items:3
      }
  }
});
var $nav = $(".fixed-top");
$(document).scroll(function() {
    
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    console.log('rabbbb');
});
$(document).ready(function() {
    
    if ($(this).scrollTop() > $nav.height()) {
        $nav.toggleClass("scrolled");
    }
});
$(".navbar-toggler").click(function() {
    if ($nav.hasClass("expanded-menu")) {
        setTimeout(() => {
            $nav.removeClass("expanded-menu");
        }, 230);   
    } else {
        $nav.addClass("expanded-menu");
    } 
});
$(".learn-more-btn, .qa-bootcamp").click(function() {
    $('#whatisqa-scroll')[0].scrollIntoView(true);
});

$('.qa-bootcamp').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});