import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})

  export class FoodComponent{
    name: string;
    price: number;
    items:any[];
    status:boolean;
 
  
      // items:any [] = [{
      //   name: 'Pizza',
      //   price: 3
      // },
      // {
      //   name: 'Salad',
      //   price: 2
      // }];
    
      constructor() {
        
       }
      Food(pName:string){
        if(pName == 'Pizza'){
           this.status=true;
    
          // this.name="Pizza";
          // this.price=3;
    
          this.items=[
            {name:"Chicken Pizza", price:"250"},
            {name:"Veg Pizza", price:"150"},
            {name:"Corn Cheese Pizza", price:"180"}
          ];
            
        }    
        if(pName == 'Burger'){
          this.status=true;
          
          // this.name="Burger";
          // this.price=14;
    
          this.items=[
            {name:"Chicken Burger", price:"250"},
            {name:"Veg Burger", price:"150"},
            {name:"Corn Cheese Burger", price:"180"}
          ];
        } 
      } 
      addToCart() {
        window.alert('Added');
      }
    }

