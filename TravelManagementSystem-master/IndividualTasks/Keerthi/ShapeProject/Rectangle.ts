import {Shape} from './Shape';
export class Rectangle implements Shape
{
    Name:string="Rectangle";
    Length: number;
    Breadth :number;
    constructor(rLength:number,rBreadth:number)
    {
    
        this.Length = rLength;
        this.Breadth = rBreadth;
    }
    public draw():string{
        return this.Name+" is drawn";
    }
    public area():number{
        return (this.Length*this.Breadth);
    }
    
}