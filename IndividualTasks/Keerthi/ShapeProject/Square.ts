import {Shape} from './Shape';
import {Rectangle} from './Rectangle';
export class Square extends Rectangle implements Shape
{
    Name:string="Square";
    Length: number;
    
    constructor(sLength:number)
    {
        super(sLength,sLength);
    }
    public draw():string{
        return this.Name+" is drawn";
    }
    public area():number{
        return (this.Length*this.Length);
    }
    
}