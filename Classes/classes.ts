class Vehicle {
    // drive(): void {
    //     console.log(
    //         'Chugga chugga'
    //     );
    // }
    // Property
    // color: string;

    constructor (public color: string) {}

    protected honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle('orange');
// vehicle.honk();
console.log(vehicle.color)

// Overides method of child class 
class Bar extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    private drive(): void {
        console.log('vroom');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

// Name classes with capital letter and when we have an instance of that 
// class we will use same word but lowercase
// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const bar = new Bar(4, 'red');
bar.startDrivingProcess();
bar.honk();