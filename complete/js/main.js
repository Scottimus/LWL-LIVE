// class Animal{
//     constructor(name){
//         this._name = name
//     }
//     get name(){
//         return this._name
//     }
//     speak(){
//         console.log(`${this._name} makes a sound`)
//     }
// }
// class Dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} barks`)
//     }    
// }
// class Cat extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} meows`)
//     }    
// }
// class Dragon extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} blows fire`)
//     }
// }

// let simba = new Dog('Simba','Shepard')
// let machi = new Dog('The Machine','Pitbull')
// let salem = new Cat('Salem', 'American Shorthair')
// let gunther = new Dragon('Gunther', 'Black')

// let farm = [simba,machi,salem,gunther]

// for( a of farm ){
//     a.speak()
// }

class Transformer{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    transform(){
        console.log(`${this._name} transforms`)
    }
}

class Autobot extends Transformer{
    constructor(name, role){
        super(name)
        this._role = role
    }
    get role(){
        return this._role
    }
    transform(){
        super.transform()
        console.log(`${this.name} changes to robot mode`)
    }
}

let optimus = new Transformer('Optimus', 'Leader')

let team = [optimus]

//     speak(){
//         console.log(`${this._name} makes a sound`)
//     }