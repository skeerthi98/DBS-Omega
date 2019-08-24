import {Shape} from './Shape'
import {Rectangle} from './Rectangle'
import {Circle} from './Circle'
import {Square} from './Square'
//  var rect=new Rectangle(4,5);
//  var cir=new Circle(4);
//  var sqr=new Square(5);

function drawAllShapes(shapesToDraw:Shape)
{
    shapesToDraw.draw();
}
drawAllShapes(new Circle(4));
drawAllShapes(new Rectangle(4,5));
drawAllShapes(new Square(5));

//var obj:Shape=new Circle(4);