import {IShape} from './IShape';
import {Rect} from './Rec';
import {Cir} from './Cir';
import {Square} from './Square';
var cobj=new Cir(5);
cobj.Draw();
console.log("area of circle:"+cobj.Area());
var robj=new Rect(5,10);
robj.Draw();
console.log("area of rct:"+robj.Area());
var sobj=new Square(5);
sobj.Draw();
console.log("area of square:"+sobj.Area());
//function drawallshapes(shapetodraw:ishape)
//{shapetodraw.draw();                                        //factory design pattern
//}
//drawallshapes(new cir());
