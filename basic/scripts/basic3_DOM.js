function naverLink(){
    return window.open('https://naver.com', '_blank')
}
//naverLink()

const writeFunc = function(){
    return window.location.href('https://google.com');
}
//writeFunc();

//DOM
const btn = document.getElementsByTagName('button');
const div = document.getElementsByTagName('div');
console.log(btn, div);
btn[0].style.color = 'red';
btn[0].style.backgroundColor = 'yellow';
btn[0].style.border = '1px solid blue';
div[4].style.backgroundColor = 'lightgreen';
div[4].style.transform = 'rotate(10deg)';

// JS -- HTML, CSS 제어할 수 있음!
//DOM.style.color; //읽기
//DOM.style.color = '값; //수정
//객체.속성.속성
//객체.함수

//class 선택하기
const slide = document.getElementsByClassName ('slide'); // без точки
const slideWrap = document.getElementsByClassName('slide_wrap');
console.log(slideWrap);
slide[0].style.backgroundColor = '#ff0';
slide[1].style.backgroundColor = 'rgba(0,0,0,0.1)';
slideWrap[0].style.border = '5px solid purple';
//아이디 DOM
const container = document.getElementById('slide_container');
console.log(container);
container.style.margin = '0 auto';
container.style.backgroundColor = 'pink';

slide_container.style.filter = 'invert(1)';

console.log('========================');
// ES6 querySelector
const tag_es6 = document.querySelectorAll('div');
const cls_es6 = document.querySelectorAll('.slide');
const id = document.querySelector('#slide_container');

console.log(tag_es6, cls_es6, id)

console.log('========================');
//query practice
const navMain = document.querySelector('#main');
const navGnb = document.querySelector('.gnb');
const navLi = document.querySelectorAll('.gnb > li'); //.gnb 안에 모든 li
const navLi_v2 = navGnb.querySelectorAll('.gnb > li'); //부모 = navGnb not a body
const navLinks = navLi[0].querySelectorAll('a'); //하나밖에 못 찹음
const navLinks_v2 = document.querySelectorAll('.gnb > li > a'); //하나밖에 못 찹음
console.log(navMain, navGnb, navLi, navLinks)

navGnb.style.display = 'flex';
navGnb.style.fontSize = '2.0rem';
navLi[2].style.transition = 'transform 0.3s linear 2s'
navLinks[0].style.animation = 'rotate360 1s alternate infinite'

console.log('========================');
//로그인 알고리즘
//버튼 클릭 시 사용자가 입력한 아이디, 이름, 비번 확인 알고리즘
const loginBtn = document.querySelector('#loginFrm button');
const loginId = document.querySelector('#id');
const loginName = document.querySelector('#name');
const loginPw = document.querySelector('#pw');
console.log(loginBtn, loginId, loginName, loginPw);
console.log(loginId.name);
console.log(loginId.type);
function userInfo (){
    let data = loginId.value;
    data += loginPw.value;
    data += loginName.value;
    return console.log(data);
}