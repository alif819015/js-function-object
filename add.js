function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}
const result1 = add(20, 30);
const result2 = add(50, 50);
const finalResult = add(result1, result1);
console.log('total:', finalResult);