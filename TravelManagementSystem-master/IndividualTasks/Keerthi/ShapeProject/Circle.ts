import {Shape} from './Shape';
export class Circle implements Shape
{
    Name:string="Cirle"
    Radius:number;
    constructor(cNumber:number)
    {
        this.Radius = cNumber;
    }
    public draw():string{
        return this.Name+" is drawn";
    }
    public area():number{
         return 3.12*(this.Radius)^2;

    }
    
}