class BookingTMS
{
    PassengerDetails:any={ Name:"Abridge ",Age:15,IdProf:""};
    toStation:string="Goa";
    fromStation:string="Hyd";
    onwardDate:any="09-08-2019";
    returnDate:any = "13-08-2019";
    isRoundTrip:boolean=false;

    availability(){
        return "Displays the availability of buses from "+ this.fromStation+" to "+this.toStation+" ("+this.onwardDate+"  to "+this.returnDate+")";
    }
    addPassenger(){
        return "Add a passenger";
    }
    removePassenger(){
        return "Removes a passenger";
    }
    requestBooking(){
        return "Booking the tickets";
    }
    cancelBooking(){
        return "Cancels booking";
    }
}

var o = new BookingTMS();
console.log(o.availability());
console.log(o.addPassenger());
console.log(o.removePassenger());
console.log(o.requestBooking());
