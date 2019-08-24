import {Shapes} from './shapes'
import { Rectangle } from './Rectangle';
export class Square extends Rectangle implements Shapes{
    l: number;
    b: number;

    constructor(l:number,b:number){
        super(l,l);
        this.l=l;
    }
    r:number;
    public Draw():string{return "Its a Square"};
}