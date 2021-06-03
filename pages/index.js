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
                    <input id='parent2' type="button" value="(" onClick={() => {//BOTAO DE PARÊNTESES
                        var res = document.getElementById('res')
                        if (numb != "") {
                            numeros.push(n)
                        }
                        if (res.value == "" || numeros[numeros.length - 1] == "×" || numeros[numeros.length - 1] == "÷" || numeros[numeros.length - 1] == "+" || numeros[numeros.length - 1] == "-" || numeros[numeros.length - 1] == "(") {
                            res.value += "("
                            numeros.push("(")
                            numb = ""
                            n = 0
                        } else {
                            window.alert("[ERRO]Escreva um sinal!")
                        }
                    }}></input><input id='parent1' type="button" value=")" onClick={() => {//BOTAO DE PARÊNTESES
                        var res = document.getElementById('res')
                        if (numb != "") {
                            numeros.push(n)
                        }
                        if (res.value == "" || numeros[numeros.length - 1] == "×" || numeros[numeros.length - 1] == "÷" || numeros[numeros.length - 1] == "+" || numeros[numeros.length - 1] == "-" || numeros[numeros.length - 1] == "(") {
                            window.alert("[ERRO]Escreva um número!")
                        } else {
                            res.value += ")"
                            numeros.push(")")
                            numb = ""
                            n = 0
                        }
                    }}></input><input id='raiz' type="button" value="√" onClick={() => {//BOTAO DE RAIZ
                        var res = document.getElementById('res')
                        if (numb != "") {
                            numeros.push(n)
                        }
                        res.value += "√"
                        numeros.push("√")
                        numb = ""
                        n = 0
                    }}></input><input id='div' type="button" value="÷" onClick={() => {//BOTAO DE DIVISÃO
                        var res = document.getElementById('res')
                        if (numb != "") {
                            numeros.push(n)
                        }
                        if (numeros[numeros.length - 1] == "×" || numeros[numeros.length - 1] == "÷" || numeros[numeros.length - 1] == "+" || numeros[numeros.length - 1] == "-" || res.value == "" || numeros[numeros.length - 1] == ",") {
                            window.alert("[ERRO]Escreva um número!")
                        } else {
                            res.value += "÷"
                            numeros.push("÷")
                            numb = ""
                            n = 0
                        }
                    }}></input>
                </div>
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
                        if (numeros[numeros.length - 1] == "×" || numeros[numeros.length - 1] == "÷" || numeros[numeros.length - 1] == "+" || numeros[numeros.length - 1] == "-" || res.value == "" || numeros[numeros.length - 1] == ",") {
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
                        if (numeros[numeros.length - 1] == "×" || numeros[numeros.length - 1] == "÷" || numeros[numeros.length - 1] == "+" || numeros[numeros.length - 1] == "-" || res.value == "" || numeros[numeros.length - 1] == ",") {
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
                        if (numeros[numeros.length - 1] == "×" || numeros[numeros.length - 1] == "÷" || numeros[numeros.length - 1] == "+" || numeros[numeros.length - 1] == "-" || res.value == "" || numeros[numeros.length - 1] == ",") {
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
                    }}></input><input id='virgula' type="button" value="," onClick={() => {//BOTAO DE VÍRGULA
                        var res = document.getElementById('res')
                        if (numb != "") {
                            numeros.push(n)
                        }
                        if (numeros[numeros.length - 1] == "×" || numeros[numeros.length - 1] == "÷" || numeros[numeros.length - 1] == "+" || numeros[numeros.length - 1] == "-" || res.value == "" || numeros[numeros.length - 1] == ",") {
                            window.alert("[ERRO]Escreva um número!")
                        } else {
                            res.value += ","
                            numeros.push(",")
                            numb = ""
                            n = 0
                        }
                    }}></input><input id="igual" type="button" value="=" onClick={() => {//BOTAO DE IGUAL
                        var res = document.getElementById('res')
                        if (numb != "") {
                            numeros.push(n)
                        }
                        var size = numeros.length
                        //VÍRGULA
                        for (var i = 0; i < size; i++) {
                            if (numeros[i] == ",") {
                                var numero = numeros[i + 1]
                                var cont = 0
                                for (numero; numero > 1; numero = numero / 10) {
                                    cont++
                                }
                                resultado = (numeros[i - 1] * Math.pow(10, cont) + numeros[i + 1]) / Math.pow(10, cont)
                                numeros[i] = resultado
                                numeros.splice(i - 1, 1)
                                numeros.splice(i, 1)
                                i = 0
                            }
                        }
                        //PARÊNTESES
                        var i2 = 0
                        for (var i = size - 1; i >= 0; i--) {
                            if (numeros[i] == "(") {
                                i2 = i
                                while (numeros[i2] != ")") {
                                    i2++
                                }
                                var count_inicio = i
                                var count_fim = i2
                                //RAIZ DO PARÊNTESES
                                for (count_inicio; count_inicio <= count_fim; count_inicio++) {
                                    if (numeros[count_inicio] == "√") {
                                        resultado = Math.pow(numeros[count_inicio + 1], 0.5)
                                        numeros[count_inicio] = resultado
                                        numeros.splice(count_inicio + 1, 1)
                                        count_inicio = i
                                        count_fim--
                                    }
                                }
                                i2 = i
                                while (numeros[i2] != ")") {
                                    i2++
                                }
                                count_inicio = i
                                count_fim = i2
                                //MULTIPLICAÇÃO DO PARÊNTESES
                                for (count_inicio; count_inicio <= count_fim; count_inicio++) {
                                    if (numeros[count_inicio] == "×") {
                                        resultado = numeros[count_inicio - 1] * numeros[count_inicio + 1]
                                        numeros[count_inicio] = resultado
                                        numeros.splice(count_inicio - 1, 1)
                                        numeros.splice(count_inicio, 1)
                                        count_inicio = i
                                        count_fim--
                                    }
                                }
                                i2 = i
                                while (numeros[i2] != ")") {
                                    i2++
                                }
                                count_inicio = i
                                count_fim = i2
                                //DIVISÃO DO PARÊNTESES
                                for (count_inicio; count_inicio <= count_fim; count_inicio++) {
                                    if (numeros[count_inicio] == "÷") {
                                        resultado = numeros[count_inicio - 1] / numeros[count_inicio + 1]
                                        numeros[count_inicio] = resultado
                                        numeros.splice(count_inicio - 1, 1)
                                        numeros.splice(count_inicio, 1)
                                        count_inicio = i
                                        count_fim--
                                    }
                                }
                                i2 = i
                                while (numeros[i2] != ")") {
                                    i2++
                                }
                                count_inicio = i
                                count_fim = i2
                                //SUBTRAÇÃO DO PARÊNTESES
                                for (count_inicio; count_inicio < count_fim; count_inicio++) {
                                    if (numeros[count_inicio] == "-") {
                                        resultado = numeros[count_inicio - 1] - numeros[count_inicio + 1]
                                        numeros[count_inicio] = resultado
                                        numeros.splice(count_inicio - 1, 1)
                                        numeros.splice(count_inicio, 1)
                                        count_inicio = i
                                        count_fim--
                                    }
                                }
                                i2 = i
                                while (numeros[i2] != ")") {
                                    i2++
                                }
                                count_inicio = i
                                count_fim = i2
                                //SOMA DO PARÊNTESES
                                for (count_inicio; count_inicio < count_fim; count_inicio++) {
                                    if (numeros[count_inicio] == "+") {
                                        resultado = numeros[count_inicio - 1] + numeros[count_inicio + 1]
                                        numeros[count_inicio] = resultado
                                        numeros.splice(count_inicio - 1, 1)
                                        numeros.splice(count_inicio, 1)
                                        count_inicio = i
                                        count_fim--
                                    }
                                }
                                count_fim = i2
                                count_inicio = i
                                //window.alert(`SPLICE 0 ${numeros} count_inicio: ${count_inicio} count_fim: ${count_fim} i2: ${i2}`)
                                numeros.splice(count_inicio, 1)
                                numeros.splice(count_inicio + 1, 1)
                            }
                        }
                        //RAIZ
                        for (var i = 0; i < size; i++) {
                            if (numeros[i] == "√") {
                                resultado = Math.pow(numeros[i + 1], 0.5)
                                numeros[i] = resultado
                                numeros.splice(i + 1, 1)
                                i = 0
                            }
                        }
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
                        //}
                        resultado = numeros[0]
                        res.value = resultado
                        numb = ""
                        n = 0
                        numeros = []
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