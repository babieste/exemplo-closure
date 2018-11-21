function criarAutocomplete(container, dados){
  function inicializar(){
    let input = document.createElement('input');
    let ul = document.createElement('ul');
    let div = document.createElement('div');
    
    input.onkeyup = mostrarLista;
    
    container.appendChild(input);
    container.appendChild(ul);
    container.appendChild(div);
  }
  
  function mostrarLista(){
    let ul = container.querySelector('ul');
    let input = container.querySelector('input');
    
    ul.innerHTML = '';
    
    if(input.value === ''){
      return;
    }
    
    let itens = filtrarLista(input.value);
    
    for(let item of itens){
      let li = document.createElement('li');
      li.innerHTML = item;
      li.onclick = adicionarItem;
      ul.appendChild(li);
    }
  }
  
  function filtrarLista(string){
    let itensFiltrados = [];
    
    for(let item of dados){
      if(item.search(string) > -1){
        itensFiltrados.push(item);
      }
    }
    
    return itensFiltrados;
  }
  
  function adicionarItem(event){
    let item = event.target.innerText;
    let div = container.querySelector('div');
    let span = document.createElement('span');
    
    span.innerText = item;
    span.onclick = removerItem;
    div.appendChild(span);
  }
  
  function removerItem(event){
    console.log(event);
    let item = event.target;
    let div = container.querySelector('div');
    
  
    div.removeChild(item);
  }
  inicializar();
}

let autocomplete = document.querySelector('div');
let dados = ['banana', 'batata', 'pudim'];

criarAutocomplete(autocomplete, dados);