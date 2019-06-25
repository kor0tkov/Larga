$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.menu-btn').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
  $('html').toggleClass('hidden-overflow');
})

$('.menu-item_link').on('click', function(e) {
  e.preventDefault();
  $('.menu_active').removeClass('menu_active');
  let id = $(this).attr('href');
  let top = $(id).offset().top;
  $('html').removeClass('hidden-overflow');
  $('body,html').animate({scrollTop: top}, 500);
})

$('.feedback_form-link').on('click', function(e){
  e.preventDefault();
  let id = $(this).attr('href');
  let top = $(id).offset().top;
  $('html').animate({scrollTop: top}, 750);
})