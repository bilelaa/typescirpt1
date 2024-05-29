interface vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

class car implements vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started");
    }
}

const myCar = new car('BMW', 'M5', 2020);
myCar.start();
