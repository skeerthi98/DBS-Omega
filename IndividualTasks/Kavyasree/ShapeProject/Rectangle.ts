import {IShape} from './IShape';

export class Rectangle implements IShape{
    Length:number;
    Breadth:number;

    constructor(pLength:number,pBreadth:number){
        this.Length = pLength;
        this.Breadth = pBreadth;
    }

    public Draw(){
        console.log(" ___ ");
        console.log("|___|");
    }

    public Area():number{
        return this.Length * this.Breadth;
    }
}