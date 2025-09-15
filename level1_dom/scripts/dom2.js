//DOM2
//1. qustn section * 2, a * 2, btn * 2 (동적 대상 체크 후 변수생성)
const sectionTag = document.querySelectorAll('section');
const linkCls = document.querySelectorAll('section .link');
const btnCls = document.querySelectorAll('section .btn');
console.log(sectionTag, linkCls, btnCls)
//2.이벤트 함수, 속성
// 초기값(즉시실행)
sectionTag[0].style.backgroundColor = '#ff0'
sectionTag[1].style.backgroundColor = '#0cf'


//이벤트, 콜백함수 추가 생성
//a2 클릭 시 section[1] 배경색 변경
/* linkCls[1].addEventListener('click', bgFunc) // 클릭 시 bgFun이란 함수를 부른다
function bgFunc(e) {
    console.log(e);
    e.preventDefault();
    return sectionTag[1].style.backgroundColor = '#bebebe'
} */
/* linkCls[1].addEventListener('click', function(event){
    console.log(event);
    event.preventDefault();
    sectionTag[1].style.backgroundColor = '#bebebe'
}) */
linkCls[1].addEventListener('click', (e)=> {
        e.preventDefault();
        sectionTag[1].style.backgroundColor = '#bebebe';
    })

/* linkCls[0].addEventListener('click', clickFunc)
function clickFunc(e){
    e.preventDefault();
    return sectionTag[0].style.backgroundColor = 'lightpink';
} */
linkCls[0].addEventListener('click', (e)=> {
    e.preventDefault();
    sectionTag[0].style.backgroundColor = 'lightblue';
})
//a, button(type=button)
/* btnCls[0].addEventListener('click', ()=>{
    window.location.href = 'https://google.com'
})
btnCls[1].addEventListener('click', function(){
    window.location.href = '../sass_study/project2/index.html'
}) */
    btnCls[0].addEventListener('click', sassProjectFunc('project1'))//project1/index
    btnCls[1].addEventListener('click', sassProjectFunc('project2'))//project2//index
    function sassProjectFunc(folder){
        return function() {
            location.href = `../sass_study/${folder}/index.html`
        }
    }
//쇼핑몰 수량 변수
//목표 : 수량이 1로 시작, plus 클릭하면 증가, minus 클릭하면 감소
//목표 2: 1게당 가격이 12900원
const inputNum = document.querySelector('#num');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
let count = 1;
console.log(inputNum, plusBtn, minusBtn);
let startPrice = 12900;
const priceCls = document.querySelector('#numFrm .price em');
//초기값 선언
inputNum.value = count;
priceCls.textContent = startPrice.toLocaleString('ko-kr');
console.log(priceCls.textContent)
//이벤트, 함수
plusBtn.addEventListener('click', plusFunc)
minusBtn.addEventListener('click', minusFunc)
function plusFunc(){
    //return inputNum.value = Number(inputNum.value) + 1;
    //1 증가연산자 ++ 
    inputNum.value = ++count
    let totalPrice = startPrice * count
    return priceCls.textContent = totalPrice.toLocaleString('ko-kr')
}
function minusFunc(){
    inputNum.value = --count
    let totalMinus = startPrice * count
    return priceCls.textContent = totalMinus.toLocaleString('ko-kr')
}
/* function priceCalcPlus(){
    const totalPlus = startPrice * count
    priceCls.textContent = totalPlus.toLocaleString('ko-kr')
    return totalPlus
}
function priceCalcMin(){
    const totalMin = startPrice * count
    priceCls.textContent = totalMin.toLocaleString('ko-kr')
    return  totalMin
} */
