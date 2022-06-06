function conv (){
let conversao=prompt("Digite a temperatura desejada para a conversâo: ")
let conta = (conversao-32)
let conta2 =(conta/1.8)
alert(conta2+" c°".toLocaleLowerCase.toFixed(2))
}

conv()