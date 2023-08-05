import assert from "assert";
import chai from "chai";
import Calculadora from "../src/calculadora.js";
const expect = chai.expect;


describe("Teste de Soma",()=>{
    it("Deve somar 4 e 4 e resultar em 8",()=>{
        let esperado = Calculadora.soma(4,4)
        expect(esperado).to.be.equal(8)
    })
    it("Deve somar -4 e 4 e resultar em 0",()=>{
        let esperado = Calculadora.soma(-4,4)
        expect(esperado).to.be.equal(0)
    })
    it("Tentativa de somar com letra a",()=>{
        let esperado = Calculadora.soma(2,"a")
        expect(esperado).to.be.equal("Não é possível somar número com letra ou com caracter especial.")
    })
    it("Tentativa de retornar string",()=>{
        let esperado = Calculadora.soma(-4,"b")
        expect(esperado).to.be.a("string")
    })
    it("Tentativa de retornar número",()=>{
        let esperado = Calculadora.soma(10,15)
        expect(esperado).to.be.a("number")
    })
}) 
describe("Teste de Subtração",()=>{
    it("Deve subtrair 10 e 8 e resultar em 2",()=>{
        let esperado = Calculadora.subtracao(10,8)
        expect(esperado).to.be.equal(2)
    })
    it("Deve subtrair -4 e 4 e resultar em -8",()=>{
        let esperado = Calculadora.subtracao(-4,4)
        expect(esperado).to.be.equal(-8)
    })
    it("Tentativa de subtrair com letra G",()=>{
        let esperado = Calculadora.subtracao(5,"G")
        expect(esperado).to.be.equal("Não é possível subtrair número com letra ou com caracter especial.")
    })
    it("Tentativa de retornar string",()=>{
        let esperado = Calculadora.subtracao(-4,"b")
        expect(esperado).to.be.a("string")
    })
    it("Tentativa de retornar número",()=>{
        let esperado = Calculadora.subtracao(11,14)
        expect(esperado).to.be.a("number")
    })
})
describe("Teste de Multiplicação",()=>{
    it("Deve multiplicar 3 e 4 e resultar em 12",()=>{
        let esperado = Calculadora.multiplicacao(3,4)
        expect(esperado).to.be.equal(12)
    })
    it("Deve multiplicar -5 e 4 e resultar em -20",()=>{
        let esperado = Calculadora.multiplicacao(-5,4)
        expect(esperado).to.be.equal(-20)
    })
    it("Tentativa de multiplicar com caracter especial &",()=>{
        let esperado = Calculadora.multiplicacao(20,"&")
        expect(esperado).to.be.equal("Não é possível multiplicar número com letra ou com caracter especial.")
    })
    it("Tentativa de retornar string",()=>{
        let esperado = Calculadora.soma(3,"b")
        expect(esperado).to.be.a("string")
    })
    it("Tentativa de retornar número",()=>{
        let esperado = Calculadora.soma(20,35)
        expect(esperado).to.be.a("number")
    })
}) 
describe("Teste de Divisão",()=>{
    it("Deve dividir 10 e 5 e resultar em 2",()=>{
        let esperado = Calculadora.divisao(10,5)
        expect(esperado).to.be.equal(2)
    })
    it("Deve dividir -25 e 5 e resultar em -5",()=>{
        let esperado = Calculadora.divisao(-25,5)
        expect(esperado).to.be.equal(-5)
    })
    it("Tentativa de dividir com letra K",()=>{
        let esperado = Calculadora.divisao(8,"K")
        expect(esperado).to.be.equal("Não é possível dividir número com letra ou com caracter especial.")
    })
    it("Tentativa de retornar string",()=>{
        let esperado = Calculadora.soma(10,"b")
        expect(esperado).to.be.a("string")
    })
    it("Tentativa de retornar número",()=>{
        let esperado = Calculadora.soma(17,18)
        expect(esperado).to.be.a("number")
    })
}) 
describe("Teste de Volume de Galão Para Litro",()=>{
    it("2 Galões deve resultar em 7.57082 Litros",()=>{
        let esperado = Calculadora.volumeGalaoEmLitro(2)
        expect(esperado).to.be.equal(7.57082)
    })
    it("-2 Galões deve resultar em \"Não é possível medir o volume negativo.\"",()=>{
        let esperado = Calculadora.volumeGalaoEmLitro(-2)
        expect(esperado).to.be.equal("Não é possível medir o volume negativo.")
    })
    it("Tentativa de medir com caracter especial *",()=>{
        let esperado = Calculadora.volumeGalaoEmLitro("*")
        expect(esperado).to.be.equal("Não é possível medir o volume de letra ou caracter especial.")
    })
    it("Tentativa de retornar número",()=>{
        let esperado = Calculadora.volumeGalaoEmLitro(2)
        expect(esperado).to.be.a("number")
    })
    it("Tentativa de retornar string",()=>{
        let esperado = Calculadora.volumeGalaoEmLitro("2L")
        expect(esperado).to.be.a("string")
    })
}) 
describe("Teste de Comprimento de Centimetro Para Metro",()=>{
    it("300 Centimetros deve resultar em 3 Metros",()=>{
        let esperado = Calculadora.centimetroParaMetro(300)
        expect(esperado).to.be.equal(3)
    })
    it("-2000 Centimetros deve resultar em \"Não é possível medir comprimento negativo.\"",()=>{
        let esperado = Calculadora.centimetroParaMetro(-2000)
        expect(esperado).to.be.equal("Não é possível medir comprimento negativo.")
    })
    it("Tentativa de medir com letra h",()=>{
        let esperado = Calculadora.centimetroParaMetro("h")
        expect(esperado).to.be.equal("Não é possível medir comprimento de letra ou caracter especial.")
    })
    it("Tentativa de retornar número",()=>{
        let esperado = Calculadora.centimetroParaMetro(400)
        expect(esperado).to.be.a("number")
    })
    it("Tentativa de retornar string",()=>{
        let esperado = Calculadora.volumeGalaoEmLitro("4cm")
        expect(esperado).to.be.a("string")
    })
}) 
describe("Teste de Área do Triângulo",()=>{
    it("Um triângulo com 4 de base e 6 de altura deve resultar em 12cm² de área.",()=>{
        let esperado = Calculadora.areaTriangulo(4,6)
        expect(esperado).to.be.equal(12)
    })
    it("Um triângulo com 4 de base e -8 de altura deve resultar em \"Não é possível medir área negativa.\"",()=>{
        let esperado = Calculadora.areaTriangulo(4,-8)
        expect(esperado).to.be.equal("Não é possível medir área negativa.")
    })
    it("Tentativa de calcular com letra z",()=>{
        let esperado = Calculadora.areaTriangulo(5,"z")
        expect(esperado).to.be.equal("Não é possível medir área de letra ou caracter especial.")
    })
    it("Tentativa de retornar número",()=>{
        let esperado = Calculadora.areaTriangulo(2,6)
        expect(esperado).to.be.a("number")
    })
    it("Tentativa de retornar string",()=>{
        let esperado = Calculadora.areaTriangulo(8,"4")
        expect(esperado).to.be.a("string")
    })
})
describe("Teste de Área do Quadrado",()=>{
    it("Um quadrado com 3 de lado deve resultar em 9cm² de área.",()=>{
        let esperado = Calculadora.areaQuadrado(3)
        expect(esperado).to.be.equal(9)
    })
    it("Um quadrado com 3 de lado deve resultar em \"Não é possível medir área negativa.\"",()=>{
        let esperado = Calculadora.areaQuadrado(-4)
        expect(esperado).to.be.equal("Não é possível medir área negativa.")
    })
    it("Tentativa de calcular com caracter especial /",()=>{
        let esperado = Calculadora.areaQuadrado("/")
        expect(esperado).to.be.equal("Não é possível medir área de letra ou caracter especial.")
    })
    it("Tentativa de retornar número",()=>{
        let esperado = Calculadora.areaQuadrado(6)
        expect(esperado).to.be.a("number")
    })
    it("Tentativa de retornar string",()=>{
        let esperado = Calculadora.areaQuadrado("7")
        expect(esperado).to.be.a("string")
    })
}) 