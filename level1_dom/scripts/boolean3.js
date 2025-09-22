//상하좌우 버튼 클릭 시 10ㅔㅌ 이동 시키고
const moveBtn = document.querySelectorAll('#control .btn')
const character = document.querySelector('#map img')
let num = 0;
console.log(moveBtn, character)
moveBtn[0].addEventListener('click',()=>{
    num += 10;
    character.style.transform = `rotate(90deg) translateX(-${num}px) `;// rotate -> x 
})
moveBtn[1].addEventListener('click',()=>{
    num += 10;
    character.style.transform = `rotate(-90deg) translateX(-${num}px)`;
})
moveBtn[2].addEventListener('click', ()=>{
    num += 10;
    character.style.transform = (`translateX(-${num}px)`)
})
moveBtn[3].addEventListener('click', ()=>{
    num += 10;
    character.style.transform = (`translateX(${num}px)`)
})
//input입력창에 영어오 이동명렬어를 작성하고 enter를 누르면 캐릭터 10px 이동
//이동 방향) left right top bottom
const ctrInput = document.querySelector('#control #txt')
console.log(ctrInput)
ctrInput.addEventListener('keyup',(e)=>{
    //console.log(true)//при отпускании любой кнопки сейчас это true
    //console.log(e.key)//проверяем свойство key
    if(e.key == 'Enter'){
        //console.log('Enter 확인')//проверяем нажат ли энтер

        const inputVal = ctrInput.value;// когда я нажму энтер запомни в переменной значение после энтера (инпут)
        if(inputVal == 'left' || inputVal == 'top' || inputVal == 'right' || inputVal == 'bottom'){
            console.log(`${inputVal} 이동`)
            ctrInput.value = '';
        } else {
            console.log('오답');
            ctrInput.value = '';
        }
        /* if(ctrInput.value == 'left'){console.log('왼쪽 이동')}
        else if (ctrInput.value == 'right'){console.log('오른쪽 이동')}
        else if (ctrInput.value == 'top'){console.log('위로 이동')}
        else if (ctrInput.value == 'bottom'){console.log('아래로 이동')}
        else {console.log('오답입니다')} */

    }
})

//학점에 따라 A~F등급 나오는 프로그래밍
//100-90 A
//89-80 B
//79-70 C
//69-60 D
//59 이하 F
/* const score = prompt('학점을 엽력하세요')
if (score >= 90 && score <= 100){
    console.log('You got A!')
}else if (score >= 80 && score <= 89){
    console.log('You got B!')
}else if (score >=70 && score <=79){
    console.log('You got C!')
}else if(score >=60 && score <= 69){
    console.log('You got D!')
}else if(score >= 1 && score <=59){
    console.log('You got F!')
}else {
    console.log("Something's wrong with your scores!")
}
if (score >=0 && score <= 100){
    if(score >= 90){console.log('You got A!')}
    else if (score >=80){console.log('You got B!')}
    else if (score >=70){console.log('You got C!')}
    else if (score >=60){console.log('You got D!')}
}else {
    console.log("Something's wrong with your scores!")} */

//switch & case
//쇼핑몰 검색창에 사용자가 입력한 값 조건 확인
//딸기 = 1000원
//사과 = 1000원
//판매상품이 아닙니다.

//const fruit = prompt('딸기')
/* console.log(fruit);

switch(fruit){
    case '딸기':console.log('1000원'); break;
    case '사과':console.log('2000원'); break;
    default : console.log('판매상품이 아닙니다.')
}

//전화 단축키
//const phoneNumber = prompt('단축키 입력')
switch(phoneNumber){
    case '1' : console.log('Sis'); break;
    case '2' : console.log('Dad'); break;
    default : console.log('No number');
} */

//삼항조건
//쇼핑몰 수량+가격 알고리즘
//- 버튼 클릭 시 수량 감소 & 가격 감소 (1일때 - 누르면 경고)
const minusBtn = document.querySelector('#minus')
const plusBtn = document.querySelector('#plus')
const numberInput = document.querySelector('#num')
const priceP = document.querySelector('p.price')
console.log(minusBtn, plusBtn, numberInput, priceP)
let numVal = 1;
let originalPrice = 900;
let stock = 10; //재고
calcFunc()

minusBtn.addEventListener('click', ()=>{
    numVal == 1 ? console.log('최소 구매 수량') : numVal--;
    calcFunc()
})
plusBtn.addEventListener('click',()=>{
    numVal < stock ? numVal++ : console.log('최대 구매 수량')
    calcFunc()
})
function calcFunc (){
    numberInput.value = numVal; //초기값 대입
    priceP.textContent = `${numVal*originalPrice}원` //초기값 가격
}