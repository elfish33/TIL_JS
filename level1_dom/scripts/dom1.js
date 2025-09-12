const inputTag = document.querySelectorAll('input');
const buttonTag = document.querySelectorAll('button');
console.log(inputTag, buttonTag);
console.log(inputTag[0], buttonTag[0]);
console.log(inputTag[1], buttonTag[1]);
console.log('============================')
//const searchInput = document.querySelector('input[name=s]')
//const searchInput = document.querySelector('#s')
//const searchInput = document.querySelector('section:first-child input');
const searchInput = document.querySelector('input[type=search]')
const searchBtn = document.querySelector('#search_btn');
const shopNumInput = document.querySelector('#num');
const shopCartBtn = document.querySelector('#cart_btn');
//console.log(searchInput, searchBtn, shopNumInput, shopCartBtn);//querySelectorAll이 아니므로 [인덱스] 사용금지!
//태그 속성, 함수 테스트
console.log(searchInput.type, searchInput.placeholder); //속성 읽기 (테스트)
// () 함수일 때 = 속성일때!
searchInput.placeholder = ""; //속성일때
let checkValue = ''; //빈 값 초기화
searchInput.value = "인기 검색어 HTML"; // value 값 변경
checkValue = searchInput.value;// 변경값 변수 담기
console.log(checkValue);//출력확인

//
console.log('====================');
console.log(shopNumInput.value +1);
console.log(typeof(checkCartValue));
checkCartValue = Number(shopNumInput.value) +1;
console.log(typeof(checkCartValue));
console.log(`주문 수량 :${checkCartValue}`);
console.log('====================');

//style
searchInput.style.backgroundColor = '#000';
searchInput.style.color = '#fff';
searchInput.style.lineHeight = '25px';
searchBtn.style.borderRadius = '15px';
searchBtn.style.backgroundColor = 'darkgreen';
searchBtn.style.padding = '8px';
searchBtn.style.width = '100px';
searchBtn.style.color = '#fff';
shopNumInput.style.backgroundColor = 'darkgrey';
shopNumInput.style.lineHeight = '25px';
shopNumInput.style.color = '#fff';
shopCartBtn.style.borderRadius = '15px';
shopCartBtn.style.backgroundColor = 'darkred';
shopCartBtn.style.color = '#fff';
shopCartBtn.style.padding = '8px';
shopCartBtn.style.width = '80px';
console.log('====================');
//이벤트 활용 콜백함수 호출
//이벤트 문법
//object.addEventListener('event type', callback function)
const orderBtn = document.querySelector('#order'); // selection of selector
console.log(orderBtn);

//주문 버튼 클릭시 '상품을 선택하세요' 경고창 출력
//이벤트 뒤 함수 작성방법: 콜백함수호출(추천), 익명함수
/* orderBtn.addEventListener('click', function(){
    alert('상품을 선택하세요')
}) */
orderBtn.addEventListener('click', orderFunc_v2('상품을'))
/* orderBtn.addEventListener('click', ()=>{
    orderFunc('장바구니에')
})
function orderFunc(data) {
return alert(data+ ' 담으세요!')
} */
function orderFunc_v2(data) {
    return function() { //클로저
        //내부 함수는 외부 함수의 매개변수를 기억한다
        alert(data+ ' 담으세요!')
    }
}
//주문하기 클릭 시 '장바구니에 담으세요'
//장바구니 클릭 시 '상품을 담으세요'
//콜백함수 1개만 활용 각각 DOM 이벤트 클릭 시 다른 메세지 출력하기

//아이디, 비밀번호 중복확인 클릭 시
// 아이디가 중복되었습니다
// 비밀번호가 중복되었습니다
// Algorithm
//1. 제어 DOM 대상 -> 변수 등록
const idOverlapBtn = document.querySelector('#id');
const pwOverlapBtn = document.querySelector('#pw');
console.log(idOverlapBtn, pwOverlapBtn)
//2. event 유무? 클릭 시 -> 이벤트 콜백 함수
idOverlapBtn.addEventListener('click', ()=> {overlapFunc('아이디')});
pwOverlapBtn.addEventListener('click', ()=> {overlapFunc('비밀번호')});

//3. 실행 메세지가 통일된 특징에 맞춰 콜백함수 1개 제작
function overlapFunc(text){
    return alert(text+ '가 중복되었습니다')
}

/* function overlapFunc(text){
    return function () {
        alert(text+ ' 가 중복되었습니다')}
} */
// 3-1 콜백 함수 내에 함수호출 시 다른 내용이 있으면 매개변수 제작
//4. 3번 콜백함수를 2번 이벤트에서 호출

// 이벤트 콜백 함수
//Q1. textarea 값을 입력했을 때 콘솔창에 '50자 이상 입력하세요' 출력
const reviewText = document.querySelector('textarea#review');
console.log(reviewText)
reviewText.addEventListener('keydown', textFunc);
reviewText.addEventListener('focus', ()=> {borderFunc('red')})
reviewText.addEventListener('blur', ()=> {borderFunc('#aaa')})
function textFunc(){return console.log('50자 이상 입력하세요!')}
function borderFunc(color){
    return reviewText.style.border = `1px solid ${color}`
}
// 배경 버튼 마우스 올리면 시 부모인 article 배경색 변경하기
const articleTag = document.querySelector('article');
const bgBtn = document.querySelectorAll('button[class*=bg]');
console.log(bgBtn)
articleTag.style.width = '430px'
articleTag.style.height = '90vh'
articleTag.style.backgroundColor = '#eee'
bgBtn[0].addEventListener('mouseover', mouseoverBg('#ffc'));
bgBtn[1].addEventListener('mouseover', mouseoverBg('#0cf'));
bgBtn[2].addEventListener('mouseover', mouseoverBg('#f01'));
function mouseoverBg(bgColor){
    return function(){
    articleTag.style.backgroundColor = bgColor;
    bgP.textContent = `현재 배경색상 : ${bgColor}`;
    }
}
console.log('====================');
const bgP = articleTag.querySelector('p'); //указываем селектор
console.log(bgBtn, bgP)
//bgP.textContents = '현재 배경색상 : #eee'