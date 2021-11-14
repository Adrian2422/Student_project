function getDate() {
  const date = new Date();
  return date.getFullYear();
}

window.onload = function() {
  document.querySelector('.footer__copyrights').innerHTML += getDate();
}