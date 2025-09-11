// 함수
//1. 함수 대기 (생성한 상태)
function func1(){
    console.log('반복 실행 내용')
}
//2. 함수 호출 (생성 밖)
func1();

// 함수의 매개변수 활용
function storyFunc1(data='조약돌', day=1){ // Fist Day -- Success
    console.log(`매개변수 값 확인 : ${day}`)
    //헨젤, 그레텔 준비
    const person = ['헨젤', '그레텔']
    //조약돌 준비
    // const src = '조약돌'
    // 집 돌아간다 목표
    // 1일차 헨젤과 그레텔이 조약돌을(를) 이용해서 집을 찾아갔습니다.
    // 2일차 헨젤과 그레텔이 빵부스러기을(를) 이용해서 집을 찾아갔습니다.
    // 3일차 헨젤과 그레텔이 쌀을(를) 이용해서 집을 찾아갔습니다.
    console.log(`${day}일차 ${person [0]}과 ${person [1]}이 ${data}을 이용해서 집을 찾아갔습니다 `)
}

/* function storyFunc2(){ // Second Day -- Fail
    //헨젤, 그레텔 준비
    const person = ['헨젤', '그레텔']
    //조약돌 준비
    const src = '빵부스러기'
    // 집 돌아간다 목표
    // 헨젤과 그레텔이 빵부스러기를 이용해서 집을 찾아갔습니다.
    alert(`${person [0]}과 ${person [1]}이 ${src}를 이용해서 집을 찾아갔습니다 `)
} */

storyFunc1()
storyFunc1('빵부스러기', 2)
storyFunc1('쌀', 3)


// 커피 알바
function cafe (coffeeType = '아메리카노', water = 2, esp = 1) {
    console.log(`${coffeeType}의 레시피 : ${water}컵 물을 채운다. ${esp}샷 에스프레소를 넣는다.`);
}
cafe()
cafe('에스프레소', 0)

function kiosk(temp, menu, cup = 1) {
    console.log(`${temp} ${menu} ${cup}잔 주문완료되었습니다 :)`)
    //console.log(`${hot} ${menu} ${cup}잔 주문완료되었습니다 :)`)
    //console.log(`${cold} ${menu} ${cup}잔 주문완료되었습니다 :)`)
}
kiosk('따뜻한', '카페라떼', 2)
kiosk('차가운','아메리카노')
kiosk('따뜻한','녹차라떼', 2)
kiosk('차가운','아메리카노')

//배열
function kiosk_array(hotice, menuName, cupNum){
    const type = ['따뜻한', '차가운'];
    const menu2 = ['카페라떼', '아메리카노','녹차라떼'];
    console.log(`${type [hotice]} ${menu2[menuName]} ${cupNum}잔 주문완료되었습니다.`);
}
kiosk_array(0,0,2)
kiosk_array(1,1,1)
kiosk_array(0,2,2)
kiosk_array(1,1,1)


//객체 활용
console.log('============================')
function kiosk_obj(hotice, name, cupNum2){
    const coffee_kiosk = {
        type : ['따듯한', '차가운'],
        menu : ['카페라떼', '아메리카노','녹차라떼']
    }
    console.log(`${coffee_kiosk.type[hotice]} ${coffee_kiosk.menu[name]} ${cupNum2}잔 주문완료되었습니다.`)
}
kiosk_obj (0,0,2);
kiosk_obj (1,1,1);
kiosk_obj (0,2,2);
kiosk_obj (1,1,1);

console.log('============================return')
function plusFunc1(n1, n2){
    let calc = `${n1} * ${n2} = ${n1*n2},`
    calc += `${n1} + ${n2} = ${n1+n2}`
    return  calc
}
/* function plusFunc2(n1, n2){
    //console.log(`${n1} + ${n2} = ${n1+n2}`)
    alert(`${n1} + ${n2} = ${n1+n2}`)
} */
console.log(plusFunc1(5,5))
//alert(plusFunc1(2,5))

//구구단 함수
// 출력예시 ) 변수 x 변수 = 결과
function dan99Func(dan){

    let calc = ''
    calc += `${dan}X1 = ${dan * 1},
    ${dan}X2 = ${dan * 2}, 
    ${dan}X3 = ${dan * 3}, 
    ${dan}X4 = ${dan * 4}, 
    ${dan}X5 = ${dan * 5}, 
    ${dan}X6 = ${dan * 6}, 
    ${dan}X7 = ${dan * 7}, 
    ${dan}X8 = ${dan * 8}, 
    ${dan}X9 = ${dan * 9}`
    return calc
}
console.log(dan99Func(7))
//alert(dan99Func(8))
//prompt(dan99Func(3))
console.log('============================할인률 계산기')
//계산식 : KB국민카드 5% 할인 적용가 ?
// 현대카드 10% 할인 적용가 ?
//삼성카드 20% 할인 적용가 ?
//할인율 계산법 (100-5)/100 = 0.95
// 판매가 * 0.95
function cardFunc(cardName, num){
    const price = 1051000; //원가
    const card = ['KB국민카드','현대카드','삼성카드']
    const percent = [5, 10, 20]; //할인%
    const calc = (100-percent[num])/100; // 할인율
    const totalPrice = price * calc; //할인가계산
    const result = `${card[cardName]} ${percent[num]}% 할인적용가 ${totalPrice.toLocaleString('ko-kr')}원 `; // 출력결과
    return result
}
console.log(cardFunc(0, 0))
console.log(cardFunc(1, 1))
console.log(cardFunc(2, 2))

function cardFunc_teacher(cardType, discount){
    const price = 1051000; //원가
    const card = ['KB국민카드','현대카드','삼성카드']
    const calc = (100-discount)/100; // 할인율 계산
    const totalPrice = price * calc; //할인가 계산
    const result = `${card[cardType]} ${discount}% 할인적용가 ${totalPrice.toLocaleString('ko-kr')}원 `; // 출력결과
    return result
}
cardFunc_teacher(2, 20)


//익명함수
// 변수 내 function 키워드를 지정해 생성하는 함수
function hello1(user){
    return alert('Hello, ' +user)
}
//hello1('Polina')

const hello2 = function(user){
    return alert('Hello, '+user)
}
//hello2('Polina')

//익명 함수 + 화살표함수(ES6)
//변수키워드 변수명 대입연산자 (매개변수) 화살표 {실행}
const hello3 = (user) => {
    return console.log('Hello, ' + user)
}
hello3('Polina');