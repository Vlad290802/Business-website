$(document).ready(function(){
    $('.promo__carousel').slick({
      dots: true,
      speed: 900,
      fade: true,
      cssEase: 'linear',
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/leftsolid.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/rightsolid.svg"></button>'
    });
  });

  $(document).ready(function(){
    $('.brunch__inner').slick({
      dots: false,
      speed: 1000,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left-solid.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/right-solid.png"></button>'
    });
  });
