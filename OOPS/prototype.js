/* let myName = "anshi     "
let myChannel= "chai      "
console.log(myName.truelength); */


let myHeros=["thor","spiderman"]

let heroPower= {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.anshi=function(){
    console.log(`hitesh is present in all objects`);
    
}

Array.prototype.heyAnshi=function () {
    console.log(`Hitesh says hello`);
    
}

//heroPower.anshi()
myHeros.anshi()
myHeros.heyAnshi()
//heroPower.heyAnshi()

//inheritance
const user={
    name:"chai",
    email:"chai@google.com"
}
const Teacher={
    makeVideo: true
}
const TeachingSupport={
    isAvailable: false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= user

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="chaiaurcode      "
String.prototype.trueLength= function () {
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
    
    
}
anotherUsername.trueLength()
"anshi".trueLength()
"iceTea".trueLength()