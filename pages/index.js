import Link from 'next/link'

function Home() {
    var resultado = 0
    var numeros = []
    var numb = ""
    var n = 0
    return (<div>
        <header>
            <h1>Calculadora</h1>
        </header>
        <section>
            <input id="res" type="text" value="" readonly></input>
            <div id='teclado'>
                <div>
                    <input id='btnum' type="button" value="7" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "7"
                        numb += "7"
                        n = Number(numb)
                    }}></input><input id='btnum' type="button" value="8" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "8"
                        numb += "8"
                        n = Number(numb)
                    }}></input><input id='btnum' type="button" value="9" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "9"
                        numb += "9"
                        n = Number(numb)
                    }}></input><input id='mult' type="button" value="×" onClick={() => {//BOTAO DE MULTIPLCAÇÃO
                        var res = document.getElementById('res')
                        if (numb != "") {
                            numeros.push(n)
                        }
                        if (numeros[numeros.length - 1] == "×") {
                            window.alert("[ERRO]Escreva um número!")
                        } else {
                            res.value += "×"
                            numeros.push("×")
                            numb = ""
                            n = 0
                        }
                    }}></input>
                </div>
                <div>
                    <input id='btnum' type="button" value="4" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "4"
                        numb += "4"
                        n = Number(numb)
                    }}></input><input id='btnum' type="button" value="5" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "5"
                        numb += "5"
                        n = Number(numb)
                    }}></input><input id='btnum' type="button" value="6" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "6"
                        numb += "6"
                        n = Number(numb)
                    }}></input><input id='menos' type="button" value="-" onClick={() => {//BOTAO DE SUBTRAÇÃO
                        var res = document.getElementById('res')
                        if (numb != "") {
                            numeros.push(n)
                        }
                        if (numeros[numeros.length - 1] == "-") {
                            window.alert("[ERRO]Escreva um número!")
                        } else {
                            res.value += "-"
                            numeros.push("-")
                            numb = ""
                            n = 0
                        }
                    }}></input>
                </div>
                <div>
                    <input id='btnum' type="button" value="1" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "1"
                        numb += "1"
                        n = Number(numb)
                    }}></input><input id='btnum' type="button" value="2" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "2"
                        numb += "2"
                        n = Number(numb)
                    }}></input><input id='btnum' type="button" value="3" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "3"
                        numb += "3"
                        n = Number(numb)
                    }}></input><input id='mais' type="button" value="+" onClick={() => {//BOTAO DE SOMA
                        var res = document.getElementById('res')
                        if (numb != "") {
                            numeros.push(n)
                        }
                        if (numeros[numeros.length - 1] == "+") {
                            window.alert("[ERRO]Escreva um número!")
                        } else {
                            res.value += "+"
                            numeros.push("+")
                            numb = ""
                            n = 0
                        }
                    }}></input>
                </div>
                <div>
                    <input id='clear' type="button" value="C" onClick={() => {//BOTAO DE LIMPAR A TELA
                        var res = document.getElementById('res')
                        res.value = ""
                        numb = ""
                        n = 0
                        numeros = []
                    }}></input><input id='btnum' type="button" value="0" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "0"
                        numb += "0"
                        n = Number(numb)
                    }}></input><input id="igual" type="button" value="=" onClick={() => {//BOTAO DE IGUAL
                        var res = document.getElementById('res')
                        numeros.push(n)
                        var size = numeros.length
                        //MULTIPLICAÇÃO
                        for (var i = 0; i < size; i++) {
                            if (numeros[i] == "×") {
                                resultado = numeros[i - 1] * numeros[i + 1]
                                numeros[i] = resultado
                                numeros.splice(i - 1, 1)
                                numeros.splice(i, 1)
                                i = 0
                            }
                        }
                        //DIVISÃO
                        for (var i = 0; i < size; i++) {
                            if (numeros[i] == "÷") {
                                resultado = numeros[i - 1] / numeros[i + 1]
                                numeros[i] = resultado
                                numeros.splice(i - 1, 1)
                                numeros.splice(i, 1)
                                i = 0
                            }
                        }
                        //SUBTRAÇÃO
                        for (var i = 0; i < size; i++) {
                            if (numeros[i] == "-") {
                                resultado = numeros[i - 1] - numeros[i + 1]
                                numeros[i] = resultado
                                numeros.splice(i - 1, 1)
                                numeros.splice(i, 1)
                                i = 0
                            }
                        }
                        //SOMA
                        for (var i = 0; i < size; i++) {
                            if (numeros[i] == "+") {
                                resultado = numeros[i - 1] + numeros[i + 1]
                                numeros[i] = resultado
                                numeros.splice(i - 1, 1)
                                numeros.splice(i, 1)
                                i = 0
                            }
                        }
                        size = numeros.length
                        for (var i = 0; i <= size; i++) {
                            size = numeros.length
                            numeros.splice(1, 1)
                        }
                        resultado = numeros[0]
                        res.value = resultado
                        numb = ""
                        n = 0
                        numeros = []
                    }}></input><input id='div' type="button" value="÷" onClick={() => {//BOTAO DE DIVISÃO
                        var res = document.getElementById('res')
                        if (numb != "") {
                            numeros.push(n)
                        }
                        if (numeros[numeros.length - 1] == "÷") {
                            window.alert("[ERRO]Escreva um número!")
                        } else {
                            res.value += "÷"
                            numeros.push("÷")
                            numb = ""
                            n = 0
                        }
                    }}></input>
                </div>
            </div>
        </section>
        <footer>
            <p>&copy; RaulSCoelho</p>
        </footer>
    </div>)
}

export default Home