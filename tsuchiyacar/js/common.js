"use script";
{
const nav = document.getElementById("nav");
const navClick = document.getElementById("nav_click");

navClick.addEventListener("click", () => {
  if (nav.className === 'open'){
    nav.className = '';
    navClick.className = '';
  } else {
    nav.className = 'open';
    navClick.className = 'spin';
  }
});

$(document).ready(function(){
  $('.news_list ').slick({
    autoplay: true, 
    dots: true,
    infinite: true,
    arrows: true,
    swipe: false,
    touchMove: false,
  });
});


$(document).ready(function(){
  $('.topics_list ').slick({
    autoplay: true, 
    dots: true,
    infinite: true,
    arrows: true,
    swipe: false,
    touchMove: false,
  });
});

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

// $(document).ready(function(){
//   $('.service_list ').slick({
//     autoplay: true, 
//     dots: true,
//     infinite: true,
//     arrows: true,
//     swipe: false,
//     touchMove: false,
//   });
// });

$(function() {
  $(window).scroll(function(){
      var dy = $(this).scrollTop();
      console.log(dy);
      if(dy > 1800){
        $('.contents').addClass('change');
      }if(dy > 1300){
        $('.entry').addClass('change');
      }else{
        $('.entry').removeClass('change');
        $('.contents').removeClass('change');
      }
  }); 
});




}