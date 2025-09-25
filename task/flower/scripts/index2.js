//index2.js
//jQuery veesion
//초기 세팅 : 결과 숨기기, 공유 버튼 숨기기
const $resultFlower = $('.resultFlower')
const $shareBtn =$('#share')
const $flowerImg = $('.flower img')

$resultFlower.hide();
$shareBtn.hide();

let $year = $('#year');
let $month = $('#month');
let $day = $('#day');

const $resultBtn = $('#result')

//만나기 버튼 클릭 시 입력한 년/월/일 중 '월/ 인식해서 해당값과 동일한 탄생화 배열 출력하기

$resultBtn.click(function(){
    console.log(Boolean($year.val()));
    const  ymd = $year.val() && $month.val() && $day.val();
    ymd ? flowerFunc() : alert('생년월일 모두 입력해주세요!');
    function flowerFunc(){
        const $userMonth = $month.val()
        const resultFlower = birthday_flower[$userMonth-1].flower;
        const resultFlowerLang = birthday_flower[$userMonth-1].content ;
        const resultFlowerSrc = birthday_flower[$userMonth-1].src;
        $resultFlower.show()
        $year.hide()
        $month.hide()
        $day.hide()
        $shareBtn.show()
        $resultBtn.hide()
        $resultFlower.find('em').text(`당신의 탄생화는 ${resultFlower}입니다`);
        $resultFlower.find('span').text(`꽃말 : ${resultFlowerLang}`);
        $flowerImg.attr('src', resultFlowerSrc)
        }
    }
)