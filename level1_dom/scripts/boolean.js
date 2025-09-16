//Boolean.js
// false로 평가되는 값
// false, null, undefined, NaN, 0, ""
//위 제외 모든 값 true로 평가됨 [], {} 포함
let a = "";
console.log(Boolean(a));
a = [];
console.log(Boolean(a));

console.log('=========일치연산자')
//비교연산자
//== 일치연산자, === 값&데이터타입 일치
let b = 10;
let c = "10";
let result = b == c; // 값만 비교 => true
console.log(result)
result = b === c; // 값&data type 비교 => false
console.log(result)
console.log('=========부등연산자')
result = b != c; // 값이 다르냐?
console.log(result) // 값만 비교 => false (not diffrent) // ㄴㄴ 다르지 않지!
result = b !== c; //값과 데이터 타입이 다르냐?
console.log(result) // 값&data type 비교 => true (diffrent) // ㅇㅇ 달라!
console.log('=========비교연산자')
c =2; // b 15 c 2
result = b >= c;
console.log(result)
console.log('=========논리연산자')
console.log("A" && null)
console.log("A" && "B")
console.log(0 && "B")
console.log(null || "B")
console.log("A" || "B")
console.log("" || {})
console.log("" && {})
console.log(!"A") // ! 은 true / false 보여줌
let d;
result = !d;
console.log(result); // undefined = false, false 반전 -> true
let e = []; //true
result = !e; //false
e += ['apple']; // result와 아무 상관 없음, result = false
console.log(result);
console.log('=========if조건문')
//if(조건식){조건식이 참일 때 실행문}
let x = [];
let y = 0;
if(x){console.log('x는 참이다!');} // true -> 실행
if(y){console.log('y는 참이다!');} // false -> 노 실행
if(x == true){console.log('x is true');} // 실행안함 왜? 생긴거만 보기 때문, 데이터타입 보지 않고!
if(x != true){console.log('x is true');} // 실행함 왜? 생긴게 다른지 물어봤고 그게 맞아서!
if(x && y){console.log('x & y are true');}//false이기 때문에 당연히 싱행 안됨
if(x || y){console.log('x or y are true, and x is true actually');}//true니까 출력됨
console.log('=========x = 7 y =2')
x = 7;
y = 2;
if(x>y && x==y){console.log('참일 때 나오는 문구1');}//false니까 아무것도 출력안됨
if(x>y || x==y){console.log('참일 때 나오는 문구2');}//true니까 출력됨
if(!x){console.log('참일 때 나오는 문구3');}// true -> false 반전 -> 출럭 x
if(y || !x){console.log('참일 때 나오는 문구4');}//true -> 출력 o
//에버렌드 놀이기구 탑승조건 확인
// 나이 입력 후 버튼 클릭 시 10살 이하면 '탑승불가' 메세지 출력
// 변수 : 사용자 나이, 버튼, 메세지
console.log('=====================에버렌드')
const ageInput = document.querySelector('#age')
const ageBtn = document.querySelector('#age_btn')
const ageResult = document.querySelector('.result')
console.log(ageInput, ageBtn, ageResult)
console.log(ageInput.value)//아무것도 뜨지 않음 초기값('')이니까 
//이벤트 함수 밖에 작성하는 건 초기값 확인용
ageBtn.addEventListener('click', ()=>{
    console.log(ageInput.value)
    //10살 이하면 '탑승불가' 메세지 출력
    if(ageInput.value <= 10){
        ageResult.textContent = '탑승 불가합니다 ㅠㅠ';
        //ageInput.value = '';
        ageInputReset();
    }

    if(ageInput.value > 10) {
        ageResult.textContent = '탑승 가능합니다 :)';
        ageInputReset();
    }
    if(ageInput.value == ""){
        ageResult.textContent = '값을 입력하세요!';
        ageInputReset();
    }
})
function ageInputReset(){
return ageInput.value = '';
}
//인쇄 알고리즘
// 인쇄하기 버튼 클릭 시 '인쇄 하시겠습니까?' 물어보고 확인 누르면 인쇄창 실행
// 변수 : 버튼
const printBtn = document.querySelector('#print_btn');
printBtn.addEventListener('click', ()=>{
    let confirmResult = confirm('인쇄 하시겠습니까?');
    if(confirmResult){
        print();
    }
})
//true와 false에 따른 결과출력 조건문
//if(조건식){true일 때 실행}else{false일 때 실행}
//관리자 로그인
//관리자(admin) 로그인사용자 아이디 admin일때 '관리자님 안녕하세요' 
// 아니면 '관리자페이지 접근불가'
//변수 userID
/* const userId = prompt('아이디')
if(userId != 'admin'){
    alert('관리자페이지 접근불가')
}else{
    alert('관리자님 안녕하세요')
} */
    console.log('=====================login 조건문')
//login 조건문
//아이디(미입력) 비번(입력) 로그인 시 - 아이디입력 경고 메세지 출력
//아이디(입력) 비번(미입력) 로그인 시 - 비번입력 경고 메세지 출력
//아이디(입력) 비번(입력) 로그인 시 - (맞는 정보 기준) index.html 이동
//아이디(입력) 비번(입력) 로그인 시 - (틀린 정보 기준) 정보 오류 메세지 출력
//변수 4개
const userId = document.querySelector('#user_id')
const userPw = document.querySelector('#user_pw')
const loginBtn = document.querySelector('#login_btn')
const loginErrorMsg = document.querySelector('#loginFrm .error')
console.log(userId, userPw, loginBtn, loginErrorMsg)
console.log(userId.value); //아무것도 안 뜬다
//회워정보 저장 DB
//관리자 - 봄, 30
//일반회원 - 여름, 20
const userDB = [{
    name:'봄',
    age:30,
    pst:'관리자',
    id: 'admin',
    pw: 'admin1234',
},
{
    name:'여름',
    age:20,
    pst:'일반회원',
    id:'summer',
    pw: 'summer1234'
}
];
console.log(userDB[0].id) //как посмотреть айди первого юзера

//로그인 클릭 이벤트
loginBtn.addEventListener('click', ()=>{
    //아이디 미입력 기준 에러 메세지 출력
    if(userId.value == ""){
        loginErrorMsg.textContent = '아이디를 입력하세요!';
    } else if(userPw.value == ""){
        loginErrorMsg.innerHTML = '비밀번호를<br>입력하세요!';
        //추가 조건
        //if의 조건이 거짓이고 else if 조건이 참일 때 실행
    }else if(userId.value == userDB[0].id && userPw.value == userDB[0].pw){
        //location.href = '../index.html';
        //console.log('로그인 성공')
        //isLogin = true;
        //console.log(isLogin)
        //!!!!!!!!로컬 환경에서 확인가능한 브라우저 데이터 저장법
        localStorage.setItem('isLogin2','true')
        //localStorage.setItem('속성','값')
        //localStorage.getItem('가져오는 속성')
    }
    //입력한 id & pw 가 관리자의 저장된 id & pw 동일 시 index 이동(location.href)

    else{
        loginErrorMsg.textContent = '아이디 또는 비밀번호가 잘 못되었습니다. 다시 한번 확인해주세요.'
    }//모든 조건이 거짓일 때 -> 입력 아이디와 비번 저장된 정보와 다를 때
})
//boolean_common.js 변수 확인
console.log('============== boolean_common.js 확인')
console.log(isLogin)