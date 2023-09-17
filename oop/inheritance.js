class Person{
    constructor(name, age, city){
        this.name = name
        this.age = ge
        this.city = city
    }
    get getInfo(){
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`
    }
}

class Teacher extends Person{
    constructor(name, age, city,lang){
        super(name, age, city)
        this.lang = lang
    }
    getInfo(){
        return `${super.getInfo}, language: ${this.lang}`
    }
    getLanguage(){
        retuen `Name Hospital: ${this.lang}`
    }
}
class Doctor extends Person{
    constructor(name, age, city,name_hosp)
    {
        super(name, age, city)
        this.name_hosp = name_hosp
    }
}

const doctor1 = new Doctor('fjfjjf',56,'fjjfj','jjjd')
console.log(doctor1.getInfo())