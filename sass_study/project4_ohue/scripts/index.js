//index.js
//작업 HTML 동적인 요소가 무엇이 있는지?
//-> 알고리즘 계획
//1. 상품이미지에 마우스 올릴 때 큰상품 이미지 변경
//2. 😁 저장하기 버튼 클릭 시 로그인 유무에 따라 다른 결과 실행
//3. 리뷰 클릭 시 스크롤 이동
//4. (i) 클릭시 정보 팝업 출력 / 숨기기
//5. 주문 목록 초기 숨기기
//6. 사이즈 select 초기 비활성화 -> 색상 선택 시 활성화
//7. 새깔 & 사이즈 모두 선택해야 주문 목록 출력 (선택한 값이 출력, 주문 금액 변경)
//8. 주문목록의 x 누르면 주문목록이 삭제, 주문금액 초기화
//9. 주문목록의 + 클릭 시 재고수량까지 주문 수량+금액 표시
//10. 주문목록의 - 클릭 시 수량과 금액이 감소; 값이 1일 때 누르면 경고창 출력
//11. (상품 미 선택시) 장바구니&바로구매 클릭 시 '상품을 선택하세요' 경고창 출력
//12. 😁 (상품 선택 시) 장바구니&바로구매 클릭 시 로그인 유무에 따라 다른 페이지 이동
//----------------------------------------------------------------------
//1. 상품이미지에 마우스 올릴 때 큰상품 이미지 변경
//1.변수 -> 2.초기값 설정 -> 3.이벤트 함수 설정
const thumnailA = document.querySelectorAll('.thumnail a');
const thumnailOverView = document.querySelector('.overview img');
console.log(thumnailA, thumnailOverView);
//초기값 = 1번째 a에 light blue border 되어 있음! 
thumnailA[0].style.border = '2px solid #0AA5FF';
thumnailA[0].addEventListener('mouseover', ()=>{
    thumnailA[0].style.border = '2px solid #0AA5FF';
    thumnailA[1].style.border = 'none';
    thumnailOverView.src = thumnailA[0].children[0].src;
    //이미지 확대
    thumnailA[0].children[0].style.transform = 'scale(1.2)'
    thumnailA[1].children[0].style.transform = 'scale(1)'
    thumnailA[0].children[0].style.transition = 'transform 0.3s'
})
//2번째 thumnail에 mouse 올리면 큰 이미지를 두번째 썸네일 이미지로 변경
thumnailA[1].addEventListener('mouseover', ()=>{
    thumnailA[0].style.border = 'none';
    thumnailA[1].style.border = '2px solid #0AA5FF';
    //이미지 변경
    thumnailOverView.src = thumnailA[1].children[0].src;
    //이미지 확대 & ani
    thumnailA[1].children[0].style.transform = 'scale(1.2)'
    thumnailA[0].children[0].style.transform = 'scale(1)'
    thumnailA[1].children[0].style.transition = 'transform 0.3s'
})
console.log('===================================')
console.log(thumnailA[1].children[1])
console.log(thumnailA[1].children[0].src, thumnailOverView.src)
console.log('===================================')
//로그인 정보 저장
//  true == 로그인
//  false == 로그아웃
localStorage.setItem('isLogin', 'true'); //('속성', '값')

