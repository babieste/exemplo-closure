function criarModal(elemento){
  let modalEstaAberto = false;

  function mostrarModal(){
      if(modalEstaAberto){
        elemento.style.display = 'none';
        modalEstaAberto = false;
      }else{
        elemento.style.display = 'block';
        modalEstaAberto = true;
      }
  }

  return mostrarModal;
}

let modal1 = document.querySelector('#modal1');
let modal2 = document.querySelector('#modal2');
let botao1 = document.querySelector('#botao1');
let botao2 = document.querySelector('#botao2');

botao1.onclick = criarModal(modal1);
botao2.onclick = criarModal(modal2);
