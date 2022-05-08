export class Class {
    constructor({
        name,
        video = ""
    }) {
        this._name = name;
        this.video = video;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

export default Class;