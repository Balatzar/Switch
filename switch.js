if (localStorage.getItem('css')) {
  swapStyleSheet(localStorage.getItem('css'));
}

function swapStyleSheet(sheet){
  document.getElementById('pagestyle').setAttribute('href', sheet);
  localStorage.setItem('css', sheet);
}