
  

  const chk = document.getElementById('chk')
  let teste = document.querySelectorAll('.dark')

  chk.addEventListener('change', () => {
  document.body.classList.toggle('dark'); 
  })


let count = 1;
document.getElementById("radio1").checked= true;

setInterval(function(){
    nextImage()
},5000)
  function nextImage(){
    let t =document.querySelectorAll(".img-carrossel")



      document.getElementById("radio"+count).checked= true;
  }


   
    
   

    
