$('input[type="range"]').change(function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #35CC79), '
                + 'color-stop(' + val + ', #C4C4C4)'
                + ')'
                );
});