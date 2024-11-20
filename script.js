    
// Variável para controlar o estado do clique no botão "Yes"
let confirmState = false;

function confirmYes(button) {
    if (!confirmState) {
        // Primeira etapa: Perguntar confirmação
        let res = document.getElementById('res')
        res.textContent = "Are you sure?";
        confirmState = true;
    } else {
        // Segunda etapa: Aceitar e exibir mensagem
        alert('You accepted to date me! I love you, my darling!')
        confirmState = false; // Reseta o estado
        res.textContent=''
    }
}


function avoid(t) {
  var btn = t;
  btn.style.position = "absolute";
  btn.style.bottom = geraPosicao(10, 90);
  btn.style.left = geraPosicao(10, 90);
  console.log("Oops, I dodged it");
}

function geraPosicao(min, max) {
  return Math.random() * (max - min) + min + "%";
}
