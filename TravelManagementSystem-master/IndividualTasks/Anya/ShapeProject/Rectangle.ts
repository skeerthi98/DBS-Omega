import {Shapes} from './shapes'
export class Rectangle implements Shapes{

    l:number;
    b:number;
    constructor(l:number,b:number){
        this.l=l;
        this.b=b;
    }
    public Draw():string{return "Its a Rectangle"};
    public Area():number{return  this.l*this.b};
}