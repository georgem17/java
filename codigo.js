// exercise_2 🧨🧨🧨
function suma(num1, num2) {
    let res = num1 + num2;
    document.querySelector('.sumar').innerHTML = `${res}`;
}
suma(20, 15);


// exercise_3 🧨🧨🧨
const nombres = ['bety', 'antonio', 'bob', 'jack', 'laura', 'luz', 'sol', 'clara', 'anita', 'Pedro'];

let j = 0;
let plantilla = '';

while(j < nombres.length){
    plantilla += `<p>${nombres[j]}</p>`
    j++;
}
console.log(plantilla);

const etqnombress = document.querySelector('.nombres');
etqnombress.innerHTML = plantilla;


// exercise_4 🧨🧨🧨
const peliculas = ['Rambo', 'Legión ', 'ángeles', 'Constantine', 'Gremlins', 'Chucky ', 'Gravity ', 'Hellboy', 'Eli', 'Interestelar'];
const info = {
    nombre: 'Rambo',
    ciudad: 'ATE',
    costodefuncion: '20',
    direccion: 'cineaccion@gmail.com'
};
let p = 0;
let estrenar = '';

while(p < peliculas.length){
    estrenar += `<p>${peliculas[p]}</p>`
    p++;
}
console.log(estrenar);

console.log(info);

const etqpeliculas = document.querySelector('.peliculas');
etqpeliculas.innerHTML = estrenar;
