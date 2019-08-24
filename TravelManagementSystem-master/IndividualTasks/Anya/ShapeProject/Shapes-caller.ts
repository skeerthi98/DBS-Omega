import {Shapes} from './shapes'
import {Circle} from './Circle'
import {Rectangle} from './Rectangle'
import {Square} from './Square'

class Caller {

}
var c = new Circle(2);
console.log(c.Draw());
console.log(c.Area());

var r = new Rectangle(2,3);
console.log(r.Draw());
console.log(r.Area());

var s = new Square(2,2);
console.log(s.Draw());
console.log(s.Area());