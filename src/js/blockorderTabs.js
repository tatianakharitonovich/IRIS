// Show the first tab by default
$('.main__blockorder_tabsstage > div').hide();
$('.main__blockorder_tabsstage div:first').show();
$('.main__blockorder_tabsnav li:first').addClass('tab-active');

// Change tab class and display content
$('.main__blockorder_tabsnav a').on('click', function(event){
  event.preventDefault();
  $('.main__blockorder_tabsnav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.main__blockorder_tabsstage > div').hide();
  $($(this).attr('href')).show();
});