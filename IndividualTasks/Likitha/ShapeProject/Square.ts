import { Shape} from "./Shape";
import { Rectangle } from "./Rectangle";
export class Square extends Rectangle implements Shape{
    len:number;
    constructor(len:number)
    {
        super(len,len);
        this.len=len;
    }
   draw() {
    console.log("Square Drawn with side len"+this.len);
 }
 area(): number {
     return this.len*this.len;
 }    
 perimeter(): number {
     return 4*(this.len);
 }
    
}