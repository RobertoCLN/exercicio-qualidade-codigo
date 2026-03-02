function CALCULAR_preco_final(VALOR:number, desconto_percentual:number){
    var resultado=VALOR-(VALOR*desconto_percentual/100)
return resultado
}

const VALORPRODUTO=200
const desconto=10

console.log(CALCULAR_preco_final(VALORPRODUTO,desconto))