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
    return `Hey! My name is ${this.name}. I am ${
        this.age
    } years old and live in ${this.city}.`;
};

// #4

let p1 = new Person('Kenneth', 'Birmingham', 48);
let p2 = new Person('Caroline', 'Birmingham', 20);
let p3 = new Person('Reid', 'Birmingham', 17);
let p4 = new Person('Davis', 'Birmingham', 12);
let p5 = new Person('Margaret', 'Birmingham', 44);

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
        return `Hey! My name is ${this.name}. I am ${
            this.age
        } years old and live in ${this.city}.`;
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
        console.log(
            `My vehicle is made by ${this.make} and has ${this.wheels}.`
        );
    }
    vehicleType() {
        return this.type ? 'pickup truck' : 'car';
    }
}

// #3

class Trucks extends Vehicles {
    constructor(type, make, wheels, doors) {
        super(make, wheels);
        this.doors = doors;
        this.type = type;
    }
    aboutVehicle() {
        console.log(
            `My vehicle is a ${this.vehicleType()}. It is made by ${
                this.make
            } and has ${this.wheels} doors.`
        );
    }
}

//#4

class Sedans extends Vehicles {
    constructor(make, wheels, size, mpg) {
        super(make, wheels);
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(
            `My vehicle is a ${this.vehicleType()}. It is made by ${
                this.make
            } and has ${this.wheels} doors.`
        );
    }
    //  small size = true; medium size = false'
    vehicleType() {
        return this.size ? 'small size car' : 'medium size car';
    }
}
class Motorcyles extends Vehicles {
    constructor(make, wheels, hasHandlebars, doors) {
        super(make, wheels);
        this.hasHandlebars = hasHandlebars;
        this.doors = doors;
    }
    aboutVehicle() {
        console.log(
            `My vehicle is a ${this.vehicleType()}. It is made by ${
                this.make
            } and has ${this.wheels} doors.`
        );
    }
    //  hasHandlebars = true; no handlebars = false'
    vehicleType() {
        return this.hasHandlebars ? 'motorcycle' : 'car';
    }
}

let vehicle1 = new Trucks(true, 'Ford', 4, 2);
vehicle1.aboutVehicle();
let vehicle2 = new Sedans('Toyota', 4, true, 25);
vehicle2.aboutVehicle();
let vehicle3 = new Motorcyles('BMW', 2, true, 'no');
vehicle3.aboutVehicle();