//2. 😁 저장하기 버튼 클릭 시 로그인 유무에 따라 다른 결과 실행
const bookMark = document.querySelector('.right_icon .scrap')
let loginStatus = ''; // (6) переменную выносим за пределы функции, чтобы использовать ее не только внутри нее
// это нужно, так как у нас есть еще задания (?) для которых понадобится использование этой переменной
console.log(bookMark)
// (1) создаем клик ивент
bookMark.addEventListener('click', loginFunc)
//(2) после этого мы не просто бездумно создаем условие с if - else
//мы должны сделать функцию, которая будет работать сколько нам захочется
//и внутри нее создать 
function loginFunc(){
    loginStatus = localStorage.getItem('isLogin') //(3) создаем переменную, которая будет иметь 값 состояния логина / логаута
    if (loginStatus == 'true'){
        location.href = './wish.html'//(4)задаем первое условие: если логин выполнен, перейди в виш лист
    } else if(loginStatus == 'false'){
        location.href = './index.html'//(5)задаем второе условие: если логин не выполнен, перейди в индекс
    }
}
//3. 리뷰 클릭 시 스크롤 이동 Скролл на секцию ревью при клике на ревью
//(1)сначала задаем переменные
const reviewBtn = document.querySelector('.contents .review');
const productInfo = document.querySelector('main .product_details');
const reviewWrap = document.querySelector('main .review_wrap');
const stickyInfo = document.querySelector('.sticky_menu .product_link');
const stikyReview = document.querySelector('.sticky_menu .review_link');
console.log(stickyInfo, stikyReview)
reviewBtn.addEventListener('click',(e) => {
    e.preventDefault(); // preventDefault() нужен, чтобы отменить переход по ссылке и сделать скролл вручную
    //переход скролла => window 함수  scrollTo(x, y)
    window.scrollTo(0,100);// на самом деле угадать, на сколько пикселей нужно спускаться трудно (особенно если это далеко)
    window.scrollTo(0, reviewWrap.offsetTop); //поэтому нам нужен offsetTop = расчет с верха на сколько нужно спуститься чтобы прийти к секции ревью
    // offsetTop — это расстояние от верха страницы до элемента
    // мы используем его, чтобы точно попасть в нужную секцию
})
reviewBtn.addEventListener('click',scrollToReview)
stikyReview.addEventListener('click', scrollToReview)
stickyInfo.addEventListener('click', scrollToInfo)
function scrollToReview(e){
    e.preventDefault();
    window.scrollTo(0, reviewWrap.offsetTop);
}

function scrollToInfo(e){
    e.preventDefault();
    window.scrollTo(0, productInfo.offsetTop);
}

//вариант еще один, более короткий и простой в использовании
/* reviewBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    contentsPstFunc(reviewWrap) //просим дойти до reviewWrap
})
stickyInfo.addEventListener('click', (e)=>{
    e.preventDefault();
    contentsPstFunc(productInfo)//просим дойти до productInfo
})
function contentsPstFunc(target){//таргет - это то, куда нужно скролить
    window.scrollTo(0, target.offsetTop)
} */

