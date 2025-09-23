//todo.js
//1. input에 입력 후 추가하기 누르면 ul의 마지막 자식 위치 li 할일 추가하기
const listInput = document.querySelector('#list');
const listAddBtn = document.querySelector('#list_add');
const listWrapUl = document.querySelector('#list_wrap');
const listLast = listWrapUl.lastChild;//это было не нужно) я подумала слишком сложно
console.log(listInput, listAddBtn, listWrapUl, listLast)

listAddBtn.addEventListener('click', ()=>{
    //입력 안하면 입력하세요! 메세지 출력
    listInput.value == '' ? alert('할일을 입력하세요!'): toDoFunc();
})
listInput.addEventListener('keyup', (e)=>{ //нужно думать о том, кому задавать этот ивент: это ивент для кнопки, а для инпута, ведь 1) энтер не нажимается при клике на кнопку, а 2)энтер нажимается после того, как мы что-то ввели в инпут
    //입력 안하면 입력하세요! 메세지 출력
    if(e.key === 'Enter'){//почему здесь три === ? потому что нам как можно строже нужно проверить кнопку, вплоть до совпадения типа данных, а не просто значения
    listInput.value == '' ? alert('할일을 입력하세요!'): toDoFunc();
}
})

function toDoFunc(){
    console.log('test')
    listWrapUl.innerHTML += `<li><span>${listInput.value}</span>  <button type="button" class="close">X</button></li>`;
    listInput.value = '';
    const toDoCloseBtn = document.querySelectorAll('li .close');//мы не можем использовать эту кнопку снаружи так как она сущ только внутри функции
    console.log(toDoCloseBtn)
    for(let i of toDoCloseBtn){
        i.addEventListener('click', ()=>{
            i.parentNode.remove();
        })
    }
    }