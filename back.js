function ConverterDolar() {
  var valorDoElemento = document.getElementById('valor')
  var valor = valorDoElemento.value
  var valorEmRealNumerico = parseFloat(valor)

  var valorEmDolar = (valorEmRealNumerico * 0.19).toFixed(2)

  if (valorEmDolar > 0) {
    var elementoValorConvertido = document.getElementById('valorConvertido')
    var valorConvertido = 'A sua fortuna em Dolar é $' + valorEmDolar
    elementoValorConvertido.innerHTML = valorConvertido
  }
}

function ConverterEuro() {
  var valorDoElemento = document.getElementById('valor')
  var valor = valorDoElemento.value
  var valorEmRealNumerico = parseFloat(valor)

  var valorEmEuro = (valorEmRealNumerico * 0.16).toFixed(2)

  if (valorEmEuro > 0) {
    var elementoValorConvertido = document.getElementById('valorConvertido')
    var valorConvertido = 'A sua fortuna em Euro é €' + valorEmEuro
    elementoValorConvertido.innerHTML = valorConvertido
  }
}
