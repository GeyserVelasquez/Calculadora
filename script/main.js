var y = 'Inicio de los Calculos'; 
console.log(y);

// function prueba() {
//     for (var i = 1; i < 10; i++) {
//     console.log('Prueba del numero ' + i);
//     // var x = document.getElementById(i);
//     // console.log(x.innerText);
// }
// }

matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// function prueba(){
//     i=5;
//     var a = document.getElementById(i);
//     console.log(a.innerText);
// }

// Obtener todas las etiquetas td
const tds = document.querySelectorAll('td');

console.log(tds);
console.log(tds.length);

// Agregar un evento 'click' listener a cada etiqueta
tds.forEach((td) => {
  td.addEventListener('click', () => {
    // Obtener el texto del td clickeado
    const texto = td.textContent;
    
    // Imprimir el texto en la consola
    console.log(texto);
  });
});
