
const toggleBtn = document.querySelector('.hamberger');
const menu = document.querySelector('.sitemap');
const closeBtn = document.querySelector('.hamberger img');

// 반응형 웹 햄버거 메뉴 클릭 시 메뉴 펼침, 숨김 처리
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  closeBtn.classList.toggle('active');
});