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
  $('.news_list').slick({
    autoplay: true, 
    dots: true,
    infinite: true,
    arrows: true,
    swipe: false,
    touchMove: false,
  });
});

$(document).ready(function(){
  $('.topics_list').slick({
    autoplay: true, 
    dots: true,
    infinite: true,
    arrows: true,
    swipe: false,
    touchMove: false,
  });
});

$(document).ready(function(){
  $('.service_list').slick({
    autoplay: true, 
    dots: true,
    infinite: true,
    arrows: true,
    swipe: false,
    touchMove: false,
  });
});

let shin_koiwa = false;
let ichikawa = false;
let chiba = false;
let narita = false;
let togane = false;
let mobara = false;

$('.shin_koiwa').on("click", function(){
  if (shin_koiwa === false){
    $('.shin_koiwa').addClass('open');
    shin_koiwa = true;
  }else{
    $('.shin_koiwa').removeClass('open');
    shin_koiwa = false;
  }
});
$('.ichikawa').on("click", function(){
  if (ichikawa === false){
    $('.ichikawa').addClass('open');
    ichikawa = true;
  }else{
    $('.ichikawa').removeClass('open');
    ichikawa = false;
  }
});
$('.chiba').on("click", function(){
  if (chiba === false){
    $('.chiba').addClass('open');
    chiba = true;
  }else{
    $('.chiba').removeClass('open');
    chiba = false;
  }
});
$('.narita').on("click", function(){
  if (narita === false){
    $('.narita').addClass('open');
    narita = true;
  }else{
    $('.narita').removeClass('open');
    narita = false;
  }
});
$('.togane').on("click", function(){
  if (togane === false){
    $('.togane').addClass('open');
    togane = true;
  }else{
    $('.togane').removeClass('open');
    togane = false;
  }
});
$('.mobara').on("click", function(){
  if (mobara === false){
    $('.mobara').addClass('open');
    mobara = true;
  }else{
    $('.mobara').removeClass('open');
    mobara = false;
  }
});


 
}


