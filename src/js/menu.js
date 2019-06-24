$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.menu-btn').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
})


$('.menu-item').on('click', function(e) { 
  $('.menu_active').removeClass('menu_active');
})