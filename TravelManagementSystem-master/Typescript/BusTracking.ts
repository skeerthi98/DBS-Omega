class BusTracking
{
    passengerLocation:string="";
    busCurrentLocation:string="Goa";
   

    static getBusCurrentLocation():string {
        return "gets the Current Location";
    }
    static getPassengerLocation():string{
        return "gets the Curren tLocation of passenger";
    }
    showPathInBetween():string{
        BusTracking.getBusCurrentLocation();
        BusTracking.getPassengerLocation();
        return "gets the Curren tLocation of passenger";
    }
    
}

var obj = new BusTracking();
console.log(BusTracking.getBusCurrentLocation());
console.log(BusTracking.getPassengerLocation());
console.log(obj.showPathInBetween());
