// Show the first tab by default
$('.main__blockcashbox_tabsstage > div').hide();
$('.main__blockcashbox_tabsstage div:first').show();
$('.main__blockcashbox_tabsnav li:first').addClass('tab-active');

// Change tab class and display content
$('.main__blockcashbox_tabsnav a').on('click', function(event){
  event.preventDefault();
  $('.main__blockcashbox_tabsnav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.main__blockcashbox_tabsstage > div').hide();
  $($(this).attr('href')).show();
});