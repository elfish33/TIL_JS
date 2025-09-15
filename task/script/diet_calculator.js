const calculate_btn = document.querySelector('#calculate_btn') // select the button
console.log(calculate_btn) //check
calculate_btn.addEventListener('click', CalcFunc)
function CalcFunc(){

}

//**`적정체중 = (본인신장-100)*0.9`**

///`계산식) **적정체중 = (사용자가 입력한 키-100)*0.9**`

//변수명 예) **userHeight, userWeight, goals, result, normal_w**