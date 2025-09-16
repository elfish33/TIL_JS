//boolean_mail.js
//console.log(isLogin)
window.addEventListener('load', ()=>{
    //localStorage.getItem('isLogin2') // true
    let loginStatus = localStorage.getItem('isLogin2')
    console.log(loginStatus == 'true');
    console.log(typeof(loginStatus));

    //DOM 변수
    const mailLogin = document.querySelector('#login')
    const mailLogout = document.querySelector('#logout')

    if(loginStatus == 'true'){
        console.log('로그인 화면')
        mailLogin.style.display = 'block'; //grid / flex если для этого элемента используется
        mailLogout.style.display = 'none';
    }else{
        console.log('로그아웃 화면')
        mailLogout.style.display = 'block';
        mailLogin.style.display = 'none';
    }
}) 