function foodOrder()
{
    this.passName="Anu";
   this.pnr=""
    this.ondate="21-07-2019";
    this.cost=456;
    this.showMenu=function()
    {
        console.log("showing Menu........");

    }
    this.chooseMenu=function()
    {
        console.log("choose your  Menu");

    }
    var getBankDetails= function()
    {
        return bankacdetails={IFSCcode:"SBIN0026171",Phoneno:6278413};

    }
    this.startPayment=function()
    {
        var a=getBankDetails();
        console.log(a.bankacdetails);
        console.log(this.cost+" is to be deducted from your bank account");
        console.log("money deducted");
        console.log("biryani booked");
    }
    this.cancelOrder=function(){
        var fetchPrevOrders=function()
        {
            console.log("fetching prvious orders... ");

        }
        var getOrderNo=function()
        {
            fetchPrevOrders();
            console.log("Getting order number of order to be cancelled");
        } 
        getOrderNo();
        console.log("Order cancelled");
    }
    this.getPNR=function(){
        console.log("getPNR");
    }
}
var a=new foodOrder();
console.log(a.showMenu());
console.log(a.chooseMenu());
console.log(a.startPayment());
console.log(a.cancelOrder());