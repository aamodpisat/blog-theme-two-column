/**
 * Created by Aamod Pisat on 17-08-2016.
 */
$(document).ready(function() {
    $('.next-page').on('click', function(e) {
        $('.infinite-loader').show();
        e.preventDefault();
        var urlPartial= $(this).attr('data-value');
        $.ajax({
            'url': location.href + urlPartial,
            'method': 'GET',
            'success': function(data) {
                $('#infinite-handle').hide();
                $('.infinite-loader').hide();
                $('#content').append($(data));
            }
        });
    });
    $('.scroll-to-top').on('click', function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});