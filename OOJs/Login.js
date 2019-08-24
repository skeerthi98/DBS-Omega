function Login(){
    this.UserName ="";
    this.Password ="";
    
    this.userLogin = function(UserName,Password){
        console.log("User Validation:"+UserName);
        if(UserName=="Abc" && Password==""){
            console.log("Logged into user Account");
        }
        else{
            console.log("Invalid Credentials..! Forgot Password?");
        }
    }

    this.forgotPassword = function(UserName,Email){
        console.log("Verify the user:"+UserName); // through email..!
        if(UserName=="Abc" && Email=="abc@xyz.com"){    
            console.log("Allow user to set password");
        }
        else{
            console.log("Invalid Credentials..! New User?");
        }
        // this.userLogin();
    }

    this.userLogout = function(){
        console.log("User Logged out...!");
    }

}

var obj = new Login();
console.log(obj.userLogin("Abc",""));
console.log(obj.forgotPassword("Abc","abc@xyz.com"));
console.log(obj.userLogout());
