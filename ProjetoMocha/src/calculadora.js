export default class Calculadora{
    static soma(n1,n2) {
        if(typeof n1 != "number" || typeof n2 != "number"){
            return "Não é possível somar número com letra ou com caracter especial."
        }else return n1 + n2
        
    }
    static subtracao(n1,n2) {
        if(typeof n1 != "number" || typeof n2 != "number"){
            return "Não é possível subtrair número com letra ou com caracter especial."
        }else return n1 - n2
    }
    static multiplicacao(n1,n2) {
        if(typeof n1 != "number" || typeof n2 != "number"){
            return "Não é possível multiplicar número com letra ou com caracter especial."
        }else return n1 * n2
    }
    static divisao(n1,n2) {
        if(typeof n1 != "number" || typeof n2 != "number"){
            return "Não é possível dividir número com letra ou com caracter especial."
        }else return n1 / n2
    }
    static volumeGalaoEmLitro(gL) {
        if(typeof gL != "number"){
            return "Não é possível medir o volume de letra ou caracter especial."
        }else if(gL < 0){
            return "Não é possível medir o volume negativo."
        }else return gL * 3.78541
    }
    static centimetroParaMetro(cM) {
        if(typeof cM != "number"){
            return "Não é possível medir comprimento de letra ou caracter especial."
        }else if(cM < 0){
            return "Não é possível medir comprimento negativo."
        }else return cM / 100
    }
    static areaTriangulo(b,h) {
        if(typeof b != "number" || typeof h != "number" ){
            return "Não é possível medir área de letra ou caracter especial."
        }else if(b < 0 || h < 0 ){
            return "Não é possível medir área negativa."
        }else return ((b * h) / 2)
    }
    static areaQuadrado(l) {
        if(typeof l != "number"){
            return "Não é possível medir área de letra ou caracter especial."
        }else if(l < 0){
            return "Não é possível medir área negativa."
        }else return l * l
    }
}