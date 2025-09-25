//index2.js
//jQuery veesion
//초기 세팅 : 결과 숨기기, 공유 버튼 숨기기
//만나기 버튼 클릭 시 입력한 년/월/일 중 '월/ 인식해서 해당값과 동일한 탄생화 배열 출력하기

const resultFlowerName = document.querySelector('.resultFlower')
const shareBtn = document.querySelector('#share')
const resultBtn = document.querySelector('#result')
const flowerImg = document.querySelector('.flower img')
let year = document.querySelector('#year');
let month = document.querySelector('#month');
let day = document.querySelector('#day');

//초기 세팅 : 결과 숨기기, 공유 버튼 숨기기
resultFlowerName.style.display = 'none';
shareBtn.style.display = 'none';

//만나기 버튼 클릭 시
// 입력한 년/월/일 중 '월/ 인식해서 해당값과 동일한 탄생화 배열 출력하기
resultBtn.addEventListener('click',()=>{
    const ymd = year.value && month.value && day.value;
    ymd ? flowerFunc() : alert('생년월일 모두 입력해주세요!');
    function flowerFunc(){
        if(month.value > 0 && month.value < 13){
            let userMonth = month.value;
            const resultFlower = birthday_flower[userMonth-1].flower;
            const resultFlowerLang = birthday_flower[userMonth-1].content;
            const resultFlowerSrc = birthday_flower[userMonth-1].src;
            resultFlowerName.style.display = 'block';
            shareBtn.style.display = 'block';
            year.style.display = 'none';
            month.style.display = 'none';
            day.style.display = 'none';
            resultBtn.style.display = 'none';
            resultFlowerName.children[0].children[0].textContent = resultFlower;
            resultFlowerName.children[1].children[0].textContent = resultFlowerLang;
            flowerImg.src = resultFlowerSrc;
        }else {
            alert('1월에서 12월 중에 입력하세요!')
        }
        
    }
})