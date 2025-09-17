//index.js
//작업 HTML 동적인 요소가 무엇이 있는지?
//-> 알고리즘 계획
//1. 상품이미지에 마우스 올릴 때 큰상품 이미지 변경
//2. 저장하기 버튼 클릭 시 로그인 유무에 따라 다른 결과 실행
//3. 리뷰 클릭 시 스크롤 이동
//4. (i) 클릭시 정보 팝업 출력 / 숨기기
//5. 주문 목록 초기 숨기기
//6. 사이즈 select 초기 비활성화 -> 색상 선택 시 활성화
//7. 새깔 & 사이즈 모두 선택해야 주문 목록 출력 (선택한 값이 출력, 주문 금액 변경)
//8. 주문목록의 x 누르면 주문목록이 삭제, 주문금액 초기화
//9. 주문목록의 + 클릭 시 재고수량까지 주문 수량+금액 표시
//10. 주문목록의 - 클릭 시 수량과 금액이 감소; 값이 1일 때 누르면 경고창 출력
//11. 상품 미 선택시 장바구니&바로구매 클릭 시 '상품을 선택하세요' 경고창 출력
//12. 상품 선택 시 장바구니&바로구매 클릭 시 로그인 유무에 따라 다른 페이지 이동
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
