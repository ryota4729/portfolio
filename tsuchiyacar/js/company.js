"use script";
{

	$(document).ready(function(){
		$('.hero').slick({
			autoplay: false, 
			dots: false,
			infinite: false,
			arrows: false,
			swipe: true,
			touchMove: true,
		});
	});

var $service = $('.service_list');
$(document).ready(function(){
  $service.slick({
    autoplay: false, 
    dots: true,
    infinite: false,
    arrows: false,
    swipe: true,
    touchMove: true,
  });
});

(function () {
	$(function () {
		var $dots = $service.find('.slick-dots');
		var $active = $dots.find('.slick-active');
		var len = 5;
		var statusList = {
			dots: '.slick-dots',
			btnActive: '.slick-active',
			btnNext: 'is_next',
			btnPrev: 'is_prev',
			btnL: 'is_hideleft',
			btnR: 'is_hideright',
			lineM: 'is_middle',
			lineL: 'is_last'
		};
		var thisIndex;
		$active.next().addClass(statusList.btnNext);
		$dots.find('li:gt(1)').addClass(statusList.btnR);

		$service.on('afterChange', function () {
			$dots = $service.find(statusList.dots);
			$active = $service.find(statusList.btnActive);
			thisIndex = $active.index();
			if (thisIndex === 0) {
				$dots.removeClass(statusList.lineM);
			} else if (thisIndex === len) {
				$dots.removeClass(statusList.lineM).addClass(statusList.lineL);
			} else if (thisIndex < len) {
				$dots.removeClass(statusList.lineL).addClass(statusList.lineM);
			}
			$active.removeClass(statusList.btnNext + ' ' + statusList.btnPrev).next().removeClass(statusList.btnR + ' ' + statusList.btnL).addClass(statusList.btnNext);
			$active.prev().removeClass(statusList.btnR + ' ' + statusList.btnL).addClass(statusList.btnPrev);
			if (thisIndex === 0) {
				$dots.find('li:eq(2)').addClass(statusList.btnR).removeClass(statusList.btnNext + ' ' + statusList.btnPrev);
			} else {
				$dots.find('li:lt(' + (thisIndex - 1) + ')').addClass(statusList.btnL).removeClass(statusList.btnNext + ' ' + statusList.btnPrev);
				$dots.find('li:gt(' + (thisIndex + 1) + ')').addClass(statusList.btnR).removeClass(statusList.btnNext + ' ' + statusList.btnPrev);
			}
		});
	});
})();


  $('.office_close').on('click', function () {
		$('.office').removeClass('open');
	});

  $('.ichikawa_btn').on('click', function () {
		$('.ichikawa').addClass('open');
	});
  $('.shinkoiwa_btn').on('click', function () {
		$('.shinkoiwa').addClass('open');
	});
  $('.chibakita_btn').on('click', function () {
		$('.chibakita').addClass('open');
	});
  $('.narita_btn').on('click', function () {
		$('.narita').addClass('open');
	});
  $('.tougane_btn').on('click', function () {
		$('.tougane').addClass('open');
	});
  $('.mobara_btn').on('click', function () {
		$('.mobara').addClass('open');
	});

}