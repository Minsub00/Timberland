$(document).ready(function(){
    var swiper = new Swiper(".banner-slide", {
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay:{
        delay:2000,
        disableOnInteraction:false,
    }
    });

    var swiper = new Swiper(".sec3-slide", {
      pagination: {
        el: ".sec3-pagination",
        clickable: true,
      },
      slidesPerView : 2,
      slidesPerGroup: 2,
      loop: true,
      // autoplay:{
      //   delay:1500,
      //   disableOnInteraction:false,
      // }
      breakpoints:{
        800 : {
          spaceBetween: 40,
        },
        600 : {
          spaceBetween: 4,
          slidesPerView : 3,
          slidesPerGroup: 2,
        }
      },
    });

    $('.left-menu li').mouseenter(function(){

      let result = $(this).attr('data-alt');
      $('.sub-menu').removeClass('active')
      $(`#${result}`).addClass('active');
      $(this).children(this).addClass('active');
      $(this).siblings(this).children().removeClass('active');
      

      $('.sub-menu-box').addClass('active');
    });


    $('.sub-menu-box').mouseleave(function(){
      $(this).removeClass('active');
      $('.left').removeClass('active');
    });

    $('#hamburger').click(function(){
      $('.hamburger-menu-wrap').toggleClass('active');
      $('.hamburger-menu').toggleClass('active');
    });

    $('.boot-trigger1 div').click(function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');

      const result = $(this).attr('data-alt');
      $('.trigger1').removeClass('active');
      $(`#${result}`).addClass('active');
    });

    $('.boot-trigger2 div').click(function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');

      const result = $(this).attr('data-alt');
      $('.trigger2').removeClass('active');
      $(`#${result}`).addClass('active');
    });

    $('.boot-trigger3 div').click(function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');

      const result = $(this).attr('data-alt');
      $('.trigger3').removeClass('active');
      $(`#${result}`).addClass('active');
    });
    $('.m-btn').click(function(){
      const menuHas = $(this).parent('.m_menu').hasClass('active');

      if(menuHas == true){
          $(this).parent('.m_menu').removeClass('active');
      }else{
          $(this).parent('.m_menu').addClass('active');
          $(this).parent('.m_menu').siblings().removeClass('active');
      }

  });   
})