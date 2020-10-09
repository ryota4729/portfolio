"use script";
{

$(document).ready(function(){
  $('.hero_list').slick({
    autoplay: false, 
    dots: false,
    infinite: true,
    arrows: true,
    swipe: true,
    touchMove: true,
  });
});


var $stafftrain = $('#js_staff');
if (!!$stafftrain[0] === true) {
  $stafftrain.slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 5000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '12.5%',
    swipe: false,
    touchMove: false,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false
  });



      var $thisitem;
      var $thiswrap;
      var $this;
      var flag = false;
      var speed = 5000;
      var stafftimer = setInterval(function () {
        if (flag === false) {
          $stafftrain.slick('slickPause');
          $thisitem = $stafftrain.find('.slick-active').eq(1);
          $thiswrap = $thisitem.find('.js_balloonwrap');
          $this = $thiswrap.find('.js_balloon');
          $thiswrap.addClass('open');
          $this.addClass('open');
          flag = true;
          speed = 2000;
        } else if (flag === true) {
          $this.removeClass('open');
          setTimeout(function () {
            $thiswrap.removeClass('open');
            setTimeout(function () {
              $stafftrain.slick('slickPlay');
              flag = false;
              speed = 4700;
            }, 200);
          }, 100);
        }
      }, speed);
     }

const entry = document.querySelector(".entry");
let judge = false;

entry.addEventListener("click", ()=> {
  if (judge === false) {
    $(".entry").css("right", "10px");
    $(".entry_inner").css("display", "none");
    $(".entry_ready").css("display", "block");
    judge = true;
  }else if (judge === true) {
    $(".entry").css("right", "-45px");
    $(".entry_inner").css("display", "block");
    $(".entry_ready").css("display", "none");
    judge = false;
  }
});


}