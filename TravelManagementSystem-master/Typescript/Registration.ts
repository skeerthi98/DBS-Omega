class Registration
{
    
    public Firstname:String;
    public Lastname:String;
    public email:String;
    public phno:String;
    public username:String;
    public password:String;
    public confirmpass:String;

    constructor()
    {
    this.Firstname="";
    this.Lastname="";
    this.email="";
    this.phno="";
    this.username="";
    this.password="";
    this.confirmpass="";
    }
    register(Fisrtname:String,Lastname:String,email:String,phno:String,username:String,password:String,confirmpass:String)
    { 
        if(this.ValidateEmail(email) && this.phonenumber(phno) && this.CheckPassword(password))
        {
            console.log("User Registered");  
            console.log("Confirm Registration ")    
        }
        else{
            console.log("Invalid details...!");
        }
    }

     phonenumber(phno:String):boolean{
        var phoneno = /^\d{10}$/;
        if(phno.match(phoneno)){
            return true;
        }
        else{
            console.log("message");
            return false;
        }
    }
    
     CheckPassword(password:String):boolean 
    { 
        var passw=  /^[A-Za-z]\w{7,14}$/;
        if(password.match(passw)) { 
            console.log('Correct pwd')
            return true;
        }
        else
        { 
            console.log('Wrong...!')
            return false;
        }
    }

      ValidateEmail(email:String):boolean 
    {
        var remail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(remail)) 
        {
            return true;
        }
        else
        {
            console.log("You have entered an invalid email address!")
            return false;
        }
    }

}

let reg=new Registration();
reg.register("Shirisha","Bandaru","shirisha1357@gmail.com","9876543210","shirisha","abcdsaddd","abcdsaddd");