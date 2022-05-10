class Comment {
    constructor({
        content,
        studentName,
        studentRole = "Student"
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes=0;
    }

    publicar(){
        console.log(`${this.studentName}: ${this.studentRole}`);
        console.log(`${this.content} ${this.likes}`);
    }
}

export default Comment;