class Student {
    ecole = 'victor hugo' // propriete

    constructor (firstname, lastname){
        this.firstname = firstname
        this.lastname = lastname
    }
    setNotes(note){
        this.note = note
    }
}

const john = new Student('john', 'dkd')
const jahn = new Student('jahn', 'dkdd')
john.setNotes([10, 10, 9])
john.setNotes([10, 18, 10])
console.log(john,jahn)