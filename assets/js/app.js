// Definimos el constructor Persona
function Persona(primerNombre,edad,genero) {
    this.primerNombre = primerNombre;
    this.edad         = edad;
    this.genero       = genero;
}

Persona.prototype.obtDetalles = function() {
  return "Nombre: "   + this.primerNombre +
          "Edad: "    + this.edad +
          "Genero: "  + this.genero;
};

function Estudiante(primerNombre, edad,genero, curso, grupo) {
  Persona.call(this, primerNombre,edad,genero);
  this.curso = curso;

  this.grupo=grupo;
};

Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;

// Mostrar el método "diHola"
Estudiante.prototype.registrar = function(){
  return ("Nombre: "  + this.primerNombre +
          " Edad: "    + this.edad +
          "Genero: "  + this.genero+
          "Curso: "   + this.curso+
          "Grupo: "   + this.grupo + ".");
};

function Profesor(primerNombre, edad,genero, asignatura, nivel) {
  Persona.call(this, primerNombre,edad,genero);
  this.asignatura = asignatura;
  this.nivel=nivel;
};

Profesor.prototype = Object.create(Persona.prototype);
Profesor.prototype.constructor = Profesor;


Profesor.prototype.asignar = function(){
  return ("Nombre: "  + this.primerNombre +
          "Edad: "    + this.edad +
          "Genero: "  + this.genero+
          "Asignatura: "   + this.asignatura+
          "Nivel: "   + this.nivel + ".");
};
// Ejemplos de uso
var loginButton = document.getElementById("enviar");
loginButton.addEventListener('click',function() {
var nombre  = document.getElementById("nombre").value;
var edad    = document.getElementById("edad").value;
var genero  = document.getElementById("genero").value;
var curso   = document.getElementById("curso").value;
var grupo   = document.getElementById("grupo").value;
var asignatura=document.getElementById("asignatura").value;
var nivel   = document.getElementById("nivel").value;

var persona1    = new Persona(nombre, edad,genero);
var estudiante1 = new Estudiante(nombre, edad,genero,curso, grupo);
var profesor1   = new Profesor(nombre, edad,genero,asignatura, nivel);

var elemento    = document.createElement("div");
elemento.classList.add("un-paciente");
var elemento2   = document.createElement("div");
elemento2.classList.add("un-paciente");
var elemento3   = document.createElement("div");
elemento3.classList.add("un-paciente");
var contenido1  = document.createTextNode(persona1.obtDetalles());
var contenido2  = document.createTextNode(estudiante1.registrar());
var contenido3  = document.createTextNode(profesor1.asignar());
elemento2.appendChild(contenido1);
elemento.appendChild(contenido2);
elemento3.appendChild(contenido3);

var padre=document.getElementById("datos");
 padre.appendChild(elemento2);
 padre.appendChild(elemento);
 padre.appendChild(elemento3);

 });
