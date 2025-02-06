let lista = [];

function agregarAmigo(){
    // nombre = prompt("Pon el nombre");
    // lista.push(nombre);

    const inp = document.getElementById("amigo");
    // Esto va pa los inputs
    if (inp.value != 0){
        lista.push(inp.value);
        Listear(inp.value);
        
        inp.value = "";
    }
    else{
        alert("ERROR: nombre vacio");
    }
    
    console.log(lista);
        
}

function Listear(nombre) {
    const ul = document.getElementById("listaAmigos");
    const hijo = document.createElement("li");
    hijo.innerText = nombre;
    ul.appendChild(hijo);
    
}

function sortearAmigo() {
    if (lista.length == 0){
        alert("ERROR: lista vacia")
        return;
    }
    

    let num = Math.floor(Math.random() * lista.length);
    
    const ulRes = document.getElementById("resultado");
    const hijo = document.createElement("li");
    hijo.innerText = "El amigo sorteado es: " + lista[num];
    ulRes.appendChild(hijo);
    
    BorrarHijos();
}

function BorrarHijos(){
    const ul = document.getElementById("listaAmigos");
    // ul.removeChild(ul.chil);
    
    ul.innerHTML = "";
    // while(ul.hasChildNodes()){
    //     ul.removeChild(ul.firstElementChild);
    // }

    lista.length = 0;
}
