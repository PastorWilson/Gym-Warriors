const html = document.querySelector('html')
const chk = document.getElementById('chk')

  chk.addEventListener('change', function ()  {
  html.classList.toggle('dark')
  })

  let slides2 = document.querySelectorAll(".imgs");
  let index2 = 0;

  function nextr2(){
    slides2[index2].classList.remove('active');
    index2 = (index2 + 1) % slides2.length;
    slides2[index2].classList.add('active');
  }
  function prev2(){
    slides2[index2].classList.remove('active');
    index2 = (index2 - 1) % slides2.length;
    slides2[index2].classList.add('active');
  }

  
let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


setInterval(next, 8000);

    
