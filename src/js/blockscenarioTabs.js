// Show the first tab by default
$('.main__blockscenario_tabsstage > div').hide();
$('.main__blockscenario_tabsstage div:first').show();
$('.main__blockscenario_tabsnav li:first').addClass('tab-active');

// Change tab class and display content
$('.main__blockscenario_tabsnav a').on('click', function(event){
  event.preventDefault();
  $('.main__blockscenario_tabsnav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.main__blockscenario_tabsstage > div').hide();
  $($(this).attr('href')).show();
});