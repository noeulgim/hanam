$(function(){
  var boardMenu = $('.board-top > ul > li');
  $(boardMenu).each(function(){
    $(this).click(function(){
      $(boardMenu).removeClass('active');
      $(this).addClass('active');
      $(boardMenu).next('div').removeClass('view-active');
      $(this).next('div').addClass('view-active');
    });
  });

  var lnb = $('.lnb-wrap');
  var gnb = $('.gnb-wrap');
  var gnbBtn = $('.gnb-btn');
  gnbBtn.each(function(){
    $(this).mouseenter(function(){
      $(this).addClass('gnb-active');
      var gnbId = $(this).attr('id');
      $(this).find('.lnb-wrap').addClass('lnb-active');
      var lnbHeight = $(this).find('.lnb-wrap').height();
    }).mouseleave(function(){
      gnbBtn.removeClass('gnb-active');
      $(this).find('.lnb-wrap').removeClass('lnb-active');
    });
  });

  $('.swiper-next.main').click(function(){
    $('.swiper-button-next.main').trigger('click');
  });
  $('.swiper-prev.main').click(function(){
    $('.swiper-button-prev.main').trigger('click');
  });
  $('.swiper-next.prom').click(function(){
    $('.swiper-button-next.prom').trigger('click');
  });
  $('.swiper-prev.prom').click(function(){
    $('.swiper-button-prev.prom').trigger('click');
  });
  $('.swiper-next.f-banner').click(function(){
    $('.swiper-button-next.f-banner').trigger('click');
  });
  $('.swiper-prev.f-banner').click(function(){
    $('.swiper-button-prev.f-banner').trigger('click');
  });

  var familySite = $('.family-site');
  $('.gnb button').click(function(){
    familySite.addClass('on');
  });
  $('.family-site button').click(function(){
    familySite.removeClass('on');
  })

  $('.side-list > ul > li.more > a').each(function(){
    var count = 0;
    $(this).click(function(){
      if( count == 0 ) {
        $('.side-list > ul > li.more').removeClass('active');
        $(this).parent('.more').addClass('active');
        count = 1;
      }else {
        $(this).parent('.more').removeClass('active');
        count = 0;
      }
    });
    $('.list-in > ul > li.more > a').each(function(){
      var count = 0;
      $(this).click(function(){
        if( count == 0 ){
          $('.list-in > ul > li.more').removeClass('active');
          $(this).parent('.more').addClass('active');
          count = 1;
        }else {
          $(this).parent('.more').removeClass('active');
          count = 0;
        }
      });
    });

    var count = 0;
    $('.close-btn').click(function(){
      if( count == 0 ){
        $('.title-box').addClass('off');
        count = 1;
      }else{
        $('.title-box').removeClass('off');
        count = 0;
      }
    });
    $('.right button').click(function(){
      if(count == 0){
        $('.text-bubble').addClass('on');
        count = 1;
      }else{
        $('.text-bubble').removeClass('on');
        count = 0;
      }
    })
  });
  // ------------------------swiper---------------------------
  var swiperMain = new Swiper(".mainSwiper", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    loop: true,
    loopAdditionalSlides: 1,
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next.main",
      prevEl: ".swiper-button-prev.main"
    }
  });

  var swiperProm = new Swiper(".promSwiper", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    loop: true,
    loopAdditionalSlides: 1,
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next.prom",
      prevEl: ".swiper-button-prev.prom"
    }
  });

  var swiperFbanner = new Swiper(".f-bannerSwiper", {
    direction: "vertical",
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    loop: true,
    loopAdditionalSlides: 1,
    speed: 500,
    navigation: {
      nextEl: ".swiper-button-next.f-banner",
      prevEl: ".swiper-button-prev.f-banner"
    }
  });

  var sw1 = 0;
  $('.btn-pause-main').click(function(){
    if(sw1==0){
        $(this).addClass('on');
        swiperMain.autoplay.stop();
        sw1 = 1;
    }else{
        $(this).removeClass('on');
        swiperMain.autoplay.start();
        sw1 = 0;
    }
  });
  var sw2 = 0;
  $('.btn-pause-prom').click(function(){
    if(sw2==0){
        $('.btn-pause-prom').addClass('on');
        swiperProm.autoplay.stop();
        sw2 = 1;
    }else{
        $('.btn-pause-prom').removeClass('on');
        swiperProm.autoplay.start();
        sw2 = 0;
    }
  });
  var sw3 = 0;
  $('.btn-pause-f-banner').click(function(){
    if(sw2==0){
        $(this).addClass('on');
        swiperFbanner.autoplay.stop();
        sw2 = 1;
    }else{
        $(this).removeClass('on');
        swiperFbanner.autoplay.start();
        sw2 = 0;
    }
  });

    $('.slick-slider').slick({
      slide: 'div:not(div.slick-line-hide)',        //???????????? ????????? ??? ??????
      infinite : true,     //?????? ?????? ??????
      slidesToShow : 9,        // ??? ????????? ????????? ????????? ??????
      slidesToScroll : 1,        //????????? ????????? ????????? ????????? ??????
      speed : 500,     // ?????? ?????? ????????? ?????? ?????? ??????????????? ????????? ??????(ms)
      arrows : true,         // ????????? ???????????? ????????? ?????? ??????
      dots : false,         // ???????????? ?????? ????????? ?????????????????? ??????
      autoplay : false,            // ?????? ????????? ?????? ??????
      autoplaySpeed : 2000,         // ?????? ????????? ??? ???????????? ??????????????? ????????? ?????? (ms)
      pauseOnHover : true,        // ???????????? ??????    ??? ????????? ???????????? ???????????? ????????? ??????
      vertical : false,        // ?????? ?????? ???????????? ??????
      prevArrow : "<img src='./assets/img/slick/favorite_arrow.png'>",
      nextArrow : "<img src='./assets/img/slick/favorite_arrow.png'>",
      draggable : true,     //????????? ?????? ??????
      responsive: [ // ????????? ??? ?????? ??????
        {
          breakpoint: 960, //?????? ????????? 960px
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768, //?????? ????????? 768px
          settings: {
            slidesToShow: 5
          }
        }
      ]

    });
});
