$(document).ready(() => {
  // eslint-disable-next-line no-console
  console.log('document ready');
  $(window).scroll(function () {
    $('header').toggleClass('scroll', $(this).scrollTop() > 0);
  });
});
