//index.js
//Quantity Button
const plusBtn = document.querySelector('.input_quantity_box #plus_btn');
const minusBtn = document.querySelector('.input_quantity_box #minus_btn');
const inputNum = document.querySelector('.input_quantity_box #input_quantity');
const priceInfo = document.querySelector('#subscription_list .two_li .price_info');
const priceOriginal = document.querySelector('.original_price');
console.log(plusBtn, minusBtn, inputNum, priceInfo, priceOriginal);

let stock = 10000; //stock의 초기값
let num = 1; //quantity의 초기값
let originalPrice = 27;//original price의 초기값

totalPriceFunc()


//plusBtn & minusBtn
plusBtn.addEventListener('click', ()=>{
    num < stock ? num++ : alert('Out of stock!')
    totalPriceFunc()
}
)
minusBtn.addEventListener('click', ()=>{
    num > 1 ? num-- : alert('Please choose one or more!');
    totalPriceFunc()
})


//discount calc
//коэф скидки, начальная цена (priceOriginal)
const spanDiscount = document.querySelectorAll('.discount_info');

//Deliver every month, 10% off
spanDiscount[0].addEventListener('click', ()=> discountFunc(0.1))

//Deliver every 2 months, 7% off
spanDiscount[1].addEventListener('click', ()=> discountFunc(0.07))

//Deliver every 3 months, 5% off
spanDiscount[2].addEventListener('click', ()=> discountFunc(0.05))

function discountFunc(discountPercent){
    let priceInfoEm = document.querySelector('.two_li .price_info em');
    priceInfoEm.textContent = 24.30;
    let basePrice = 27;
    let finalPrice = basePrice * ((100-discountPercent)/100)//final price
    let finalFormatted = finalPrice.toFixed(2)
    priceInfoEm.textContent = finalFormatted;
}
function totalPriceFunc(){
    let formattedTotalPrice = (originalPrice * num).toLocaleString('en-US', {minimumFractionDigits: 2});
    inputNum.value = num;
    priceOriginal.textContent = `$${formattedTotalPrice} USD` ;
}