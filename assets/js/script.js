let contador = 1;
let api = `https://swapi.dev/api/people/${contador}/`
let prueba = document.getElementById('prueba');
let nuevoarray = [];
let cantidad = parseInt(prompt("Por favor digite el numero de personajes que desea ver"));

while(isNaN(cantidad)){
    alert("usted no digito un numero por favor revise");
    cantidad = parseInt(prompt("Por favor digite nuevamente el numero"))
}
for(let i =1 ; i<=cantidad;i++){
    nuevoarray.push(api = `https://swapi.dev/api/people/${i}/`)
}


const obtener = (nuevoarray)=>{
    let html = "";
    document.getElementById("datos_personajes").innerHTML="";
    nuevoarray.forEach(element => {
      
        
        return fetch(element)
        .then((response)=> response.json())
        .then((json)=>{
           pintar(json,html)
        });
    });
}

const pintar = (data,html)=>{
    let genero = "";
    
    if(data.gender=="female"){
        genero="Femenino"
    }
    else if(data.gender=="male"){
        genero="Masculino"
    }
    else{
        genero="Que rayos es esto!"
    }
    console.log(genero);
    
    html += `<div class="card">`
    html += `<h4>Nombre : ${data.name}</h4>`
    html += `<p>Masa : ${data.mass}</p>` 
    html += `<p>Color de cabello : ${data.hair_color}</p>`
    html += `<p>Color de piel : ${data.skin_color}</p>`
    html += `<p>Color de ojos : ${data.eye_color}</p>` 
    html += `<p>Genero : ${genero}</p>`  
    html += `</div>`
    
     
    

    

    document.getElementById("datos_personajes").innerHTML += html;


}

obtener(nuevoarray);
