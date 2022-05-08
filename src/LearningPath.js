class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this._name = name;
        this.courses = courses;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}


export default LearningPath;