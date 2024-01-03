// 반응형 웹 햄버거 메뉴 클릭 시 메뉴 펼침, 숨김 처리

const toggleBtn = document.querySelector('.hamberger');
const menu = document.querySelector('.sitemap');
const closeBtn = document.querySelector('.hamberger img');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  closeBtn.classList.toggle('active');
});


//메뉴 x 클릭 시 메뉴 숨김 처리

const sitemapAll = document.querySelector('.sitemap');
const closeXBtn = document.querySelector('.sitemap-close-btn');
closeXBtn.addEventListener('click', () => {
  sitemapAll.classList.remove('active');
});

// 스냅샷 a 잠가두기  !!! 꼭 해야함 >> 나중에 페이지 마련되면 다시 ON
 //   const snapAlla = document.querySelector('.toons-snapshots a');


  //  snapAlla.removeClass('active');





// 탭메뉴 

let tabMenu = $('.tabmenu li');
let tabContent = $('.tabcontent > div');
tabMenu.click(function (e) {
  e.preventDefault();
  tabMenu.removeClass('active');
  $(this).addClass('active');
  let target = $(this).find('a').attr('href');
  tabContent.removeClass('active');
  $(target).addClass('active');
});







//슬라이드 4개





// 슬라이드 1개 큰거



document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.querySelector(".webs-detail-plan-win .prev");
  const nextBtn = document.querySelector(".webs-detail-plan-win .next");
  const slideWrap = document.querySelector(".webs-detail-plan-wrap");
  // const nowSlideLength = document.querySelector(".webs-detail-plan-wrap");
  let currentIndex = 0;
  let intervalId;


      // 추가된 부분: 슬라이드의 너비와 개수를 이용하여 전체 길이 계산
      const slides = document.querySelectorAll(".webs-detail-plan-wrap > li");
      const slideWidth = slides[0].offsetWidth;
      const totalSlides = slides.length;
      const totalWidth = slideWidth * totalSlides;

      function updateSlide() {
        const newTransformValue = -currentIndex * slideWidth + "px";
        slideWrap.style.transform = "translateX(" + newTransformValue + ")";
      }

      function startInterval() {
        intervalId = setInterval(function () {
          if (currentIndex < totalSlides - 1) {
            currentIndex++;
          } else {
            currentIndex = 0;
          }
          updateSlide();
        }, 4000); // 4초마다 자동 전환
      }

      function stopInterval() {
        clearInterval(intervalId);
      }

      nextBtn.addEventListener("click", function () {
        stopInterval();
        if (currentIndex < totalSlides - 1) {
          currentIndex++;
        } else {
          currentIndex = 0;
        }
        updateSlide();
        startInterval();
      });

      prevBtn.addEventListener("click", function () {
        stopInterval();
        if (currentIndex > 0) {
          currentIndex--;
        } else {
          currentIndex = totalSlides - 1;
        }
        updateSlide();
        startInterval();
      });

      // 마우스 이벤트 처리
      const sliderContainer = document.querySelector(".webs-detail-plan-win");

      sliderContainer.addEventListener("mouseenter", function () {
        stopInterval();
      });

      sliderContainer.addEventListener("mouseleave", function () {
        startInterval();
      });

      // 초기 시작
      startInterval();
    });



/*
    nextBtn.addEventListener("click", function () {
      clearInterval(intervalId);
      if (currentIndex < 3) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateSlide();
      startInterval();
    });

    prevBtn.addEventListener("click", function () {
      clearInterval(intervalId);
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = 3;
      }
      updateSlide();
      startInterval();
    });

    function updateSlide() {
      // slideWrap.style.width = ;
      const newTransformValue = -currentIndex * 1280 + "px";
      slideWrap.style.transform = "translateX(" + newTransformValue + ")";
    }

    function startInterval() {
      intervalId = setInterval(function () {
        if (currentIndex < 3) {
          currentIndex++;
        } else {
          currentIndex = 0;
        }
        updateSlide();
      }, 4000); // 4초마다 자동 전환
    }

    // 초기 시작
    startInterval();
  });
  */