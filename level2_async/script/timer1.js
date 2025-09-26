//setInterval(콜백함수, 시간)
let num1 = 1;
const timer1 = setInterval(function(){
    num1++;
    //num1++;//повышаем переменную на 1 -> каждую секунду будет отображаться timer test 1, 2, 3, 4...
    if(num1 > 5) num1 = 1;
    //console.log('timer test' +num1)
}, 500)//воспроизведение функции с интервалом в 1 сек

//0~6 반복타이머
//123456 0123456 0123456

let num2 = 0;
const timer2 = setInterval(function(){
    //console.log('timer' + num2)
    num2++;
    if(num2 > 6){
        num2 = 0;
    }
}, 300)

//3~0 반복타이머
//3210 3210 3210
let num3 = 3;
const timer3 = setInterval(function(){
    //console.log('timer' + num3)
    num3--;
    if(num3 < 0) num3 = 3;
}, 500)

/* //슬라이드 타이머 활용
const gentleSlide = document.querySelectorAll('.gentle_slide_container1 .slide')
console.log(gentleSlide)
//012345 현재 존재하는 슬라이드 인덱스
//12345 012345 012345 처음에 1, 그다음부터는 0부터
let gentleNum = 1;
const gentleTimer = setInterval(function(){
    //console.log(gentleNum)
    gentleNum++;
    if(gentleNum >= gentleSlide.length) gentleNum = 0;
    for(let i of gentleSlide) i.style.display = 'none'
    gentleSlide[gentleNum].style.display = 'block'
}, 500) */

const gentleSlide2 = document.querySelectorAll('.gentle_slide_container2 .slide')
console.log(gentleSlide2)
let gentleNum2 = gentleSlide2.length - 1; //- 1 потому что мы хотим начать со второго с конца слайда
const gentleTimerBW = setInterval(function(){
    gentleNum2--;
    if(gentleNum2 < 0) gentleNum2 = gentleSlide2.length - 1;
    //console.log(gentleNum2)
    for(let i of gentleSlide2) i.style.display = 'none';
    gentleSlide2[gentleNum2].style.display = 'block'
},500)


//opacity + visibility 서서히 나타나는 슬라이드 애니메이션
const gentleSlide = document.querySelectorAll('.gentle_slide_container1 .slide')
const gentleSlideCurrentNum = document.querySelector('.page_number .current')
const gentleSlideTotalNum = document.querySelector('.page_number .total')
console.log(gentleSlideCurrentNum, gentleSlideTotalNum)

//slide total num 
gentleSlideTotalNum.style.opacity = '1';
gentleSlideTotalNum.style.visibility = 'visible';
gentleSlideTotalNum.textContent = gentleSlide.length;
let gentleNum = 0; //초기갑
gentleSlideCurrentNum.textContent = gentleNum + 1; //초기갑

//012345 현재 존재하는 슬라이드 인덱스
//12345 012345 012345 처음에 1, 그다음부터는 0부터
//gentleSlide 모든 슬라이드에 속성 변경 시 애니메이션 기능 적용 transition
for(let i of gentleSlide) i.style.transition = 'opacity 3s'
const gentleTimer = setInterval(function(){
    //console.log(gentleNum)
    gentleNum++;
    if(gentleNum >= gentleSlide.length) gentleNum = 0;
    for(let i of gentleSlide) {
        i.style.visibility = 'hidden';
        i.style.opacity = '0';
    }
    gentleSlide[gentleNum].style.visibility = 'visible';
    gentleSlide[gentleNum].style.opacity = '1';
    gentleSlideCurrentNum.textContent = gentleNum + 1 // просим менять цифру текущего баннера; + 1 так как неиначе будет начинаться с нуля
}, 3000)