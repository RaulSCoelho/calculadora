import Link from 'next/link'

function Home() {
    var resultado = 0
    var numeros = []
    var numb = ""
    var remove = 0
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
                        remove = 0
                        if (numb != "") {
                            numeros.push(numb)
                        }
                        if (res.value == "" || numeros[numeros.length - 1] == "×" || numeros[numeros.length - 1] == "÷" || numeros[numeros.length - 1] == "+" || numeros[numeros.length - 1] == "-" || numeros[numeros.length - 1] == "(" || numeros[numeros.length - 1] == "√") {
                            res.value += "("
                            numeros.push("(")
                            numb = ""
                        } else {
                            window.alert("[ERRO]Escreva um sinal!")
                        }
                    }}></input><input id='parent1' type="button" value=")" onClick={() => {//BOTAO DE PARÊNTESES
                        var res = document.getElementById('res')
                        remove = 0
                        if (numb != "") {
                            numeros.push(numb)
                        }
                        if (res.value == "" || numeros[numeros.length - 1] == "×" || numeros[numeros.length - 1] == "÷" || numeros[numeros.length - 1] == "+" || numeros[numeros.length - 1] == "-" || numeros[numeros.length - 1] == "(") {
                            window.alert("[ERRO]Escreva um número!")
                        } else {
                            res.value += ")"
                            numeros.push(")")
                            numb = ""
                        }
                    }}></input><input id='raiz' type="button" value="√" onClick={() => {//BOTAO DE RAIZ
                        var res = document.getElementById('res')
                        remove = 0
                        if (numb != "") {
                            numeros.push(numb)
                        }
                        res.value += "√"
                        numeros.push("√")
                        numb = ""
                    }}></input><input id='div' type="button" value="÷" onClick={() => {//BOTAO DE DIVISÃO
                        var res = document.getElementById('res')
                        remove = 0
                        if (numb != "") {
                            numeros.push(numb)
                        }
                        if (numeros[numeros.length - 1] == "×" || numeros[numeros.length - 1] == "÷" || numeros[numeros.length - 1] == "+" || numeros[numeros.length - 1] == "-" || res.value == "" || numeros[numeros.length - 1] == ",") {
                            window.alert("[ERRO]Escreva um número!")
                        } else {
                            res.value += "÷"
                            numeros.push("÷")
                            numb = ""
                        }
                    }}></input>
                </div>
                <div>
                    <input id='btnum' type="button" value="7" onClick={() => {
                        var res = document.getElementById('res')
                        remove = 1
                        if (numeros.length == 1 && numeros[0] == resultado) {
                            res.value = ""
                            numeros = []
                            res.value += "7"
                            numb += "7"
                        } else {
                            res.value += "7"
                            numb += "7"
                        }
                    }}></input><input id='btnum' type="button" value="8" onClick={() => {
                        var res = document.getElementById('res')
                        remove = 1
                        if (numeros.length == 1 && numeros[0] == resultado) {
                            res.value = ""
                            numeros = []
                            res.value += "8"
                            numb += "8"
                        } else {
                            res.value += "8"
                            numb += "8"
                        }
                    }}></input><input id='btnum' type="button" value="9" onClick={() => {
                        var res = document.getElementById('res')
                        remove = 1
                        if (numeros.length == 1 && numeros[0] == resultado) {
                            res.value = ""
                            numeros = []
                            res.value += "9"
                            numb += "9"
                        } else {
                            res.value += "9"
                            numb += "9"
                        }
                    }}></input><input id='mult' type="button" value="×" onClick={() => {//BOTAO DE MULTIPLCAÇÃO
                        var res = document.getElementById('res')
                        remove = 0
                        if (numb != "") {
                            numeros.push(numb)
                        }
                        if (numeros[numeros.length - 1] == "×" || numeros[numeros.length - 1] == "÷" || numeros[numeros.length - 1] == "+" || numeros[numeros.length - 1] == "-" || res.value == "" || numeros[numeros.length - 1] == ",") {
                            window.alert("[ERRO]Escreva um número!")
                        } else {
                            res.value += "×"
                            numeros.push("×")
                            numb = ""
                        }
                    }}></input>
                </div>
                <div>
                    <input id='btnum' type="button" value="4" onClick={() => {
                        var res = document.getElementById('res')
                        remove = 1
                        if (numeros.length == 1 && numeros[0] == resultado) {
                            res.value = ""
                            numeros = []
                            res.value += "4"
                            numb += "4"
                        } else {
                            res.value += "4"
                            numb += "4"
                        }
                    }}></input><input id='btnum' type="button" value="5" onClick={() => {
                        var res = document.getElementById('res')
                        remove = 1
                        if (numeros.length == 1 && numeros[0] == resultado) {
                            res.value = ""
                            numeros = []
                            res.value += "5"
                            numb += "5"
                        } else {
                            res.value += "5"
                            numb += "5"
                        }
                    }}></input><input id='btnum' type="button" value="6" onClick={() => {
                        var res = document.getElementById('res')
                        remove = 1
                        if (numeros.length == 1 && numeros[0] == resultado) {
                            res.value = ""
                            numeros = []
                            res.value += "6"
                            numb += "6"
                        } else {
                            res.value += "6"
                            numb += "6"
                        }
                    }}></input><input id='menos' type="button" value="-" onClick={() => {//BOTAO DE SUBTRAÇÃO
                        var res = document.getElementById('res')
                        remove = 0
                        if (numb != "") {
                            numeros.push(numb)
                        }
                        if (numeros[numeros.length - 1] == "×" || numeros[numeros.length - 1] == "÷" || numeros[numeros.length - 1] == "+" || numeros[numeros.length - 1] == "-" || res.value == "" || numeros[numeros.length - 1] == ",") {
                            window.alert("[ERRO]Escreva um número!")
                        } else {
                            res.value += "-"
                            numeros.push("-")
                            numb = ""
                        }
                    }}></input>
                </div>
                <div>
                    <input id='btnum' type="button" value="1" onClick={() => {
                        var res = document.getElementById('res')
                        remove = 1
                        if (numeros.length == 1 && numeros[0] == resultado) {
                            res.value = ""
                            numeros = []
                            res.value += "1"
                            numb += "1"
                        } else {
                            res.value += "1"
                            numb += "1"
                        }
                    }}></input><input id='btnum' type="button" value="2" onClick={() => {
                        var res = document.getElementById('res')
                        remove = 1
                        if (numeros.length == 1 && numeros[0] == resultado) {
                            res.value = ""
                            numeros = []
                            res.value += "2"
                            numb += "2"
                        } else {
                            res.value += "2"
                            numb += "2"
                        }
                    }}></input><input id='btnum' type="button" value="3" onClick={() => {
                        var res = document.getElementById('res')
                        remove = 1
                        if (numeros.length == 1 && numeros[0] == resultado) {
                            res.value = ""
                            numeros = []
                            res.value += "3"
                            numb += "3"
                        } else {
                            res.value += "3"
                            numb += "3"
                        }
                    }}></input><input id='mais' type="button" value="+" onClick={() => {//BOTAO DE SOMA
                        var res = document.getElementById('res')
                        remove = 0
                        if (numb != "") {
                            numeros.push(numb)
                        }
                        if (numeros[numeros.length - 1] == "×" || numeros[numeros.length - 1] == "÷" || numeros[numeros.length - 1] == "+" || numeros[numeros.length - 1] == "-" || res.value == "" || numeros[numeros.length - 1] == ",") {
                            window.alert("[ERRO]Escreva um número!")
                        } else {
                            res.value += "+"
                            numeros.push("+")
                            numb = ""
                        }
                    }}></input>
                </div>
                <div>
                    <input id='clear' type="button" value="C" onClick={() => {//BOTAO DE LIMPAR A TELA
                        var res = document.getElementById('res')
                        remove = 0
                        res.value = ""
                        numb = ""
                        numeros = []
                    }}></input><input id='btnum' type="button" value="0" onClick={() => {
                        var res = document.getElementById('res')
                        remove = 1
                        if (numeros.length == 1 && numeros[0] == resultado) {
                            res.value = ""
                            numeros = []
                            res.value += "0"
                            numb += "0"
                        } else {
                            res.value += "0"
                            numb += "0"
                        }
                    }}></input><input id='virgula' type="button" value="," onClick={() => {//BOTAO DE VÍRGULA
                        var res = document.getElementById('res')
                        remove = 0
                        if (numb != "") {
                            numeros.push(numb)
                        }
                        if (numeros[numeros.length - 1] == "×" || numeros[numeros.length - 1] == "÷" || numeros[numeros.length - 1] == "+" || numeros[numeros.length - 1] == "-" || res.value == "" || numeros[numeros.length - 1] == ",") {
                            window.alert("[ERRO]Escreva um número!")
                        } else {
                            res.value += ","
                            numeros.push(",")
                            numb = ""
                        }
                    }}></input><input id="igual" type="button" value="=" onClick={() => {//BOTAO DE IGUAL
                        var res = document.getElementById('res')
                        remove = 0
                        if (numb != "") {
                            numeros.push(numb)
                        }
                        var size = numeros.length
                        //VÍRGULA
                        for (var i = 0; i < size; i++) {
                            if (numeros[i] == ",") {
                                resultado = Number(numeros[i - 1] + numeros[i + 1]) / Math.pow(10, numeros[i + 1].length)
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
                                //POTÊNCIA DO PARÊNTESES
                                for (count_inicio; count_inicio <= count_fim; count_inicio++) {
                                    if (numeros[count_inicio] == "^") {
                                        resultado = Math.pow(Number(numeros[count_inicio - 1]), Number(numeros[count_inicio + 1]))
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
                                //RAIZ DO PARÊNTESES
                                for (count_inicio; count_inicio <= count_fim; count_inicio++) {
                                    if (numeros[count_inicio] == "√") {
                                        resultado = Math.pow(Number(numeros[count_inicio + 1]), 0.5)
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
                                        resultado = Number(numeros[count_inicio - 1]) * Number(numeros[count_inicio + 1])
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
                                        resultado = Number(numeros[count_inicio - 1]) / Number(numeros[count_inicio + 1])
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
                                        if (numeros[count_inicio - 1] == "(") {
                                            resultado = 0 - Number(numeros[count_inicio + 1])
                                            numeros[count_inicio] = resultado
                                            numeros.splice(count_inicio + 1, 1)
                                            count_inicio = i
                                            count_fim--
                                        } else {
                                            resultado = Number(numeros[count_inicio - 1]) - Number(numeros[count_inicio + 1])
                                            numeros[count_inicio] = resultado
                                            numeros.splice(count_inicio - 1, 1)
                                            numeros.splice(count_inicio, 1)
                                            count_inicio = i
                                            count_fim--
                                        }
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
                                        resultado = Number(numeros[count_inicio - 1]) + Number(numeros[count_inicio + 1])
                                        numeros[count_inicio] = resultado
                                        numeros.splice(count_inicio - 1, 1)
                                        numeros.splice(count_inicio, 1)
                                        count_inicio = i
                                        count_fim--
                                    }
                                }
                                count_fim = i2
                                count_inicio = i
                                numeros.splice(count_inicio, 1)
                                numeros.splice(count_inicio + 1, 1)
                            }
                        }
                        //POTÊNCIA
                        for (var i = 0; i < size; i++) {
                            if (numeros[i] == "^") {
                                var numero1 = Number(numeros[i - 1])
                                var numero2 = Number(numeros[i + 1])
                                resultado = Math.pow(numero1, numero2)
                                numeros[i] = resultado
                                numeros.splice(i - 1, 1)
                                numeros.splice(i, 1)
                                i = 0
                            }
                        }
                        //RAIZ
                        for (var i = 0; i < size; i++) {
                            if (numeros[i] == "√") {
                                var numero = Number(numeros[i + 1])
                                resultado = Math.pow(numero, 0.5)
                                numeros[i] = resultado
                                numeros.splice(i + 1, 1)
                                i = 0
                            }
                        }
                        //MULTIPLICAÇÃO
                        for (var i = 0; i < size; i++) {
                            if (numeros[i] == "×") {
                                resultado = Number(numeros[i - 1]) * Number(numeros[i + 1])
                                numeros[i] = resultado
                                numeros.splice(i - 1, 1)
                                numeros.splice(i, 1)
                                i = 0
                            }
                        }
                        //DIVISÃO
                        for (var i = 0; i < size; i++) {
                            if (numeros[i] == "÷") {
                                resultado = Number(numeros[i - 1]) / Number(numeros[i + 1])
                                numeros[i] = resultado
                                numeros.splice(i - 1, 1)
                                numeros.splice(i, 1)
                                i = 0
                            }
                        }
                        //SUBTRAÇÃO
                        for (var i = 0; i < size; i++) {
                            if (numeros[i] == "-") {
                                resultado = Number(numeros[i - 1]) - Number(numeros[i + 1])
                                numeros[i] = resultado
                                numeros.splice(i - 1, 1)
                                numeros.splice(i, 1)
                                i = 0
                            }
                        }
                        //SOMA
                        for (var i = 0; i < size; i++) {
                            if (numeros[i] == "+") {
                                resultado = Number(numeros[i - 1]) + Number(numeros[i + 1])
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
                        numeros = [resultado]
                    }}></input>
                </div>
                <div>
                    <input id="pow" type="button" value="" onClick={() => {//BOTÃO DE POTÊNCIA
                        var res = document.getElementById('res')
                        remove = 0
                        if (numb != "") {
                            numeros.push(numb)
                        }
                        res.value += "^"
                        numeros.push("^")
                        numb = ""
                    }}></input><input id="delete" type="button" value="" onClick={() => {//BOTAO DE APAGAR
                        var res = document.getElementById('res')
                        if (remove == 1) {
                            numeros.push(numb)
                            remove--
                        }
                        var tamanho = numeros.length
                        var string = numeros[tamanho - 1]
                        var del = string.slice(0, -1)
                        numeros[tamanho - 1] = del
                        if (numeros[tamanho - 1].length == 0) {
                            numeros.splice(tamanho - 1, 1)
                        }
                        res.value = res.value.slice(0, -1)
                        numb = ""
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