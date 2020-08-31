function init() {
  $('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.menu-mobile').toggleClass('menu-mobile_isActive');
  })
  
  $('.about-card_count').each(function() {
    $(this).prop('Counter', 0).animate({
      Counter:$(this).text()
    }, {
      duration: 3000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
      }
    });
  }); 
}

window.addEventListener('load', init);