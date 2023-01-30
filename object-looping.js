// array vs object 
var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
var friendAge = [12, 45, 50, 70, 80, 98, 99];
var friendAge = {
    rahim: 30,
    korim: 38,
    jamal: 88, 
    manik: 50,
    kalu: 77
}

var shopingCard = {
    books: 5,
    pen: 25,
    sunglass: 1,
    keybord: 5,
    mouse: 3,
    shoes:2
}
const keys = Object.keys(shopingCard);
console.log(keys);
const values = Object.values(shopingCard);
console.log(values);


// var keys = [ 'books', 'pen', 'sunglass', 'keybord', 'mouse', 'shoes' ]
for(var i = 0; i < keys.length; i++){
    // console.log(keys[i])
    var propertyName = keys[i];
    var propertyValue = shopingCard[propertyName]
    // console.log(propertyName, propertyValue);
}

// for in loop

for(var propertyName in shopingCard){
    const value = shopingCard[propertyName];
    console.log(propertyName, value);
}