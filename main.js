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





