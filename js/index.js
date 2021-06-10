
var hamberger = document.querySelector('.hamberger');
var times = document.querySelector('.times');

hamberger.addEventListener('click', function(){
document.getElementById("idd").classList.add('open');
})


times.addEventListener('click', function(){
document.getElementById("idd").classList.remove('open');
})
