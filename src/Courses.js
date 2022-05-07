//Creamos la clase de "curso"
class Course {
    //Aca como un unico parametro recibe un objeto, y del objeto saca las props que necesita
    constructor({
        name,
        classes = [],
        //Si queremos podemos definir el valor de una de las propiedades de los objesto 
        //de una vez, si el constructor no recibe el parametro, pone el valor que le pasamos
    }) {
        this.name = name;
        this.classes = classes;
    }
}

export default Course;