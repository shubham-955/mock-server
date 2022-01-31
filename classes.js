class Rectangle {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    getArea() {
        return this.width * this.length;
    }
}

class Sqaure extends Rectangle {
    constructor(edge) {
        super(edge, edge);
        this.edge = edge;
    }
    getPerimeter() {
        return 4 * this.edge;
    }

}
var edge = 10;


var square = new Sqaure(edge);


console.log(square.getArea());
console.log(square.getPerimeter());