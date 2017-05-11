$(window).scroll(function() {
  if ($('.menu').css('display') === 'flex' && menuOpen) {
    $('.menu').css('display', 'none');
    menuOpen = false;
  }
  let alpha = $(window).scrollTop() / ($('.hero').height() - 200);
  $('nav').css("background-color", `rgba(40, 40, 40, ${alpha})`);
});

let $root = $('html, body');
$('a').click(function() {
  if ($('.menu').css('display') === 'flex' && menuOpen) {
    $('.menu').css('display', 'none');
    menuOpen = false;
  }

  let href = $.attr(this, 'href');
  if ($(href).offset()) {
    console.log($(href).offset().top - 80);
    $root.animate({
        scrollTop: $(href).offset().top - 80
    }, 400);
  }

  return false;
});

let menuOpen = false;

$('.hamburger').click(function() {
  if ($('.menu').css('display') === 'none') {
    $('.menu').css('display', 'flex');
    setTimeout(function() {menuOpen = true;}, 100);
  } else {
    $('.menu').css('display', 'none');
    menuOpen = false;
  }
});

$('body').click(function() {
  if ($('.menu').css('display') === 'flex' && menuOpen) {
    $('.menu').css('display', 'none');
    menuOpen = false;
  }
});

$('.menu-item').click(function() {
  $('.menu').css('display', 'none');
  menuOpen = false;
});
