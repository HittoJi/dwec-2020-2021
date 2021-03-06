let lletres = 'TRWAGMYFPDXBNJZSQVHLCKE'.split('');

function validar(dni) {
   if (!isNaN(dni) && dni.length == 8) {
      return true;
   } else {
      return false;
   }
}


function Dni(numeros) {
   this.numeros = numeros;
   /*this.calcularLletra = function (dni) {
      let numero = parseInt(dni) % 23;
      let lletra = lletres[numero];
      return lletra;
      }*/
   this.lletra = this.calcularLletra(this.numeros);
}

Dni.prototype.calcularLletra = function (dni) {
   let numero = parseInt(dni) % 23;
   let lletra = lletres[numero];
   return lletra;
};

/*function calcularLletra(dni) {
   let numero = parseInt(dni) % 23;
   let lletra = lletres[numero];
   return lletra;
}*/
let llistaGenerada = [];
let llistaDNIs = ['1234g678', '12345678', '12345679', '12345670', '12345677'];
// refer en iterables
for (let i = 0; i < llistaDNIs.length; i++) {
   let dni = llistaDNIs[i]
   if (validar(dni))
      llistaGenerada.push(new Dni(dni));
   else
      console.log(`${dni} no és un DNI correcte`);
}

console.log(llistaGenerada);

/*
let lletra = prompt('Dime una lletra:');
let posicio = lletres.indexOf(lletra);
for(let i=0;i<20;i++){
   let base = Math.floor(434782+ Math.random()*3913044)*23;
   dni=base+posicio;
   console.log(calcularLletra(dni));
   //llistaGenerada.push(dni);
   llistaGenerada[i]=dni;
}
*/


(() => {
   "use strict";
   class Sensor {
      constructor() {
         this.activo = false;
         this.element = document.createElement('div');
         this.element.innerHTML = `<span>${this.activo}</span>`;
         this.element.addEventListener('click', function () {
            this.activo = !this.activo;
            this.element.innerHTML = `<span>${this.activo}</span>`;
         })
      }
   }

   document.addEventListener("DOMContentLoaded", function () {
      let sensor = new Sensor();
      document.querySelector('#sensores').appendChild(sensor.element);
   });
})();

  
 