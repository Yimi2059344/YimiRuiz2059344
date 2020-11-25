console.log(" *** Get Api ***");

const url = "https://rickandmortyapi.com/api/character/";


// obtener los datos de la api

const getData = (api) => {

    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
             imprimirDatos(json)
        })
        .catch ((error) => {
            console.log("Error... caray ...", error)
        })

};

let todaData;

// imprimir los resulados 
const  imprimirDatos = (data) => {
    todaData=data;
    validarPaginacion(todaData)

    let = html = "";
  

    data.results.forEach(matachito => {
        

         // pintar los matachivos 
    html += `<div class="cards">`;
    html += `<div>`;
    html += `<img class="formatoPic" src="${matachito.image}">`;
    html += `</div>`;
    html += `<div class="contenedorTextos">`;
    html += `<small class="txtLabel"> Nombre </Small>`;
    html += `<p class="txtTexto">${matachito.name}</p>`;
    html += `<small class="txtLabel"> Especie </Small>`;
    html += `<p class="txtTexto">${matachito.species}</p>`;
    html += `</div>`;
    html += `</div>`; 
        //console.log ( "Nombre [ " + matachito.name + " ] Especie [ " + matachito.species + " ] pic [ " +  matachito.image +" ]")
        
    });

    document.getElementById("contendedorTodo").innerHTML = html
}




// validar la paginacion 

const validarPaginacion = (data) => {

    if (data.info.prev == null ) {
        console.log("no se puede echar pa'tras ")
        btnPrev.style.display = "none";
        //btnPrevio.disabled = true;
    } else {
        btnPrev.style.display = "block";
        console.log("si existen paginas previas ")
        //btnnext.style.display = "none";
    }

    if (data.info.next == null) {
        btnnext.style.display = "none";
        console.log ("no se puede echar pa' lante ")
    } else {
        btnnext.style.display = "block";
        console.log ("exiten paginas siguientes")

    }
}

// paginacion o navegacion

const btnPrev = document.getElementById("btnPrev");
const btnnext = document.getElementById("btnnext");


btnPrev.addEventListener('click', () => {
    // navegar haciar atras  ...............enviar la url con info.prev
    getData(todaData.info.prev)
})

btnnext.addEventListener('click', () => {
    // navegar haciar adelante  ..................enviar la url con info.next
    getData(todaData.info.next)
})


// consumimos o invocamos la api

getData(url);

/*

// vamos a pintar n cantidad de cards 

let = html = "";
for (let i = 1; i <=21; i++) {
    // pintar la o las cajas
    html += `<div class="cards">`;
    html += `<div>`;
    html += `<img class="formatoPic" src="./ironMan.jpg">`;
    html += `</div>`;
    html += `<div class="contenedorTextos">`;
    html += `<small class="txtLabel"> Nombre </Small>`;
    html += `<p class="txtTexto">Tony Stark </p>`;
    html += `<small class="txtLabel"> Heroe </Small>`;
    html += `<p class="txtTexto">Iron Man </p>`;
    html += `</div>`;
    html += `</div>`;  
}
document.getElementById("contendedorTodo").innerHTML = html



//si existe el usuario validamos la contraseña
if(usuario.contrasena)
diferencias entre != y !==
!= si no es igual ejemp = 123 != 123 
!== si no es identico (formato, tipo de dato) ejemp = 123 !== "123"

*/