$(document).ready(() => {
    $('input[type="range"]').mousemove(changeInputRange);
    $('input[type="range"]').change(changeInputRange);
    
    function changeInputRange () {
        var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
        
        $(this).css('background-image',
                    '-webkit-gradient(linear, left top, right top, '
                    + 'color-stop(' + val + ', var(--c-selecttextcolor)), '
                    + 'color-stop(' + val + ', #C4C4C4)'
                    + ')'
                    );
    }    
});