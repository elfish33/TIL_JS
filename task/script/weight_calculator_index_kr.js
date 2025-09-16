const calculate_btn = document.querySelector('#calculate_btn') // selecting the button
let weightResult = document.querySelector('#weight_result')// selecting the result text
let userWeight = document.querySelector('#weight');
let userHeight = document.querySelector('#height');
userWeight.value = '';
userHeight.value = '';
console.log(calculate_btn) //check
calculate_btn.addEventListener('click', CalcFunc)
function CalcFunc(e){
    e.preventDefault();
    const idealWeight = (Number(userHeight.value)-100)*0.9
    const overWeight =  (Number(userWeight.value)) - idealWeight
    weightResult.style.opacity = 1;
    weightResult.style.transition = 'opacity 0.8s'
    weightResult.textContent = `적정체중은 ${idealWeight.toFixed(1)}kg이며 ${overWeight.toFixed(1)}kg 초과되셨습니다.`
}