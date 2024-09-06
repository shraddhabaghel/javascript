// singleton

//object literals

const mySym=Symbol("key1") //we use square brackets to refer symbol.

Object.create  //constructer method
const jsUser={
    name:"Anshi",
    "full name": "Anshi Baghel",
    [mySym]:"mykey1",
    age: 18,
    location:"Agra",
    email:"anshi@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email="anshi@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email="anshi@yahoo.com"
console.log(jsUser);


jsUser.greeting=function(){
    console.log("Hello");
    
}
jsUser.greeting2=function(){
    console.log(`Hello, ${this.name}`); //string interpolation
    
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());



