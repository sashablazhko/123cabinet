$(function() {

// select user start
$('.dropdown__fio > .caption').on('click', function() {
	$(this).parent().toggleClass('open');
});

$('.dropdown__fio > .list > .item').on('click', function() {
	$('.dropdown__fio > .list > .item').removeClass('selected');
	$(this).addClass('selected').parent().parent().removeClass('open').children('.caption').text( $(this).text() );
});

$(document).on('keyup', function(evt) {
	if ( (evt.keyCode || evt.which) === 27 ) {
		$('.dropdown__fio').removeClass('open');
	}
})

$(document).on('click', function(evt) {
	if ( $(evt.target).closest(".dropdown__fio > .caption").length === 0 ) {
		$('.dropdown__fio').removeClass('open');
	}
});
// select user end

});