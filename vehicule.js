var car = /** @class */ (function () {
    function car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    car.prototype.start = function () {
        console.log("Car engine started");
    };
    return car;
}());
var myCar = new car('BMW', 'M5', 2020);
myCar.start();
