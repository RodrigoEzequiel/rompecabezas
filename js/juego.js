var grilla = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

var posicionVacia = {
  fila:2,
  columna:2
};

function chequearSiGano(){
  if (grilla[0][0]==1 && grilla[0][1]==2 &&grilla[0][2]==3 &&
      grilla[1][0]==4 && grilla[1][1]==5 &&grilla[1][2]==6 && 
      grilla[2][0]==7 && grilla[2][1]==8 &&grilla[2][2]==9){
      return true;  
  }
    else{
    return false;
    }
}

function mostrarCartelGanador(){
    alert("ganaste!!")
}

function intercambiarPosiciones(fila1, columna1, fila2, columna2){
  var Imagen =  document.getElementById("img"+grilla[fila2][columna2]);
  var Vacio =  document.getElementById("img"+grilla[fila1][columna1]);

  var ClonVacio = Vacio.cloneNode(true);
  var ClonImagen = Imagen.cloneNode(true);

  var padre = Imagen.parentNode;

  padre.replaceChild(ClonImagen,Vacio);
  padre.replaceChild(ClonVacio,Imagen);

  grilla[fila1][columna1] = grilla[fila2][columna2];
  grilla[fila2][columna2] = 9; 
}

function actualizarPosicionVacia(nuevaFila,nuevaColumna){
  posicionVacia.fila = nuevaFila;
  posicionVacia.columna = nuevaColumna;
}


function posicionValida(fila,columna){
  if (fila<=2 && fila>=0 && columna>=0 && columna<=2){
    return true;
  }
    else{
      return false;
    }
}

function moverEnDireccion(direccion){

  var nuevaFilaPiezaVacia;
  var nuevaColumnaPiezaVacia;


  if(direccion == 40){
    nuevaFilaPiezaVacia = posicionVacia.fila-1;
    nuevaColumnaPiezaVacia = posicionVacia.columna;
  }

  else if (direccion == 38) {
    nuevaFilaPiezaVacia = posicionVacia.fila+1;
    nuevaColumnaPiezaVacia = posicionVacia.columna;

  }

  else if (direccion == 39) {
    // Completar
    nuevaFilaPiezaVacia = posicionVacia.fila;
    nuevaColumnaPiezaVacia = posicionVacia.columna-1;

  }

  else if (direccion == 37) {
    // Completar
    nuevaFilaPiezaVacia = posicionVacia.fila;
    nuevaColumnaPiezaVacia = posicionVacia.columna+1;
  }

  // Se chequea si la nueva posición es válida, si lo es, se intercambia 
  if (posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)){
    intercambiarPosiciones(posicionVacia.fila, posicionVacia.columna,
    nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
    actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
  }

}


function mezclarPiezas(veces){
  if(veces<=0){return;}
  var direcciones = [40, 38, 39, 37];
  var direccion = direcciones[Math.floor(Math.random()*direcciones.length)];
  moverEnDireccion(direccion);

  setTimeout(function(){
    mezclarPiezas(veces-1);
  },100);
}

function capturarTeclas(){
  document.body.onkeydown = (function(evento) {
    if(evento.which == 40 || evento.which == 38 || evento.which == 39 || evento.which == 37){
      moverEnDireccion(evento.which);

      var gano = chequearSiGano();
      if(gano){
        setTimeout(function(){
          mostrarCartelGanador();  
        },500);
      } 
      evento.preventDefault();
    }
  })
}

function iniciar(){
  mezclarPiezas(60);
  capturarTeclas();
}


iniciar();

///////////////////////////////////////
////Rodrigo Ezequiel Delascio  ♥  /////
///rodrigo_ezequiel666@hotmail.com/////
//https://github.com/RodrigoEzequiel///
///////////////////////////////////////
