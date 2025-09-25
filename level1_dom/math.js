console.log(Math)
console.log(Math.PI)
//Math : MAth.floor, Math.round, Math.random
let num1 = Math.floor(3.7);
console.log(num1) //3
num1 = Math.floor(3.2);
console.log(num1)//3 소수점 버리고 정수 출력
console.log('=========================')
let num2 = Math.round(3.7)//4
console.log(num2) //4
num2 = Math.round(3.2) //소수점 자리수에 딸 반올림
console.log(num2) //3
console.log('=========================')
let num3 = Math.random()
console.log(num3)
num3 = Math.random() * 5;
console.log(num3)
num3 = Math.floor(Math.random() * 10)
console.log(num3)
num3 = Math.floor(Math.random() * 10) + 1;
console.log(num3)
console.log('=========================')
//10% ,20%, 30%, 40%, 50% 랜덤 출력
const couponDB = ['10%', '20%', '30%', '40%', '50%']
const couponBtn = document.querySelector('#coupon')

//btn click -> alert ('random % ')
couponBtn.addEventListener('click', ()=>{
    let randomNum = Math.floor(Math.random() * 5)//умножили на пять так как у нас индекс 0 1 2 3 4
    alert(`Вам перепала ${couponDB[randomNum]}-я скидка`)
})
//화면에 접속 되었을 때  광고 2개가 랜덤 표시
const adDB = [{
    name: 'spicy noodle',//alt
    src: 'https://i.pinimg.com/1200x/54/b2/f8/54b2f85c322c274b0959b9f882a4dd2f.jpg',
    link: 'https://m.cjthemarket.com/the/product/product-main?prdCd=40156347',
},{
    name: 'lemon cake',
    src: 'https://i.pinimg.com/1200x/22/28/4a/22284a5208e85e583f5a5ea942536209.jpg',
    link: 'https://www.starbucks.co.kr/index.do',
}]

const adLink = document.querySelector('.ad a')
const adImg = document.querySelector('.ad a img')
console.log(adLink, adImg)

window.addEventListener('load', ()=>{
    //1. выбрать рандомное число
    let randomNum = Math.floor(Math.random() * 2);
    console.log(randomNum)
    //2. изменить подготовленный в ХТМЛ тег
    adImg.src = adDB[randomNum].src;
    adImg.alt = adDB[randomNum].name;
    adLink.href = adDB[randomNum].link;

})
//더치페이 계산기
//계산하기 클릭 시 총 금액와 인원 수에 따라 계산 결과 출력하기
//금액이 소수점일 경우 소수점 값에 따라 만올림하기
console.log('===========================')
let price = document.querySelector('#price');
let person = document.querySelector('#person');
const calcBtn = document.querySelector('#total_btn');
const resultTextP = document.querySelector('.result')
console.log(typeof(price))
console.log(typeof(person))
resultTextP.style.display = 'none';

calcBtn.addEventListener('click', ()=>{
    const totalPrice = Math.round(price.value/person.value);
    resultTextP.children[0].textContent = totalPrice.toLocaleString('ko-kr');
    resultTextP.style.display = 'block';
})


console.log('=======================견과')
const shopDB = [{
    shop: '쿠팡',
    id: '하루견과',
    price: 1000,
},{
    shop: '네이버 스마트 스토어',
    id: '하루견과',
    price: 2000,
},{
    shop: '마켓컬리',
    id: '하루견과',
    price: 3000,
}]

//변수
const shopBtn = document.querySelector('#min_price_btn')
const shopP = document.querySelector('.min_price')
const shopList2 = document.querySelector('.min_list')

const pp = [1000, 2000, 3000, 4000] //test


//클릭 이벤트
shopBtn.addEventListener('click', ()=>{
    //1.쇼핑몰부터 상품 명 가격 등을 가지고 있는 배열에서 가격만 추출하기
    //map 사용 
    const priceMap = shopDB.map(i=>i.price)
    console.log(priceMap)
    let minPrice = Math.min(...priceMap)
    console.log(Math.min(...priceMap))
    console.log(Math.max(...priceMap))
    //2. 추출한 가격에 따라 최저가 찾기
    shopP.textContent = `${minPrice}원입니다`;
    const sort = [...shopDB].sort((a, b) => b.price - a.price)
    console.log(sort)
    for(let i of sort){
        console.log(i)
        const li = document.createElement('li');
        li.innerHTML = `<a href"#">상품 :${i.id}<a/>` ;
        li.innerHTML += `<span href"#">쇼핑몰 :${i.shop}<span/>` ;
        li.innerHTML += `<em href"#">가격 : ${i.price}원<em/>`;
        console.log(li, i.shop)
        shopList2.appendChild(li);
    }
})

console.log('=======================Практика')
const shopDB2 = [{
    shop: '쿠팡',
    name: '고구마',
    price: 5000,
    delivery: 2500,
},{
    shop: '이마트몰',
    name: '고구마',
    price: 2900,
    delivery: 0,
},{
    shop: '네이버',
    name: '고구마',
    price: 4000,
    delivery: 1000,
}]

const priceBtn = document.querySelector('#price_btn');
const deliveryBtn = document.querySelector('#delivery_btn');
const priceResult = document.querySelector('.result1');
const deliveryResult = document.querySelector('.result2');
const shopList = document.querySelector('#shop_list');

priceBtn.addEventListener('click', ()=>{
    const priceMap2 = shopDB2.map(j=>j.price)
    let minPrice = Math.min(...priceMap2)
    priceResult.textContent = `최저가 : ${minPrice.toLocaleString('ko-kr')}원`

    //최저가 -> 최고가 오름차순 정렬하기 JS
    //매개변수 순서 이용한 오름차순(계산속성 기준) a.price - b.price
    //매개변수 순서 이용한 내림차순(계산속성 기준) b.prece - a.price
    const sort = [...shopDB2].sort((a, b) => a.price - b.price)
    console.log(sort)

    //반복문 for 이용 위 sort li 생성 후 ul에 최종 삽입하기
    for(let i of sort){//подходит фор, так как нам нужно создать несколько ЛИ; i это как шпион, которого мы запускаем внутрь sort (внутри которого у нас высчитывается список внутри массива кто выше, а кто ниже)
        console.log(i)
        const li = document.createElement('li')// чтобы создать ЛИ используем createElement, для этого тоже нужна переменная (чтобы было удобнее)
        //li.textContent = i.shop; //чтобы записать названия магазинов внутри
        li.innerHTML = `<a href="#">${i.shop}</a> `
        li.innerHTML += `<span>${i.price}원</span> `
        li.innerHTML += `<em>배송비 : ${i.delivery}원</em>`
        console.log(li, i.shop)
        shopList.appendChild(li)//означает что мы последним ребенком вкладываем в ЮЛ созданные нами ЛИ
    }

})
deliveryBtn.addEventListener('click',()=>{
    const deliveryMap = shopDB2.map(k=>k.delivery)
    let deliveryVal = Math.min(...deliveryMap);
    deliveryResult.textContent = `배송비 : ${deliveryVal.toLocaleString('ko-kr')}원`
})