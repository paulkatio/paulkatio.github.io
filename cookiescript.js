const cookie = document.querySelector('.cookie');
const cookieButton = document.querySelector('.cookie-btn');

window.addEventListener('load', function(){
  cookie.classList.add('show');
});

cookieButton.addEventListener('click', function(){
  cookie.classList.remove('show');
  cookie.classList.add('hide');
});
