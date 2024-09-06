const myNums= [1,2,3]

/* const myTotal = myNums.reduce(function (acc,cv) {
    console.log(`acc: ${acc} and cv: ${cv}`);
    return acc+cv
},3 ) */

const myTotal =myNums.reduce( (acc, cv) => acc+cv, 0)

console.log(myTotal);



const shoppingCart= [
    {
        itemName:"js course",
        price:299
    },
    {
        itemName:"python course",
        price:599
    },
    {
        itemName:"aiml course",
        price:1299
    },
]

const priceToPay= shoppingCart.reduce( (acc,item) =>acc+ item.price,0)
console.log(priceToPay);
 