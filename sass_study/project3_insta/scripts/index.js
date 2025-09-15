//button click 시 이미지 변경
//변수 잡기
const likeBtn = document.querySelector('#like');
const likeImg = document.querySelector('#like img')
const commentBtn = document.querySelector('#comment');
const commentImg = document.querySelector('#comment img')
const messageBtn = document.querySelector('#message');
const messageImg = document.querySelector('#message img')
console.log(likeBtn, likeImg, commentBtn, commentImg, messageBtn, messageImg); //확인 완료 -- 문제 없

//event 만들기
likeBtn.addEventListener('click', likeFunc);
commentBtn.addEventListener('click', commentFunc);
messageBtn.addEventListener('click', messageFunc);

//function 만들기
function likeFunc(e){
    e.preventDefault();
    likeImg.src = './images/like_on.png' // 이미지의 src를 제어하여 해당 경로로 변경하겠다
    console.log(likeImg.src) //src 바로 확인
}

function commentFunc(){
    commentImg.src = './images/comment_on.png' // 이미지의 src를 제어하여 해당 경로로 변경하겠다
    console.log(commentImg.src)
}

function messageFunc(){
    messageImg.src = './images/paper_on.png' // 이미지의 src를 제어하여 해당 경로로 변경하겠다
    console.log(messageImg.src)
} 

//선생님 대안
/* const instaMenu = document.querySelectorAll('.menu .left a')
instaMenu[0].addEventListener('click', iconChange(0, 'like'))
instaMenu[1].addEventListener('click', iconChange(1, 'comment'))
instaMenu[2].addEventListener('click', iconChange(2, 'paper'))
function iconChange(index, name) {
    instaMenu[index].children[0].src = `./images/${name}_on.png`
} */

/* const instaMenu = document.querySelectorAll('.menu ')
instaMenu[0].addEventListener('click', function(e){
    e.preventDefault();
    iconChange(this, 'like')})
instaMenu[2].addEventListener('click', function(){iconChange(this, 'comment')})
instaMenu[3].addEventListener('click', function(){iconChange(this, 'paper')})
function iconChange(target, name) {
    return target.children[0].src = `./images/${name}_on.png`
} */

//사진 클릭 시 speaker 모양 보이기 (+애니메이션)
const instaPhoto = document.querySelector('#image');
const volumeIcon = document.querySelector('#popup');
console.log(instaPhoto, volumeIcon);
volumeIcon.style.transition = 'opacity 1s';
instaPhoto.addEventListener('mouseover', animationFunc)
function animationFunc(){
    volumeIcon.style.opacity = 1;
    console.log(volumeIcon.style)
}
instaPhoto.addEventListener('mouseout',()=>{
    volumeIcon.style.opacity = 0;
})