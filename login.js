function verifica() {
  let senha = document.getElementById("senha").value;
  let confirmarSenha = document.getElementById("confirmarSenha").value;

  if (senha == "" || confirmarSenha == "") {
    alert("Os campos nao podem ser vazios");
  } 
  else if (senha != confirmarSenha)
  alert("Senhas não batem uma com a outra");
}

let bntVoltar = document.getElementById("btn-voltar");

bntVoltar.addEventListener("click", () => {
  window.location.href = "index.html";
});

const html = document.querySelector('html')
const chk = document.getElementById('chk')

  chk.addEventListener('change', function ()  {
  html.classList.toggle('dark')
  })
   
    
