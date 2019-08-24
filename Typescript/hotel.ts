class hotelTMS{
    hotelDetails:any ={Name:"Hyatt",Location:"Gachibowli",Type:["3*","4*","5*"]};
    passengerDetails:any={Name:"XYZ",Age:"40"};
    viewHotels():string{
        return "Hotel name is: "+this.hotelDetails.Name+"It is located in "+this.hotelDetails.Location+"It is "+this.hotelDetails.Type[2]+"hotel";
    }
   bookHotel():string{
        return "You successfully booked your room";
    }

}
var obj1=new hotelTMS();
obj1.viewHotels();
obj1.bookHotel();