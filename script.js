function somar() {            
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let resultado = Number(n1) + Number(n2)
    let exibir = document.getElementById('exibe_resultado')
    exibir.innerHTML = ''
    exibir.innerHTML = `Resultado: ${resultado}`                   
}
function subtrair() {
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let resultado = Number(n1) - Number(n2)
    let exibir = document.getElementById('exibe_resultado')
    exibir.innerHTML = ''
    exibir.innerHTML += `Resultado: ${resultado}`
}
function dividir() {
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let resultado = Number(n1) / Number(n2)
    let exibir = document.getElementById('exibe_resultado')
    exibir.innerHTML = ''
    exibir.innerHTML += `Resultado: ${resultado}`
}
function multiplicar() {
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let resultado = Number(n1) * Number(n2)
    let exibir = document.getElementById('exibe_resultado')
    exibir.innerHTML = ''
    exibir.innerHTML += `Resultado: ${resultado}`
}