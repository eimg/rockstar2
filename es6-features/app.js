class Animal {
    constructor(legs, wings) {
        this.legs = legs;
        this.wings = wings;
    }

    walk() {
        return "Walking";
    }
}

class Dog extends Animal {
    
}

var dog = new Animal(2, 0);
console.log( dog.walk() );
