// type Person = {
//     id: number,
//     name: string,
//     address: string
// }
// const person1: Person = {id:123, name:'Moshe', address:'Lod'};
// interface IPerson {
//     id: number,
//     name: string
// }
// const person2: IPerson = {id:124, name:'Sara', address:'Lod'};  
class Point {
    static checkValue(value) {
        if (value < Point.minValue || value > Point.maxValue) {
            throw `wrong value ${value}, should be in the range ${Point.minValue} to ${Point.maxValue}`;
        }
    }
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
        Point.checkValue(_x);
        Point.checkValue(_y);
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(value) {
        Point.checkValue(value);
        this._x = value;
    }
    set y(value) {
        Point.checkValue(value);
        this._y = value;
    }
    draw() {
        console.log(`Point [ x: ${this._x}, y: ${this._y}]`);
    }
}
Point.minValue = -100; // 'static' is not a certain object property but the whole class (see JS file)
Point.maxValue = 100;
class Line extends Point {
    constructor(x, y, _point) {
        super(x, y); // if no,  will give an eror :"Constructors for derived classes must contain a 'super' call"
        this._point = _point;
    }
    get point() {
        return this._point;
    }
    draw() {
        console.log('----- Line -----');
        super.draw();
        this._point.draw();
        console.log('-'.repeat(20));
    }
}
class Square extends Point {
    constructor(x, y, _width) {
        super(x, y); // calling the constructor of the superclass and transferring to it x & y values !!!!!
        this._width = _width;
    }
    get width() {
        return this._width;
    }
    draw() {
        console.log('----- Square -----');
        super.draw();
        console.log(`width ${this._width}`);
        console.log("-".repeat(20));
    }
}
class Rectangle extends Square {
    constructor(x, y, width, _height) {
        super(x, y, width);
        this._height = _height;
    }
    draw() {
        console.log("===== Rectangle =====");
        super.draw();
        console.log(`heigth ${this._height}`);
        console.log('='.repeat(20));
    }
}
const shape = new Square(3, 4, 10); // Upcastiing
//way of specific methods call
// if (shape instanceof Square) {               // the way I  can  check if there is a 'width' in the shape.  
//     console.log(`+++++ ${shape.width}`); 
// } 
/****************demo of setter usage with checking and following exception */
// const point: Point = new Point(10, 10);
// point.draw();
// point.x = 200;        // setter will catch an error
// point.draw();
// const shapes: Shape[] = [
//     new Line(3, 4, new Point(10, 10)),
//     new Square(2, 5, 10),
//     new Line(20, 30, new Point(3,4)),
//     new Rectangle(10, 15, 20, 5)
// ]
// shapes.forEach(shape=> shape.draw());
///************************************************************HW #33 */
class Canvas {
    constructor() {
        this._shapes = [];
    }
    draw() {
        //TODO write method draw for drawing all shapes in the canvas
        this._shapes.forEach(s => s.draw());
    }
    addShape(shape) {
        //TODO write method adding the given shape inside _shapes
        //returns an index of added shape 
        return this._shapes.push(shape) - 1;
    }
    removeShape(index) {
        //TODO write method removing a shape at the given index
        //returns reference to the removed shape
        return this._shapes.splice(index, 1)[0];
    }
    sort() {
        //TODO write method sorting the shapes in the following order:
        //ascending order of the property x, and in the 
        //in the case of equal x values - descending order of the property y
        this._shapes.sort((a, b) => a instanceof Point && b instanceof Point ?
            a.x - b.x || b.y - a.y : 0);
    }
    removeIf(predicate) {
        //TODO write method removing all the shapes matching the given predicate function
        //TODO write function for testing the method removeIf with the following predicate:
        //remove all lines having the property x of second point greater than the property x of the first point
        this._shapes = this._shapes.filter(s => !predicate(s)); //result-> filter == LEAVE if condition === true (!(predicate==false))
        // i.e. we here want to  leave the members where predicate is false !
    }
}
const canvas = new Canvas();
canvas.addShape(new Line(3, 4, new Point(2, 5)));
canvas.addShape(new Line(3, 4, new Point(5, 10)));
canvas.addShape(new Rectangle(10, 2, 50, 20));
canvas.addShape(new Square(5, 50, 30));
canvas.addShape(new Square(5, 40, 30));
canvas.addShape(new Line(3, 4, new Point(7, 10)));
console.log(`removed ${JSON.stringify(canvas.removeShape(5))}`);
canvas.sort();
console.log('+++++++++++ draw before removal +++++++++++');
canvas.draw();
console.log('+++++++++++ draw after removal ++++++++++++');
canvas.removeIf(s => s instanceof Line && s.point.x > s.x);
canvas.draw();
