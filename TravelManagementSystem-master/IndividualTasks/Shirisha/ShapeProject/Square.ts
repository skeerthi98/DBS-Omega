import {IShape} from './IShape'
import {Rect} from './Rec'

export class Square extends Rect implements IShape
{
    Length:number;
    constructor(pLength:number)
    {
        super(pLength,pLength);
        this.Length=pLength;
    }
    public Draw(){
        console.log("this is square");
    }
}