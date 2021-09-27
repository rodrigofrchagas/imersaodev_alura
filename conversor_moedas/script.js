const convertedValue = document.getElementById("valorConvertido");

function converter() {
    const elementValue = document.getElementById("valor");
    let value = parseFloat(elementValue.value) * 5;
    convertedValue.textContent = `O resultado em reais (BRL) é R$ ${value}.`;  
}