var hamberger = document.querySelector('.hamberger');
var times = document.querySelector('.times');
var close = document.querySelector('.close');
hamberger.addEventListener('click', function() {
  document.getElementById("idd").classList.add('open');
})


times.addEventListener('click', function() {
  document.getElementById("idd").classList.remove('open');
})
close.addEventListener('click', function() {
  document.getElementById("idd").classList.remove('open');
})
