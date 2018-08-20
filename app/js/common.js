$(function() {

// select user in cabinet
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
// select user in cabinet end

// select city on addr page
$('.dropdowncity > .caption').on('click', function() {
	$(this).parent().toggleClass('open');
});

$('.dropdowncity > .list > .item').on('click', function() {
	$('.dropdowncity > .list > .item').removeClass('selected');
	$('.dropdowncity > .caption').addClass('caption__selected');
	$(this).addClass('selected').parent().parent().removeClass('open').children('.caption').text( $(this).text() );
});

$(document).on('keyup', function(evt) {
	if ( (evt.keyCode || evt.which) === 27 ) {
		$('.dropdowncity').removeClass('open');
	}
});

$(document).on('click', function(evt) {
	if ( $(evt.target).closest(".dropdowncity > .caption").length === 0 ) {
		$('.dropdowncity').removeClass('open');
	}
});
// select city on addr page end

// slider on password page (start)
$('.passslider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// slider on password page (end)

});