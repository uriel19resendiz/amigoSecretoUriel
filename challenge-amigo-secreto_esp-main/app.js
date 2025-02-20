const amigos = [];
const lista = document.getElementById('listaAmigos');

function agregarAmigo() {
    const input = document.getElementById('amigo'); 
    const nombre = input.value.trim(); 
     

    if (nombre !== '') {
        amigos.push(nombre);
        input.value = ''; 

        
        lista.innerHTML = '';

        
        amigos.forEach(amigo => {
            const li = document.createElement('li');
            li.textContent = amigo;
            lista.appendChild(li);
        });
    } else {
        alert('Por favor, escribe un nombre antes de añadir.');
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("Introduce un nombre antes de realizar el sorteo");
    }else{
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let nombreGanador = amigos[indiceAleatorio];
        alert(`El amigo secreto es: ${nombreGanador}`);
    }
}
