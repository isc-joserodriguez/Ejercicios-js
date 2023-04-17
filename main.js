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

