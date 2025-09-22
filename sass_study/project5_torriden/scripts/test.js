//index.js
//Quantity Button
const plusBtn = document.querySelector('.input_quantity_box #plus_btn');
const minusBtn = document.querySelector('.input_quantity_box #minus_btn');
const inputNum = document.querySelector('.input_quantity_box #input_quantity');
const priceOriginal = document.querySelector('.original_price');
console.log(plusBtn, minusBtn, inputNum, priceOriginal);

let stock = 10000; //stock의 초기값
let num = 1; //quantity의 초기값
let originalPrice = 27;//original price의 초기값


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

function(){}


//discount calc
//коэф скидки, начальная цена (priceOriginal)
//const priceInfo = document.querySelector('.two_li .price_info em');
const spanDiscount = document.querySelectorAll('.discount_info')
console.log('=====================')


//Deliver every month, 10% off
spanDiscount[0].addEventListener('click', ()=> totalPriceFunc(10)) //обязательно вызываем функцию расчета скидки через анонимную функцию, неиначе функция будет срабатывать не при клике, а при загрузке страницы

//Deliver every 2 months, 7% off
spanDiscount[1].addEventListener('click', ()=> totalPriceFunc(7))

//Deliver every 3 months, 5% off
spanDiscount[2].addEventListener('click', ()=> totalPriceFunc(5))


function totalPriceFunc(discountPercent){
    let priceInfoEm = document.querySelector('.two_li .price_info em');
    priceInfoEm.textContent = 24.30;
    let basePrice = 27;
    let finalPrice = basePrice * ((100-discountPercent)/100)//final price
    let finalFormatted = finalPrice.toFixed(2)
    priceInfoEm.textContent = finalFormatted;
}