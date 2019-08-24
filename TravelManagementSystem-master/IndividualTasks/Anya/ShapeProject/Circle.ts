import {Shapes} from './shapes'
export class Circle implements Shapes{
    r:number;
    constructor(r:number){
        this.r=r;
    }
    public Draw():string{return "Its a Circle"};
    public Area():number{return  3.14*this.r*this.r};
}