// Definimos el constructor Persona

 var primerNombre=document.getElementById("nombre").value;
  function Persona(primerNombre) {
  this.primerNombre = primerNombre;
}

// Agregamos un par de métodos a Persona.prototype
Persona.prototype.caminar = function() {
  return "Estoy caminando! ";
};
Persona.prototype.diHola = function(){
  alert("Hola, Soy" + this.primerNombre);
};

// Definimos el constructor Estudiante
function Estudiante(primerNombre, asignatura) {
  // Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se
  // ha establecido correctamente durante la llamada
  Persona.call(this, primerNombre);

  //Inicializamos las propiedades específicas de Estudiante
  this.asignatura = asignatura;
};

// Creamos el objeto Estudiante.prototype que hereda desde Persona.prototype
// Nota: Un error común es utilizar "new Persona()" para crear Estudiante.prototype
// Esto es incorrecto por varias razones, y no menos importante que no le estamos pasando nada
// a Persona desde el argumento "primerNombre". El lugar correcto para llamar a Persona
// es arriba, donde llamamos a Estudiante.
Estudiante.prototype = Object.create(Persona.prototype);    // Vea las siguientes notas

// Establecer la propiedad "constructor" para referencias a Estudiante
Estudiante.prototype.constructor = Estudiante;

// Remplazar el método "diHola"
Estudiante.prototype.diHola = function(){
  return ("Hola, Soy " + this.primerNombre + ". Estoy estudiando " + this.asignatura + ".");
};

// Agregamos el método "diAdios"
Estudiante.prototype.diAdios = function() {
  alert("¡ Adios !");
};

// Ejemplos de uso
var loginButton = document.getElementById("enviar");
loginButton.addEventListener('click',function() {
var nombre= document.getElementById("nombre").value;
var asignatura=document.getElementById("asignatura").value;
var estudiante1 = new Estudiante(nombre, asignatura);
    // muestra "Hola, Soy Carolina. Estoy estudianto Física Aplicada."
var elemento=document.createElement("div");
var contenido=document.createTextNode(estudiante1.diHola());
var cont=document.createTextNode(estudiante1.caminar());
elemento.appendChild(contenido);
elemento.appendChild(cont);
        // imprimir.innerHTML=mostrar.ficha();
var padre=document.getElementById("datos");
   padre.appendChild(elemento);

//estudiante1.caminar();   // muestra "Yo estoy caminando !"
//estudiante1.diAdios();   // muestra "¡ Adios !"
// Comprobamos que las instancias funcionan correctamente
//alert(estudiante1 instanceof Persona);      // devuelve true
//alert(estudiante1 instanceof Estudiante);   // devuelve true
 });
