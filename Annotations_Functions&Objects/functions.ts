const add = (a: number, b: number) => {
    return a + b;
};

const subtract = (a: number, b: number) => {
    a - b;
}

function divide (a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b;
}

// void means you are not returning any value
// can return null or undefined
const logger = (message: string): void => {
    console.log(message);
}

// Use never when we never expect a function to return
// anything
const throwError = (message: string): never => {
    throw new Error(message);
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({ date, weather }: { date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);