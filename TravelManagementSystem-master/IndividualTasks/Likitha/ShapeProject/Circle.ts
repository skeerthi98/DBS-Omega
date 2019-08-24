import { Shape} from "./Shape";
export class Circle implements Shape{
   
    radius:number;
   constructor(radius:number)
   {
       this.radius=radius;
   }
    draw() {
       console.log("Circle Drawn with radius" +this.radius);
    }
    area(): number {
        return 3.141*this.radius*this.radius;
    }    perimeter(): number {
        return 2*3.141*this.radius;
    }

    
}