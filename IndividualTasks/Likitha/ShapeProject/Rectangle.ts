import { Shape} from "./Shape";
export class Rectangle implements Shape{
    
    len:number;
    breadth:number;
   constructor(len:number,breadth:number)
   {
       this.len=len;
       this.breadth=breadth;
   }
    draw() {
       console.log("Rectangle Drawn with len"+this.len +" and breadth"+this.breadth);
    }
    area(): number {
        return this.len*this.breadth;
    }    
    perimeter(): number {
        return 2*(this.len+this.breadth);
    }

    
}