import {IShape} from './IShape';
import { Rectangle } from './Rectangle';

export class Square extends Rectangle implements IShape{
    Len:number;

    constructor(pLen:number){ 
        super(pLen,pLen);
        this.Len = pLen;
    }

    public Draw(){
        console.log(" __ ");
        console.log("|__|");

    }
} 