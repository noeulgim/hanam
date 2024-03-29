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
      slide: 'div:not(div.slick-line-hide)',        //슬라이드 되어야 할 태그
      infinite : true,     //무한 반복 옵션
      slidesToShow : 9,        // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
      speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
      arrows : true,         // 옆으로 이동하는 화살표 표시 여부
      dots : false,         // 스크롤바 아래 점으로 페이지네이션 여부
      autoplay : false,            // 자동 스크롤 사용 여부
      autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
      pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
      vertical : false,        // 세로 방향 슬라이드 옵션
      prevArrow : "<img src='./assets/img/slick/favorite_arrow.png'>",
      nextArrow : "<img src='./assets/img/slick/favorite_arrow.png'>",
      draggable : true,     //드래그 가능 여부
      responsive: [ // 반응형 웹 구현 옵션
        {
          breakpoint: 960, //화면 사이즈 960px
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768, //화면 사이즈 768px
          settings: {
            slidesToShow: 5
          }
        }
      ]

    });
});
