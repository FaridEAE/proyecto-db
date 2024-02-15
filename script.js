class Alumno {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.materiasInscritas = [];
        this.calificaciones = {};
    }
}

let alumnos = [];

function agregarAlumno() {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const edad = document.getElementById('edad').value;

    const alumno = new Alumno(nombre, apellidos, edad);
    alumnos.push(alumno);

    mostrarAlumnos();
    limpiarFormulario();
}

function mostrarAlumnos() {
    const lista = document.getElementById('alumnos-lista');
    lista.innerHTML = '';

    alumnos.forEach(alumno => {
        const alumnoElement = document.createElement('div');
        alumnoElement.classList.add('alumno');
        alumnoElement.innerHTML = `
            <h3>${alumno.nombre} ${alumno.apellidos}</h3>
            <p>Edad: ${alumno.edad}</p>
        `;
        lista.appendChild(alumnoElement);
    });
}

function mostrarFormularioAlta() {
    document.getElementById('formulario-alta').style.display = 'block';
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('edad').value = '';
}
