let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")

function calcular(){
    let peso = inputPeso.value
    let altura = inputAltura.value
    let alturacm = altura / 100

    let imc = peso / (alturacm * alturacm)

    if (imc >= 40){
        resultado.innerHTML = `<p>IMC: ${imc.toFixed(2)} <br> Obesidade grau III`
    } else if (imc >= 35){
        resultado.innerHTML = `<p>IMC: ${imc.toFixed(2)} <br> Obesidade grau II`
    } else if (imc >= 30){
        resultado.innerHTML = `<p>IMC: ${imc.toFixed(2)} <br> Obesidade grau I`
    } else if (imc >= 25){
        resultado.innerHTML = `<p>IMC: ${imc.toFixed(2)} <br> Sobrepeso`
    } else if (imc >= 18.5){
        resultado.innerHTML = `<p>IMC: ${imc.toFixed(2)} <br> Padrão`
    } else {
        resultado.innerHTML = `<p>IMC: ${imc.toFixed(2)} <br> Abaixo do peso`
    }

}
