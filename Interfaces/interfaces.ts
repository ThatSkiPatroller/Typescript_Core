// always use capital letter for interfaces
interface Reportable {
    summary(): string;
}
// interface Vehicle {
//     name: string;
//     year: Date;
//     broken: boolean;
//     summary(): string;
// }


const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const food = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary);
    // console.log(`Name: ${vehicle.name}`);
    // console.log (`Year: ${vehicle.year}`);
    // console.log(`Broken? ${vehicle.broken}`);
};

printSummary(oldCivic);
printSummary(food);