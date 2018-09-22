// Object Literals, Pseudo Classes and Methods
// #1

let person1 = {
    name: {
        first: 'Kenneth',
        last: 'Till'
    },
    greeting: function sayHello() {
        return `Hello! My name is ${this.name.first} ${this.name.last}.`;
    }
};

let person2 = {
    name: {
        first: 'Caroline',
        last: 'Till'
    },
    greeting: function sayHello() {
        return `Hello! My name is ${this.name.first} ${this.name.last}.`;
    }
};

let person3 = {
    name: {
        first: 'Reid',
        last: 'Till'
    },
    greeting: function sayHello() {
        return `Hello! My name is ${this.name.first} ${this.name.last}.`;
    }
};

let person4 = {
    name: {
        first: 'Davis',
        last: 'Till'
    },
    greeting: function sayHello() {
        return `Hello! My name is ${this.name.first} ${this.name.last}.`;
    }
};

let person5 = {
    name: {
        first: 'Margaret',
        last: 'Waldrop'
    },
    greeting: function sayHello() {
        return `Hello! My name is ${this.name.first} ${this.name.last}.`;
    }
};

//#2

console.log(person1.greeting());
console.log(person2.greeting());
console.log(person3.greeting());
console.log(person4.greeting());
console.log(person5.greeting());

function Person(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}

// #3

Person.prototype.greeting = function() {
    return `Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`;
};

// #4

let p1 = new Person('Kenneth', 'Birmingham', 48);
let p2 = new Person('Caroline', 'Birmingham', 20);
let p3 = new Person('Reid', 'Birmingham', 17);
let p4 = new Person('Davis', 'Birmingham', 12);
let p5 = new Person('Margaret', 'Birmingham', 46);

console.log(p1.greeting());
console.log(p2.greeting());
console.log(p3.greeting());
console.log(p4.greeting());
console.log(p5.greeting());

// #5

class Persons {
    constructor(name, age, city) {
        this.name = name;
        this.city = city;
        this.age = age;
        
    }
    itsMe() {
        return `Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`;
    }
}

let p11 = new Persons('Kenneth', 'Birmingham', 48);
let p12 = new Persons('Caroline', 'Birmingham', 20);
let p13 = new Persons('Reid', 'Birmingham', 17);
let p14 = new Persons('Davis', 'Birmingham', 12);
let p15 = new Persons('Margaret', 'Birmingham', 46);

console.log(p11.itsMe());
console.log(p12.itsMe());
console.log(p13.itsMe());
console.log(p14.itsMe());
console.log(p15.itsMe());

// Inheritance
// #1 & 2

class Vehicles {
    constructor(make, wheels) {
        this.make = make;
        this.wheels = wheels;
       
    }
    aboutVehicle() {
        console.log('********')
       console.log(`My vehicle is a ${this.type}. It is made by ${this.make} and has ${this.wheels}`);
    }
}

// #3

class Trucks extends Vehicles {
    constructor(make, wheels, doors, type) {
        super(make, wheels);
        
        this.doors = doors;
        this.type = type;
    }
    aboutVehicle(type) {
        
        if (type == 'yes') {
            return this.type = 'truck'
        }

        console.log(`My vehicle is a ${this.type}. It is made by ${this.make} and has ${this.wheels}`);
    }
}

//#4

class Sedans extends Vehicles {
    constructor(make, wheels, type, size, mpg) {
        super(make, wheels);
        this.type = type;
        this.size = size;
        this.mpg = mpg;
    }

}

class Motorcyles extends Vehicles {
    constructor(make, wheels, type, steer, doors) {
        super(tpye, make, wheels);
        this.type = type;
        this.steer = steer;
        this.doors = doors;
    }
}

// let vehicle1 = new Trucks('BMW', 4, 2, 'yes') 
// vehicle1.aboutVehicle()


// function car(bed, doors) {
//     if (bed === 'yes') {
//         type = 'truck';
//     }
//     console.log(`I have a ${type}. It has ${doors}`)
// }

// car('yes', 2)


// class Trucks {
//     constructor(make, wheels, doors, type) {
        
//        this.make = make;
//         this.wheels = wheels;
//         this.doors = doors;
//         this.type = type;
//     }
//     aboutVehicle(type) {
       
//         if (type === true) {
            
//            return this.type = 'truck';
           
            
//         }
//         console.log(this.type)
//         console.log(type)
//         console.log('********')
//         console.log(`My vehicle is a ${this.type}. It is made by ${this.make} and has ${this.wheels}`);
//     }
// }

let vehicle1 = new Trucks('BMW', 4, 2, 'yes') 
vehicle1.aboutVehicle()
// vehicle1.aboutVehicle('BMW', 4, 2, 'yes')