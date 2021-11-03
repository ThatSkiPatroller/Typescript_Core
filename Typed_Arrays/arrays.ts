// array with nothing but strings
const carMakers: string[] = ['ford', 'toyota', 'chevy']

// no annotations initializing an array like below will give you a type of any 
// and we want to avoid that by using annotations
const carFakers: string[] = [];

const dates = [new Date(), new Date()];

// Two dimensional array
const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());