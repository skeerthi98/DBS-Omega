import {IShape} from './IShape'
export class Rect implements IShape
{
    Length:number;
    Breadth:number;
    constructor(pLength:number,pBreadth:number)
    {
        this.Length=pLength;
        this.Breadth=pBreadth;
    }
    public Draw(){
        console.log("this is rectangle");
    }
    public Area():number{
        return this.Length*this.Breadth;
    }
}