

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("J");
    console.log("K");
    console.log("L");
}

//sayMyName()

 //function addTwoNum(num1, num2){
    //console.log(num1 + num2);
//} 

function addTwoNum(num1, num2){
    //let result= num1 + num2
    //return result
    return num1 + num2
}
const result= addTwoNum(2,7) 
//console.log("Result:",result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Anshi"));
console.log(loginUserMessage("Anshi")); //overwrite

function calcCartPrice(...num1){
    return num1
}
console.log(calcCartPrice(200,300,400));
 
const user={
    username:"Anshi",
    price: 199
}
 function handleObject(anyobject){
       console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);    
}
//handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArr=[100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([100,400,900,407]));


