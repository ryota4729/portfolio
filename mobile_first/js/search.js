"use script";
{

$(document).ready(function(){
  $('.contents_slide ul').slick({
    autoplay: true, 
    dots: true,
    infinite: true,
    arrows: true,
    swipe: false,
    touchMove: false,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
});
 
const btn = document.querySelector(".btn");
const btnConditions = document.querySelector(".btn.conditions");
const carNameList = document.querySelector(".car_name_list");
const carNameListConditions = document.querySelector(".car_name_list.conditions");
const name = document.querySelector(".name");
const type = document.querySelector(".type");
const price = document.querySelector(".price");
const conditions = document.querySelector(".conditions");
const selectsName = document.querySelector(".selects.name");
const selectsType = document.querySelector(".selects.type");
const selectsPrice = document.querySelector(".selects.price");
const selectsConditions = document.querySelector(".selects.conditions");
const closeBtnName = document.querySelector(".close_btn.name");
const closeBtnType = document.querySelector(".close_btn.type");
const closeBtnPrice = document.querySelector(".close_btn.price");
const closeBtnConditions = document.querySelector(".close_btn.conditions");
const selectsListPrice = document.querySelector(".selects_list_price");
const selectsLabel = document.querySelectorAll(".selects_list_price label");
const selectsSelect = document.querySelectorAll(".selects_list_price select");
let carJudge = true;
let conditionsJudge = true;

selectsLabel.forEach(label =>{
selectsSelect.forEach(select =>{
  label.addEventListener("click", () =>{
    if (label.className === "label"){
      label.className = "";
      select.className = "";
    } else {
      label.className = "label";
      select.className = "select";
    }
  });
  });
});

btn.addEventListener("click", ()=> {
  if (carJudge === true){
    carNameList.classList.remove("hidden");
    carJudge = false;
  }else{
    carNameList.classList.add("hidden");
    carJudge = true;
  }
});

btnConditions.addEventListener("click", ()=> {
  if (conditionsJudge === true){
    carNameListConditions.classList.remove("hidden");
    conditionsJudge = false;
  }else{
    carNameListConditions.classList.add("hidden");
    conditionsJudge = true;
  }
});

name.addEventListener("click", ()=> {
  selectsName.classList.remove("hidden");
});

closeBtnName.addEventListener("click", ()=> {
  selectsName.classList.add("hidden");
});

type.addEventListener("click", ()=> {
  selectsType.classList.remove("hidden");
});

closeBtnType.addEventListener("click", ()=> {
  selectsType.classList.add("hidden");
});

price.addEventListener("click", ()=> {
  selectsPrice.classList.remove("hidden");
});

closeBtnPrice.addEventListener("click", ()=> {
  selectsPrice.classList.add("hidden");
});

conditions.addEventListener("click", ()=> {
  selectsConditions.classList.remove("hidden");
});

closeBtnConditions.addEventListener("click", ()=> {
  selectsConditions.classList.add("hidden");
});


const offcial = document.querySelector(".footer_item.offcial");
const footer = document.querySelector(".footer");
let footerJudge = true;

offcial.addEventListener("click", ()=> {
  if (footerJudge === true){
    footer.classList.add("open");
    footerJudge = false;
  }else{
    footer.classList.remove("open");
    footerJudge = true;
  }
});

$("#price_start").on('click', function () {
  $('#price_start').addClass('select');
});
$("#price_end").on('click', function () {
  $('#price_end').addClass('select');
});
$("#price_start2").on('click', function () {
  $('#price_start2').addClass('select');
});
$("#price_end2").on('click', function () {
  $('#price_end2').addClass('select');
});
$("#distance_start").on('click', function () {
  $('#distance_start').addClass('select');
});
$("#distance_end").on('click', function () {
  $('#distance_end').addClass('select');
});
$("#year_start").on('click', function () {
  $('#year_start').addClass('select');
});
$("#year_end").on('click', function () {
  $('#year_end').addClass('select');
});

}
