// Selecciona los elementos del DOM.
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// Valores iniciales para definir el color RGB.
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Muestra los valores iniciales en los elementos <p>.
textoRojo.textContent = `Rojo: ${rojo}`;
textoVerde.textContent = `Verde: ${verde}`;
textoAzul.textContent = `Azul: ${azul}`;

// Función para actualizar el color de fondo de la página.
function actualizarColor() {
  // Actualizamos el color de fondo del body usando los valores de RGB.
  document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

// Agrega event listeners para cada uno de los inputs y actualiza el color de fondo.
inputRojo.addEventListener('input', (e) => {
  rojo = e.target.value; // Actualiza el valor de la variable.
  textoRojo.textContent = `Rojo: ${rojo}`; // Actualiza el texto.
  actualizarColor(); // Llama a la función para actualizar el color de fondo.
});

inputVerde.addEventListener('input', (e) => {
  verde = e.target.value;
  textoVerde.textContent = `Verde: ${verde}`;
  actualizarColor();
});

inputAzul.addEventListener('input', (e) => {
  azul = e.target.value;
  textoAzul.textContent = `Azul: ${azul}`;
  actualizarColor();
});

// Llamamos a la función al cargar la página para aplicar el color inicial.
actualizarColor();
