class LoginTMS{
    UserName:String;
    Password:String;
    constructor(){
        this.UserName ="";
        this.Password ="";
    }
    login(UserName:String,Password:String){
        console.log("User Validation:"+UserName);
        if(UserName=="Abc" && Password==""){
            console.log("Logged into user Account");
        }
        else{
            console.log("Invalid Credentials..! Forgot Password?");
        }
    }

    forgotPassword(UserName:String,Email:String){
        console.log("Verify the user:"+UserName); // through email..!
        if(UserName=="Abc" && Email=="abc@xyz.com"){    
            console.log("Allow user to set password");
        }
        else{
            console.log("Invalid Credentials..! New User?");
        }
        // this.userLogin();
    }
    logout(UserName:String){
        console.log(UserName+"User Logged out...!");
    }

}

let u = new LoginTMS();
console.log(u.login("Abc",""));
console.log(u.forgotPassword("Abc","abc@xyz.com"));
console.log(u.logout("Abc"));