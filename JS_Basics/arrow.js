const user={
    username:"anshi",
    price:999,

    welcomeMessage: function(){
        //console.log(`${this.username} ,welcome to website`);
        //console.log(this);
        
    }

}
//user.welcomeMessage()
//user.username="Sam"
//user.welcomeMessage()
//console.log(this);

//function chai(){
 //   let username="Hitesh"
    //console.log(this.username);

//}
//chai()

/* const chai= function(){
    let username="Anshi"
    console.log(this.username);
    
} */
const chai= () => {   //Arrow function
    let username="Anshi"
    console.log(this);
    
}
//chai()

/* const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4)); */



//const addTwo = (num1, num2) =>  num1 + num2  //implicit return
//const addTwo = (num1, num2) => ( num1 + num2) 
const addTwo = (num1, num2) => ({username: "anshi"})  //object return
console.log(addTwo(3,4));


//const myarr= [1,2,3,4,5]

//myarr.forEach(() => ())


