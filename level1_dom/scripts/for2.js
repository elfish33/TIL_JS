//for2.js
//ul * 2 > li * 5 => 반복문이 필요 (2개, 5개 있으니까)
//<ul></ul> <li></li> (x)
//<ul><li></li></ul>  (o)
let ul = '';
let li = '';
for (let i = 0; i<2; i++){//пока повторяется этот цикл
//сделай следующее
    //ul = '<ul>'
    li = '';// эту строчку мы добавили последней; чтобы сказать, что после каждого прокручивания внутреннего цикла ЛИ снова нужно вернуть изначальное пустое значение => так можно будет вложить в ЮЛ только пять ЛИ 
    for(let j=0; j<5; j++){
        //li = '<li>Menu</li>'; //если мы укажем просто = это будет просто присуждение поэтому нужен +=
        li += `<li>Menu${j+1}</li>`; //после этого мы получаем 10 ЛИ так как цикл успевает прокрутиться два раза из-за родительского цикла;
    }
    ul += `<ul>${li}</ul>` //написав так мы сможем что-то вставить внутрь; += нужно чтобы добавить, а не заменить 
}
console.log(ul)
//в одном ЮЛ должно быть 5 ЛИ

console.log('==================================')
const num = ['html', 'css', 'javascript'];
num.forEach(function(obj, ind, arr){
    console.log(obj, ind, arr)});
console.log('==================================')
//고객 리뷰 초기 상태
//상품문의 클릭 시 문의내용 보이기
//고객리뮤 클릭 시 리뷰 보이기
const tabTitle = document.querySelectorAll('.title a')
const tabContent = document.querySelectorAll('.contents .con')
console.log(tabTitle,tabContent)

//고객 리뷰 초기 상태
tabContent[1].style.display = 'none';

//고객리뮤 클릭 시 리뷰 보이기
/* tabTitle[0].addEventListener('click', ()=>{
    contentDisplayHide ()
    tabContent[0].style.display = 'block';
    //tabContent[1].style.display = 'none';
}) */

//상품문의 클릭 시 문의내용 보이기
/* tabTitle[1].addEventListener('click', ()=>{
    contentDisplayHide ()
    //tabContent[0].style.display = 'none';
    tabContent[1].style.display = 'block';
}) */
function contentDisplayHide (){
    for(let i of tabContent)
        i.style.display = 'none';
    //за одну строчку скрываем все что есть в контенте
}//если for повторяется, лучше обернуть его в функцию и вызывать в любое необходимое время
//клик ивент тоже можно завернуть в фор оф
/* for(let i of tabTitle){
    i.addEventListener('click', ()=>{
        contentDisplayHide()
        console.log(i)
        //tabContent[0].style.display = 'block'//мы не можем написать i внутри []

    })
} */

//информация и об объекте и об индексе есть в фор ич
//매개변수 순서대로 객체 -> 인덱스 -> 배영정보 (이름 설정은 자유, but 의미 있게!)
tabTitle.forEach(function(obj, ind, arr){
    console.log(obj, ind, arr.length)
    obj.addEventListener('click',()=>{
        contentDisplayHide();
        styleNone();
        console.log(ind);
        tabContent[ind].style.display = 'block';//это значит: покажи тот элемент tabContent, у которого тот же индекс, что и у того заголовка, на который нажали; нужно быть очень внимательным -- совпадают ли индексы
        //obj.style.backgroundColor = 'red';
        obj.style.backgroundColor = 'lightpink';//так меняется то, куда мы нажимаем
        tabContent[ind].style.backgroundColor = 'lightpink';//так меняется тот элемент, у которого совпадает индекс с тем, на который мы нажали
        obj.style.color = 'grey';
        obj.style.fontWeight = '500';
    })
})
function styleNone (){
    for(let i of tabTitle){
        i.style.background = 'none';
        i.style.color = 'none';
        i.style.fontWeight = '400'
    }
}