//! Ejercicio 1.
function conversorCelsiusAFahrenheit() {
  const celsius = prompt("Ingresa la temperatura en Celsius");
  const fahrenheit = (celsius * 9) / 5 + 32;
  console.log(celsius + "° celsius equivalen a: " + fahrenheit + "F.");
}

// conversorCelsiusAFahrenheit();

//! Ejercicio 2.
function esMayorDeEdad(nombre, edad) {
  /* if (edad >= 18) {
    console.log(nombre + " eres mayor de edad, puedes solicitar el permiso.");
  } else {
    console.log(
      nombre + " no eres mayor de edad, no puedes solicitar el permiso."
    );
  } */
  //! Operador ternario.

  console.log(
    edad >= 18
      ? nombre + " eres mayor de edad, puedes solicitar el permiso."
      : nombre + " eres menor de edad, no puedes solicitar el permiso."
  );
}

//esMayorDeEdad("Mario", 15);

//! Ejercicio 3.

function promedio5Numeros(num1, num2, num3, num4, num5) {
  const suma = num1 + num2 + num3 + num4 + num5;
  const promedio = suma / 5;
  console.log(
    promedio >= 70
      ? "Aprobaste,tu promedio es de: " + promedio
      : "No aprobaste,tu promedio es de: " + promedio
  );
}

//promedio5Numeros(100, 100, 50, 50, 50);

//! Ejercicio 4.

function adivinaElNumero() {
  const numeroSecreto = Math.ceil(Math.random() * 10);
  var intentos = 0;
  while (intentos < 3) {
    var numeroUsuario = Number(prompt("Adivina el número generado"));

    if (numeroSecreto === numeroUsuario) {
      break;
    }

    console.log(
      numeroSecreto > numeroUsuario
        ? "El número generado es mayor a " + numeroUsuario
        : "El número generado es menor a " + numeroUsuario
    );
    intentos++;
  }
  console.log(
    intentos === 3
      ? "Perdiste, el número secreto era: " + numeroSecreto
      : "Ganaste, el número secreto era: " + numeroSecreto
  );
}

// adivinaElNumero();

//! Ejercicio 5
function primerosNumerosPares(numero) {
  var salida = "";
  for (var i = 1, contador = 0; contador < numero; i++) {
    if (i % 2 === 0) {
      salida += i + ", ";
      console.log(i);
      contador++;
    }
  }
  console.log(salida);
}

// primerosNumerosPares(10);

//! Ejercicio 6
function imparesEntreInicioYFin(inicio, fin) {
  for (var i = inicio; i <= fin; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

// imparesEntreInicioYFin(5, 9);

//! Ejercicio 7
function generarTablaMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    console.log(numero + " * " + i + " = " + numero * i);
  }
}

//generarTablaMultiplicar(30);

//! Ejercicio 8
function ordenarArray(array) {
  console.log(
    array.sort(function (a, b) {
      return a - b;
    })
  );
}

//ordenarArray([2, 8, 3, 1, 19, 100, 10000000]);


