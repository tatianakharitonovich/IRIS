$(document).ready(() => {
  function changeInputRange() {
    const val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

    $(this).css('background-image',
      '-webkit-gradient(linear, left top, right top, ' +
      'color-stop(' + val + ', var(--c-select-text)), ' +
    'color-stop(' + val + ', var(--c-input-range-back))' + ')'
    );
  }

  $('input[type="range"]').on('pointermove', changeInputRange);

  $('input[type="range"]').change(changeInputRange);
});