//4. (i) 클릭시 정보 팝업 출력 / 숨기기
//начинаем с переменных
const infoIcon = document.querySelector('.price_info .info_icon')
const priceInfo = document.querySelector('.price_info .info')
console.log(infoIcon, priceInfo)
//теперь создадим ивент для кнопки с инфо
//infoIcon.addEventListener('click', priceInfoCheck)
//сейчас наш попап с инфо не виден, сначала сделаем его видимым
//после того, как я сделала его видимым, я поняла, что этого недостаточно
//мне нужно, чтобы он снова пропадал, когда я опять кликаю на инфо
//поэтому создаем функцию с условием
//важно запомнить -- внутри () для if я ошиблась, присвоив (=) значение
//а мне нужно было сказать "если значение == 00, сделай то-то"
//то есть не (=) а (==)
/* function priceInfoCheck(){
    if(priceInfo.style.display == 'none'){
        priceInfo.style.display = 'block';
} else {
        priceInfo.style.display = 'none'
}} */
//но тут есть еще одна проблема с данными (trusy, falsy)
//то есть и 'none' и 'block' являются trusy
//представим что невидимость это false, а видимость это true
//тогда у нас будет постоянно false -> true -> false -> true etc etc
//поэтому нам нужна еще переменная
let infoBoolean = false; //изначальное состояние (так как попап не должен быть виден)
//когда мы кликаем на кнопку каждый раз 값 infoBoolean должен делаться 반전
infoIcon.addEventListener('click', ()=>{
    infoBoolean = !infoBoolean; 
    if(infoBoolean){//здесь не обязательно писать == true так как мы уже сделали 반전 и это true
        priceInfo.style.display = 'block'
    }else {
        priceInfo.style.display = 'none'
    }
    console.log(infoBoolean) // проверяем работает ли ! = работает только один раз
    //как заставить работать 반전 постоянно ?
    // опять таки у нас два условия, я просто записала их
    //преподаватель сделала проще просто записала
    //infoBoolean = !infoBoolean;
    //это намного круче, хотя одинаковый результат
    //поэтому я тоже исправлю

})
//теперь осталось сделать видимым / невидимым еще раз
console.log("======================================5&6")
//5. 주문 목록 초기 숨기기
//6. 사이즈 select 초기 비활성화 -> 색상 선택 시 활성화
//начинаем с переменных
const orderList = document.querySelector('.order_list')
const sizeSelect = document.querySelector('#size_select')
const colorSelect = document.querySelector('#color_select')
console.log(orderList, sizeSelect)
//сначала делаем невидимым orderList
orderList.style.display = ''; //не вышло
orderList.style.display = 'none'; //вышло
//теперь нужно дезактивировать выбор размера
sizeSelect.disabled = true;
//6-2. При выборе цвета активировать выбор размера
//нам нужно выьрать цвет... то есть когда меняется option
/* colorSelect.addEventListener('change', ()=>{ //когда поменялся option
    console.log(colorSelect.selectedIndex) // покажи индекс выбранной опции
    console.log(colorSelect.options[2]) //покажи первую опцию
    //sizeSelect.disabled = false; //сделай дезакцивацию sizeSelect активацией
    
    //색상 select에서 1번째 value=none에 해당하는 색상을 제외한 나머지 옵션이 선택되었을 때 사이즈 select 활성화하기
    //내가 선택하는 게 1번째가 아닐때 
    /* if(colorSelect.options[0]){
        sizeSelect.disabled = true;
        }else {sizeSelect.disabled = false;} *///так не срабатывает
        
        /* if(colorSelect.options[0], colorSelect.options[2]){
            sizeSelect.disabled = false;
            }else {sizeSelect.disabled = true;} */  // так сработало... почему?
            // здесь проблема в том, что я по сути просто выбираю третью опцию (так как до этого опция перезаписывается)
            
    /* if(colorSelect.selectedIndex != [0]){
        sizeSelect.disabled = false;
    }else {sizeSelect.disabled = true;}  // это самый логичный и правильный вариант : используем selectedIndex и сравнение != (неравно)
}) */

//DB 불러오기 테스트
console.log('===========================data base');
console.log(productOptDB[0].name); // проверяем видит ли он имя первого продукта в базе данных
console.log(productOptDB[0].color[0], productOptDB[0].color[1]); // проверяем видит ли он цвет первого и второго продукта в базе данных

// DB -> HTML 적용
//1. JS에서 HTML 함수로 생성 createElement()
//2. 위에서 생성한 함수에 DB 데이터 대입 innerHTML, textContent
//3. 위에서 만든 HTML을 실제 HTML의 마지막 자식 위치로 삽입 (???)
//* 생성한 태스사 li면 ul or ol의 마지막 자식 위치로 삽입
//* 생성한 태스사 option면 select의 마지막 자식 위치로 삽입

//1. JS에서 HTML 함수로 생성 createElement() 
const colorOprt1 = document.createElement('option') // создаем элемент
const colorOprt2 = document.createElement('option') // создаем элемент который будет в HTML
console.log(colorOprt2)
//2. 위에서 생성한 함수에 DB 데이터 대입 innerHTML, textContent
colorOprt1.textContent = `${productOptDB[0].color[0]}(${productOptDB[0].price.toLocaleString('ko-kr')}원)`  //
colorOprt2.textContent = `${productOptDB[0].color[1]}(${productOptDB[0].price.toLocaleString('ko-kr')}원)`  //
//3. 위에서 만든 HTML을 실제 HTML의 마지막 자식 위치로 삽입 (в конец родителя)
colorSelect.appendChild(colorOprt1) // последним ребенком делаем colorOprt1
colorSelect.appendChild(colorOprt2) // последним ребенком делаем colorOprt2 
console.log(productOptDB[0].price)

//7. 새깔 & 사이즈 모두 선택 시 (선택한 인덱스가 0아닌 것) console = 선택완료
//주문 목록 출력 (선택한 값이 출력, 주문 금액 변경)

