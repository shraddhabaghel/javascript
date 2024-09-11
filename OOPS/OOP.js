const user={
    username:"Anshi",
    loginCount: 8,
    signedIn: true,

    getUserDetails : function(){
        //console.log("Got user details from database");
        //console.log(`Username:${this.username}`);
        console.log(this);
        
        
        
    }
}
console.log(user.username);
//console.log(user.getUserDetails());
console.log(this);

function User(username,loginCount,isLoggedIn){
   this.username= username;
   this.loginCount= loginCount;
   this.isLoggedIn= isLoggedIn
   return this
}
const userOne= new User("Anshi",12,true) 
const userTwo= new User("Chai aur code",13,false)
console.log(userOne.constructor); 
//console.log(userTwo); 

this.greeting= function(){
    console.log(`Welcome ${this.username}`);
    
}


//new creates a new or empty object known as instance.
//new calls a constructor function.
//this keyword gets injected into it.