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

// type Employee = Person & {
//     salary: number
// }
// interface IEmployee extends IPerson {
//     salary:number
// }
// const employee1: Employee  = {id: 123, name:'Moshe', salary: 10000, address:'Lod'};
// const employee2: IEmployee = {id: 124, name:'Sara', salary: 10000, address:'Lod'};

// interface IPerson {      // will pop a ' property 'address' is missing' in 11 and 20 linecode if address is not defined.
//     address: string
// }
// // type Person = {                 // will pop a "Duplicate identifier 'Person'" in  this line (better)
// //     address: string;            // error -> type can't be redefined.
// // }


interface Shape {
    draw(): void;
}
class Point implements Shape {
    static readonly minValue = -100;    // 'static' is not a certain object property but the whole class (see JS file)
    static readonly maxValue = 100;         
    static checkValue(value: number) {      // 'static' mthod doesn't have 'this' 
        if (value < Point.minValue || value > Point.maxValue) {
            throw `wrong value ${value}, should be in the range ${Point.minValue} to ${Point.maxValue}`
        }
    }
    constructor(private _x: number, private _y: number) {
        Point.checkValue(_x);
        Point.checkValue(_y);
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(value: number) {
        Point.checkValue(value);
        this._x  = value;
    }
    set y(value: number) {
        Point.checkValue(value);
        this._y = value;
    }
    draw(): void {
        console.log(`Point [ x: ${this._x}, y: ${this._y}]`);
    }
}
class Line extends Point {
    constructor(x: number, y: number, private _point: Point) {
        super(x, y);   // if no,  will give an eror :"Constructors for derived classes must contain a 'super' call"
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
    constructor (x: number, y: number, private _width: number) {
        super (x, y);        // calling the constructor of the superclass and transferring to it x & y values !!!!!
    }
    get width(){
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
    constructor(x: number, y:number, width: number, private _height: number) {
        super(x, y, width);
    }
    draw() {
        console.log("===== Rectangle =====")
        super.draw();
        console.log(`heigth ${this._height}`);
        console.log('='.repeat(20));
    }
}
const shape: Shape = new Square(3, 4, 10);  // Upcastiing
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

class Canvas implements Shape {
    private _shapes: Shape[] = [];
    draw(): void {
        //TODO write method draw for drawing all shapes in the canvas
        this._shapes.forEach(s => s.draw());
    }
    addShape(shape: Shape): number {
        //TODO write method adding the given shape inside _shapes
        //returns an index of added shape 
        return this._shapes.push(shape)-1;
    }
    removeShape(index: number): Shape {
        //TODO write method removing a shape at the given index
        //returns reference to the removed shape
        return this._shapes.splice(index,1)[0]; 
    }
    sort(): void {
        //TODO write method sorting the shapes in the following order:
        //ascending order of the property x, and in the 
        //in the case of equal x values - descending order of the property y
        this._shapes.sort((a,b)=> a instanceof Point && b instanceof Point ?
        a.x - b.x || b.y - a.y : 0)
    }
    removeIf(predicate: (shape: Shape)=>boolean) {
        //TODO write method removing all the shapes matching the given predicate function
        //TODO write function for testing the method removeIf with the following predicate:
        //remove all lines having the property x of second point greater than the property x of the first point
        this._shapes = this._shapes.filter(s=> !predicate(s));//result-> filter == LEAVE if condition === true (!(predicate==false))
        // i.e. we here want to  leave the members where predicate is false !
    }
}
const canvas = new Canvas();
canvas.addShape(new Line(3,4, new Point(2,5)));
canvas.addShape(new Line(3,4, new Point(5,10)));
canvas.addShape(new Rectangle(10,2,50,20));
canvas.addShape(new Square(5,50,30));
canvas.addShape(new Square(5,40,30));
canvas.addShape(new Line(3,4,new Point(7,10)));
console.log(`removed ${JSON.stringify(canvas.removeShape(5))}`);
canvas.sort();
console.log ('+++++++++++ draw before removal +++++++++++');
canvas.draw();
console.log('+++++++++++ draw after removal ++++++++++++');
canvas.removeIf(s=> s instanceof Line && s.point.x > s.x);
canvas.draw();



