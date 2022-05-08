//Creamos la clase de "curso"
class Course {
    //Aca como un unico parametro recibe un objeto, y del objeto saca las props que necesita
    constructor({
        name,
        classes = [],
        //Si queremos podemos definir el valor de una de las propiedades de los objesto 
        //de una vez, si el constructor no recibe el parametro, pone el valor que le pasamos
    }) {
        this._name = name;
        /*Por buenas practicas, al declarar un atributo con _myAtributo
        los demas desarrolladores sabram que es un atributo "privado" */
        this.classes = classes;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name=newName;
    }
}

export default Course;