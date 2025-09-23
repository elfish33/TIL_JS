//for.js
//반복문
//for문의 초기변수로 자주 사용하는 변수명 : i, j, k, m, n

//1~5 반복문
for(let i = 1; i<6; i++){console.log('반복')}
//5~10 반복문 5678910
for(let i = 5; i<=10; i++){console.log(i)}
//5~0 반복문 543210
for(let i = 5; i>=0; i--){console.log(i)}
//초기값 0 시작
//출력형태 JS Day1 JS Day2 JS Day3


for(let i = 0; i < 3; i++){console.log(`JS Day ${i+1}`)}


console.log('-------------------------------------------')
for(let i = 0; i < 3; i++){console.log(`JS Day ${i++}`)}
console.log('-------------------------------------------')
for(let i = 0; i < 3; i++){console.log(`JS Day ${i+=1}`)}
console.log('-------------------------------------------')
//구구단 2*1 ~ 2*9
//2*1
//2*2
//2*3
//2*4
//2*5
//2*6
//2*7
//2*8
//2*9
const dan2 = document.querySelector('.dan2')
for(let i = 1; i<=9; i++){
    //dan2.innerHTML = `<li>2*${i}=${2*i}</li>`; //대입연산자가 앞에 있는 값을 다 지움; 그래서 9만 보임 
    dan2.innerHTML += `<li>2*${i}=${2*i}</li>`; //поэтому нужно использовать += а не просто = 
}
const array = ['photoshop', 'illustrator', 'figma', 'html', 'css']
console.log(array[0])
for(let i =0; i<3; i++){
    console.log(array[i])//мы можем поставить i внутрь индекса массива
}

console.log('-------------------------------------------')
for(let i = 0; i < array.length; i++){
    console.log(array[i])//мы можем поставить i внутрь индекса массива
}
console.log('-------------------------------------------')
for(let i = array.length-1; i >= 0; i--){
    console.log(array[i])
    //let i = array.length-1 значит пусть ай будет начинаться с числа длины массива - 1 (чтобы не показывался undefined так как без -1 одно место в массиве остается пустым) 
}

const flower = [{
    name: '장미',
    month: 1,
},{
    name: '개나리',
    month: 2,
},{
    name: '수선화',
    month: 3,
},{
    name: '해바라기',
    month: 4,
}
]

for(let i = 0; i < flower.length; i++){console.log(`${flower[i].month}월 탄생화 ${flower[i].name}`)}

console.log('----------------------------------반목문과 조건문')
//1-10 반복출력(홀수)
//변수%2 == 1 = 홀수, 0== 짝수
for(let i = 1; i <11; i++){
    //console.log(i)
    if (i%2==1){console.log(i)}//покажи ай только тогда когда остаток деления на два равен 1
}
console.log('----------------------------------')
for(let i =5; i <21; i++){
    if (i%2==0){console.log(i)}
}
console.log('----------------------------------')
for (let i = 10; i > 0; i--){
    if(i%2==1){
        console.log(i)
    }
}
console.log('----------------------------------')
const dan2Li = document.querySelectorAll('li')
console.log(dan2Li) // мы можем ловить даже те селекторы, которые были созданы не в HTML а в JS!
//если это каждый второй ли отобразить его синим
//если нет отобразить желтым
//dan2Li[0].style.backgroundColor = "blue";
/*for(let i = 0; i < dan2Li.length; i++){
    if(i%2){
        dan2Li[i].style.backgroundColor = "yellow";
        } else {dan2Li[i].style.backgroundColor = "blue";}//помним, что индекс начинается с 0, поэтому чтобы выглядело правильно, в итоге нужно поменять местами цвета
} */
console.log('----------------------------------')
//object.classList.add (CSS class 추가)
//object.classList.remove (CSS class 제거)
//css or sass 클래스 미리 준비하고 나중에 JS에서 동적결과에 따라 적용
for(let i=0; i < dan2Li.length; i++){
    dan2Li[i].classList.add('size')//это общее свойство для всех ЛИ; поэтому выносим его за пределы условного уравнения (а неиначе оно будет выполнять внутри и зависеть от его условий)
    if(i%2==0){
        dan2Li[i].classList.add('color_even'); // пример как можно добавить подготовленный заранее в CSS класс со стилем, чтобы не прописывать по сто раз сам стиль в JS, а быстро вставить его из готового // выглядит очень удобно!
    }else{
        dan2Li[i].classList.add('color_odd')
    }
}
console.log('--------------------------------- while')
//ex) Повторяй пока не получишь правильный логин / пароль от пользователя 
//ex) 보안 서비스 в банке пока ты в своем кабинете
//while(조건){조건이 참일 때 반복실행}
/* let htmlQ = prompt('a태그는 가로, 새로 크기를 가질 수 없다. ox중 하나를 입력하세요')
while(htmlQ != 'x'){
    htmlQ = prompt('a태그는 가로, 새로 크기를 가질 수 없다. ox중 하나를 입력하세요')
}//когда условие становится false выполнение заканчивается
alert('정답쓰!') */

/* let cssQ = prompt('ox퀴즈 : CSS는 HTML 하나도 몰라도 사용할 수 있다?!')
while(cssQ != 'x'){
    cssQ = prompt('흠.. 다시 한번 생각해보죠! ox퀴즈 : CSS는 HTML 하나도 몰라도 사용할 수 있다?!')
}alert('Good job!~') */

while(false){
    const qa = prompt('JS는 동적 언어이다?(O/X)')
    if(qa !== 'x' && qa !== 'o'){
        alert('잘못된 입력입니다! 다시 입력하세요');
        continue;//не проверяй что там дальше, а снова возвращайся к началу (то есть промпту) (грубо говоря пока пользователь не напишет о или х)
        //break;
    }

    if (qa === 'o'){
        alert('맞아요!');
    } else {
        alert('노놉!');
    }
    break;
}
//alert('퀴즈 킅!');
console.log('--------------------------------- 반복문 중첩')
const dan99 = document.querySelector('.dan99')
let li99 = ''; // нужно создать переменную здесь, чтобы потом не создавать ее снова внутри for 
for(let i = 2; i<10; i++){//1단 for 시작
    for(let j = 1; j < 10; j++){//2단 for의 시작
        li99 += `<li>${i}x${j}=${i*j}</li>`
    }//2단 for의 끝(2단 for가 모두 반복 후 1단 다시 시작)
    dan99.innerHTML = li99;//эффективнее размещать эту строку здесь, потому что именно так внутри 2-го фор накопятся значения переменной, которые потом будут превращены в теги <li>
}//1단 for 종료

//for ES6
//for in
const cat = {
    color: ['흰색', '검은색', '노렁색'],
    age: 2,
    name: '삼색이',
}
console.log(cat.color)
console.log(cat.age)
console.log(cat.name)
console.log('====================')
for(let i in cat){
    console.log(i, cat[i])//всю инфу сразу проверить можно
}
console.log('====================')
const menuA = document.querySelectorAll('.menu a');
for(let i in menuA){
    console.log(i)
    }
for(let i of menuA){
    console.log(i)
    
    i.addEventListener('click', ()=>{
        console.log(i)
        i.style.color = 'pink';
    })
}