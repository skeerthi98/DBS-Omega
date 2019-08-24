import {IShape} from './IShape';

export class Circle implements IShape{
    Radius:number;

    constructor(pRadius:number){
        this.Radius = pRadius;
    }

    public Draw(){
        console.log(" O ");
    }

    public Area():number{
        return 3.14 * this.Radius * this.Radius;
    }
}