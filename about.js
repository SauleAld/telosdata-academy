var $nav = $("#menu .fixed-top");
$(document).scroll(function () {
  $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
});
$(document).ready(function () {
  if ($(this).scrollTop() > $nav.height()) {
    $nav.toggleClass("scrolled");
  }
});
$(".navbar-toggler").click(function () {
  if ($nav.hasClass("expanded-menu")) {
    setTimeout(() => {
      $nav.removeClass("expanded-menu");
    }, 230);
  } else {
    $nav.addClass("expanded-menu");
  }
});
