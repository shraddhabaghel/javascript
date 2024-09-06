const name="Anshi"
const repoCount=40

console.log("hello"+"world");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('an-shi');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('n'));
const newString = gameName.substring(0,3)
console.log(newString);

const anotherString=gameName.slice(-2,4)
console.log(anotherString);
const newStringOne="   anshi  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://anshi.com/anshi20@shdnkv"

console.log(url.replace('@','-'))
console.log(url.includes('sundar'))
console.log(gameName.split());







