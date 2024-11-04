let imagenes = [
  "img/Zapa1.png",
  "img/Zapa2.png",
  "img/Zapa3.png",
  "img/Zapa4.png",
  "img/Zapa5.png",
  "img/Zapa6.png",
];

let cont = 0;

function atras() {
  if (cont > 0) {
    cont--;
  } else {
    cont = imagenes.length - 1;
  }
  fotoactual();
}
function adelante() {
  if (cont < imagenes.length - 1) {
    cont++;
  } else {
    cont = 0;
  }
  fotoactual();
}
function fotoactual() {
  let contimg = document.getElementById("fotoCarrusel");
  contimg.src = imagenes[cont];
}
