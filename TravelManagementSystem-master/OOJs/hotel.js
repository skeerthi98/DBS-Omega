function hotel(){
    this.hotelDetails ={Name:"Hyatt",Location:"Gachibowli",Type:["3*","4*","5*"]};
    this.passengerDetails={Name:"XYZ",Age:"40"};
    this.viewHotels=function(){
        console.log("Hotel name is: "+this.hotelDetails.Name+"It is located in "+this.hotelDetails.Location+"It is "+this.hotelDetails.Type[2]+"hotel");
    }
    this.bookHotel = function(){
        console.log( "You successfully booked your room");
    }

}
var obj=new hotel();
obj.viewHotels();
obj.bookHotel();