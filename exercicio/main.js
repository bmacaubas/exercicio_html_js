let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')


function enviar() {
    //console.log(Number(num1.value) + Number(num2.value))
    let sucessMessage = document.getElementById('sucess-message')
    let errorMessage = document.getElementById('error-message')
    if (Number(num1.value) < Number(num2.value)) {
        sucessMessage.style.display = 'initial'
        sucessMessage.style.display = 'block'
        sucessMessage.innerHTML = ' '
        sucessMessage.innerHTML = `O valor ${num1.value} é menor que ${num2.value}, está correto!`
        errorMessage.style.display = 'none'
    } else {
        errorMessage.style.display = 'initial'
        errorMessage.style.display = 'block'
        errorMessage.innerHTML = ' '
        errorMessage.innerHTML = `O valor <b>${num1.value}</b> não é menor que ${num2.value}, está incorreto!`
        sucessMessage.style.display = 'none'
    }
}




