import {IShape} from './IShape'
export class Cir implements IShape
{
    Radius:number;
    constructor(pRadius:number)
    {
        this.Radius=pRadius;
       // this.breadth=pb;
    }
    public Draw(){
        console.log("this is circle");
    }
    public Area():number{
        return 3.14*this.Radius*this.Radius;
    }
}