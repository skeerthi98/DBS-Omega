import {IShape} from './IShape';
import { Rectangle } from './Rectangle';
import {Square} from './Square';
import { Circle } from './Circle';

var cObj = new Circle(5);
cObj.Draw();
console.log("Area of Circle: "+cObj.Area());

var sObj = new Square(5);
sObj.Draw();
console.log("Area of Square: "+sObj.Area());

var rObj = new Rectangle(6,5);
rObj.Draw();
console.log("Area of Rectangle: "+rObj.Area());
