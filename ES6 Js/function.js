// normal function 
function discount_10(price){
   console.log(`Price is ${price}  Discount is ${price*10/100}`);
}
discount_10(500)

// Arrow function 
const discount_50 = (price)=>{console.log(`Price is ${price}  Discount is ${price*50/100}`) }
discount_50(5000)