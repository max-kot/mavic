import "../../../node_modules/slick-carousel/slick/slick.js";
import $ from "../../../node_modules/jquery/dist/jquery.js";

$(function () {
	$('.slider').slick({
		slidesToShow: 1,
		infinite: false,
		//arrows: true,
		fade: true,
		prevArrow: '<button class="slider__arrow slider__arrow-prev"><svg><use xlink:href="./images/sprite.svg#icons--arrow-prev"></use></svg></button>',
		nextArrow: '<button class="slider__arrow slider__arrow-next"><svg><use xlink:href="./images/sprite.svg#icons--arrow-next"></use></svg></button>',
	});
})