//Creamos la clase de "curso"
import Course from "./Courses.js";
import Class from "./Class.js";
import Student from "./Student.js";
import LearningPath from "./LearningPath.js";

//Creamos los cursos
const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
});
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
});

//Creamos los Learningpaths
const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso DataBusiness",
        "Curso Dataviz",
    ],
});

const escuelaVgs = new LearningPath({
    name: "Escuela de Vidweojuegos",
    courses: [
        cursoProgBasica,
        "Curso de Unity",
        "Curso de Unreal",
    ],
})


//Creamos los estudiantes
const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ],
});
console.log(juan2);

const miguelito2 = new Student({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});
console.log(miguelito2)