console.log('==============')
const totalPrice = document.querySelector('.price em'); // em с ценой
colorSelect.addEventListener('change', ()=>{ 
    if(colorSelect.selectedIndex != 0){ // если выбранная опция цвета не первая
        sizeSelect.disabled = false; // активируй размеры
        sizeSelect.addEventListener('change',()=>{ 
            if(sizeSelect.selectedIndex != 0){//если выбранная опция размеров не первая
                console.log('SELECTED YAY!')//покажи это крутое сообщение йей
                orderList.style.display = 'block';
                //선택 옵션(color) 
                //colorText.textContent = colorSelect.options[colorSelect.selectedIndex].text;
                // присваиваем значение тексту внутри переменной colorText (тег спан с цветом) = выбранная опция [выбранный индекс]
                //sizeText.textContent = sizeSelect.options[sizeSelect.selectedIndex].text;
                
                let colorText = document.querySelector('.info .color') // спан с цветом
                let sizeText = document.querySelector('.info .size') // спан с размером
                //let orderColorReplace = colorText.replace(찾는 값, 변경값) // 
                //정규표현식 \ backspase 밑에 있는 backslash
                //정규표현식 시작과 끝 표시 // 
                //괄호찾기 \찾는문자\ (.*\) = 괄호안에 있는 모든 내용 
                // 모든 내용 .*
                let orderColor = colorSelect.options[colorSelect.selectedIndex].text; // переменную делаем, чтобы последний код не был слишком громоздким (см. строку 240)
                let orderColorReplace = orderColor.replace(/\(.*\)/, '')//просим заменить весь текст orderColor внутри скобок
                let orderSize = sizeSelect.options[sizeSelect.selectedIndex].text; // переменную делаем, чтобы последний код не был слишком громоздким (см. строку 243)
                let orderSizeReplace = orderSize.replace(/\(.*\)/, '')//просим заменить весь текст orderSize внутри скобок
                //присваиваем значение тексту внутри переменной sizeText (тег спан с размером) = выбранная опция [выбранный индекс]
                sizeText.textContent = orderSizeReplace; 
                colorText.textContent = orderColorReplace; //присваиваем тексту colorText текст, в котором мы убрали содержимое из скобок
                //주문 금액 변경
                
                console.log('======================total price')
                console.log(totalPrice)
                totalPrice.textContent = (productOptDB[0].price).toLocaleString('ko-kr');
                console.log(totalPrice.textContent)
                
            }
        })
    }else {
        sizeSelect.disabled = true;
    }
})

//8. 주문목록의 x 누르면 주문목록이 삭제, 주문금액 초기화
const closeBtn = document.querySelector('.close')
console.log(closeBtn)
closeBtn.addEventListener('click',()=>{
    orderList.style.display = 'none';
    totalPrice.textContent = 0;
    colorSelect.selectedIndex = colorSelect.selectedIndex[0]; // приведи значение индекса выбранной опции цвета к первому индексу (= просто "цвет")
    sizeSelect.selectedIndex = sizeSelect.selectedIndex[0]; // приведи значение индекса выбранной опции размера к первому индексу (= просто "размер")
})
closeBtn.addEventListener('click', function(){ // используем анонимную функцию чтобы вызвать this
    this.parentNode.style.display = 'none'; // просим не показывать родителя того объекта, на который я кликаю
})


//9. 주문목록의 + 클릭 시 재고수량까지 주문 수량+금액 표시
const orderMinusBtn = document.querySelector('#minus_btn');
const orderPlusBtn = document.querySelector('#plus_btn');
const orderNum = document.querySelector('#order_num');
let count = 1;
console.log(orderMinusBtn, orderPlusBtn, orderNum);
orderPlusBtn.addEventListener('click',plusFunc)
orderMinusBtn.addEventListener('click',minusFunc)
function plusFunc(){
    orderNum.value = ++count;
    totalPrice.textContent = orderNum * Number(totalPrice);
    console.log(typeof(orderNum))
}

function minusFunc(){
    orderNum.value = --count;
}
//10. 주문목록의 - 클릭 시 수량과 금액이 감소; 값이 1일 때 누르면 경고창 출력
//11. (상품 미 선택시) 장바구니&바로구매 클릭 시 '상품을 선택하세요' 경고창 출력