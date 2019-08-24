import {Shape} from './Shape';
import {Rectangle} from './Rectangle';
import {Circle} from './Circle';
import {Square} from './Square';

function drawAllShapes(shapeToDraw:Shape)
{
    shapeToDraw.draw();
}
drawAllShapes(new Circle(5));
drawAllShapes(new Rectangle(4,7));
drawAllShapes(new Square(4));

// var cObj = new Circle(7);
// console.log(cObj.draw());
// console.log(cObj.area());
// var rObj = new Rectangle(4,6);
// console.log(rObj.draw());
// console.log(rObj.area());
// var sObj = new Square(4);
// console.log(sObj.draw());
// console.log(sObj.area());
