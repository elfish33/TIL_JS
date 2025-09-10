//1일차 복습 (가계부앱 변수생성과 출력)
// 커피 1500원
// 도시락 6000원
// 대중교통 3000원
//결과) 오늘 총 지출액은 000원입니다.

//Practice in the class
let coffee = 1500;
let mealkit = 6000;
let transportFee = 3000;
const total = coffee+mealkit+transportFee;
console.log(`오늘 총 지출액은 ${total.toLocaleString('ko-kr')}원입니다`);

//My further practice
/* let coffee = Number(prompt('커피 값은 얼마일까요?'));
let mealkit = Number(prompt('도시락 값은 얼마일까요?'));
let transportFee = Number(prompt('교통비는 얼마일까요?'));
const total = coffee+mealkit+transportFee;
console.log(`오늘 총 지출액은 ${total}입니다`); */

//숫자에 3자리 간격 콤마 표시하기
//10000 숫자 vs 10,000 문자
//객체.함수(); 변환객체.toLocaleString('ko-kr');

// 문자 string data 연습
// 리뷰 작성 기준 50자 이상
// 콘솔 출력) 현재 작성 리뷰 글자 수는 000자입니다.
//let review = prompt('리뷰를 작성하세요~');
//console.log(review);
// 글자 수 체크 속성 length
//let review_length = review.length;
//console.log(`현재 작성 글자 수는 ${review_length} 자입니다`);

//오브젝트형 데이터 - 객체
// 변수생성키워드 변수명 = {키:값, 키:값, 키:값...}
let rectangle = {
    width:300,
    height:200,
    x:0,
    y:-100,
}
console.log(`${rectangle.width}px, ${rectangle.height}px`);

let user_info = {
    name: '가을',
    age:3,
    gender: 'female',
    area: '서울',
}

let product = {
    name: '마스크',
    price:1000,
    quantity:999,
    color:'black',
}

let movie_theater = {
    name:'VIP',
    position: 'F1',
    price:14500,
}
// 상품명 : 마스크
// 상품가 : 1,000원
// 수량 : 999개
console.log(`상품명 : ${product.name}(${product.color})`);
console.log(`상품가 : ${product.price.toLocaleString('ko-kr')}원`);
console.log(`수량 : ${product.quantity}개`);
// 오브젝트 데이터 타입 2. 배열
//변수생성키워드 변수명 = [배열값, 값2, 값3]
//변수생성키워드 변수명 = new Array (값, 값, 값)
//변수생성키워드 변수명 = new Array (자리값)
const yoil = ['월','화','수','목','금','토','일'];
console.log(yoil);
console.log(`오늘은 ${yoil[2]}요일`);

const en = new Array ('a','b','c','d','e','f');
console.log(en);
console.log(en[5], en.length);

const year = new Array(4);
console.log(year);

year [0] = 2025;
year [1] = 2024;
year [2] = 2023;
year [3] = 2022;
console.log(year);

// 좋아하는 색상 6개 배열, 그 중 제일 좋아하는 거 2개 콘솔에 출력
let color = ['red', 'blue', 'skyblue', 'purple', 'darkgreen', 'grey'];
console.log(color[2],color[5]);

//좋아하는 과일 5개 배열 + 역순 출력
let fruits = ['apple', 'mango', 'banana', 'orange', 'lemon'];
console.log(fruits [4], fruits [3], fruits [2], fruits [1], fruits [0],);

// 요일-날씨 정보 출력
// 월 - 맑음
// 화 - 비
// 수 - 흐림
// 목 - 맑음
// 금 - 맑음
// 토 - 비
// 일 - 흐림
//2 массива данных
const dayOfWeek = ['월','화','수','목','금','토','일'];
const weather = ['맑음', '비', '흐림'];
console.log(`${dayOfWeek [0]} - ${weather [0]}`);
console.log(`${dayOfWeek [1]} - ${weather [1]}`);
console.log(`${dayOfWeek [2]} - ${weather [2]}`);
console.log(`${dayOfWeek [3]} - ${weather [0]}`);
console.log(`${dayOfWeek [4]} - ${weather [0]}`);
console.log(`${dayOfWeek [5]} - ${weather [1]}`);
console.log(`${dayOfWeek [6]} - ${weather [2]}`);

const megabox = new Array(8);
megabox[0] = 'A1';
megabox[1] = 'A2';
megabox[0] = '';
megabox[1] = null;
console.log(`현재 예매 좌석은 : ${megabox[0]} ${megabox[1]}`);

//CGV 좌석 예매와 취소
const cgv = []; // 빈 배열 준비
console.log(cgv.length); // 0 표시
//좌석 A1 선택
cgv.push('A1');
console.log(cgv); // A1 표시
cgv.push('A2');
console.log(cgv); // A1, A2 표시
cgv.pop(); //pop의 성격상 값을 안 써도 돼, 어차피 끝에서 하나 제거하니까
console.log(cgv); // A1 표시
cgv.unshift('A4');
console.log(cgv); // A4, A1 표시
cgv.shift(); //
console.log(cgv); // A1 표시
cgv.push('B1', 'B2');
console.log(cgv); // ['A1', 'B1', 'B2'] 표시
console.log(cgv.length >= 8);
// 선택 좌석이 8개면 좌석 추가 금지
const price = 11000;
//선택 좌석 수 : 00
//총 결제 금액 : 0000원
const cgv_length = cgv.length;
const totalPrice = (price*cgv_length).toLocaleString('ko-kr');
console.log(`선택 좌석 수 :${cgv_length}`)
console.log(`총 결제 금액 :${totalPrice}원`)

console.log('=======================');
//연산자 연습
//1. 산술연산자
let num1 = 5;
let num2 = 2;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

//이항연산자 활용 두 수를 사용자에게 입력받고 입력받은 값 활용 더하기만 되는 계산기 만들기
const firstNum = 3;
const lastNum = 5;
const calcResult = firstNum + lastNum;
console.log(`${firstNum}*${lastNum}=${firstNum * lastNum}`);

//증감연산자
console.log('========================');
let x = 5;
let y = 0;
console.log(x,y);
y = x++;
console.log(x,y); //6 5
x = ++y;
console.log(x,y); // 6 6
x++; // 7
console.log(x,y); // 7 6
--y; // 5
console.log(x,y); // 7 5

let a = 10
let b = 20
let c = 30
let d = 40
//a=11, b=19, c=31, d=39,
a++ 
b--
c++
d--
console.log(a, b, c, d)
//a=21, b=20, c=31, d=39,
a=++b //a = 20
b = a++ // b = 20, a=21
console.log(a, b)
//21 20

//a=21, b=20, c=42, d=42,
c=a+b //41
d=++c //d= 42 c= 42
console.log(c, d)

//a=53, b=42, c=43, d=41,
a=++c + 10 //c =43, a = 43+10 = 53
b= --d +1 // 42
console.log(a, b, c, d)

console.log('========================');
//복합대입연산자
let number =10;
//number = number+5;
number += 5; //위랑 같은 말인데 좀 더 효과적인 방법임
console.log(number); //15
number -= 5;
console.log(number); //10
number *= 2;
console.log(number); //20
number /= 2;
console.log(number); //10
number %= 2;
console.log(number); //0
