/**
 * class name = car
 * attributes: name - color- pice - speed- moel
 * methods: -get car information
 * - get car age
 */
class Car{
    constructor(name, color, price, speed, model)
    {
        this.name = name
        this.color = color
        this.price = price
        this.speed = speed
        this.model = model
    }
    getInfo()
    {
        if(this.name === undefined || this.color === undefined ||
            this.price === undefined || this.speed === undefined || this.model === undefined)
            {
                return 'Please Fill Data ...'
            }
            else{
        return `${this.name} Car\nName: ${this.name}
        \nPrice: ${this.price}$\nColor: ${this.color}
        \nSpeed: ${this.speed}Km/h\nModel:${this.model}`
    }
}
//get age
    getAge(){
        const CurrYear = new Date().getFullYear()
        const carAge = CurrYear - this.model
        return `Car Age is ${carAge} years`
    }
}
const car1 = new Car( 'siat','gkkgkg', 2234, 2000, 2000)
const car2 = new Car( 'ford', 'black', 30049, 2000, 2020)
console.log(car1.getInfo())
console.log(car2.getAge())