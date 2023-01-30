var shopingCard = {
    books: 5,
    pen: 25,
    sunglass: 1,
    keybord: 5,
    mouse: 3
}
var penCount = shopingCard['pen'];

var propertyName = 'mouse';

var propertyValue = shopingCard[propertyName]
console.log(propertyValue);

var properties = Object.keys(shopingCard);
var propertyvalues = Object.values(shopingCard)




// console.log(properties);
// console.log(propertyvalues);
// console.log(shopingCard);

 // set property value
 shopingCard.mouse = 15;
 console.log(shopingCard);
 shopingCard['mouse'] = 29;
 console.log(shopingCard);
 shopingCard[propertyName] = 89;
 console.log(shopingCard);