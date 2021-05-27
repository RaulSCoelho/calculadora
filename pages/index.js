import Link from 'next/link'

function Home() {
    var resultado
    var num9 = ""
    var num9n = 0
    var nove = 0
    var count = 0
    var n2 = 1
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
                        if (count < 0) {
                            count = 1
                        }
                        nove++
                        if (count == 2) {
                            resultado = n2 * 7
                            num9 += "7"
                            count--
                        } else if (count == 1) {
                            for (nove; nove > 1; nove--) {
                                num9 += "7"
                            }
                            num9n = Number(num9)
                            resultado = num9n * n2
                        }
                    }}></input><input id='btnum' type="button" value="8" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "8"
                        if (count < 0) {
                            count = 2
                        }
                        nove++
                        if (count == 2) {
                            resultado = n2 * 8
                            num9 += "8"
                            count--
                        } else if (count == 1) {
                            for (nove; nove > 1; nove--) {
                                num9 += "8"
                            }
                            num9n = Number(num9)
                            resultado = num9n * n2
                        }
                    }}></input><input id='btnum' type="button" value="9" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "9"
                        if (count < 0) {
                            count = 1
                        }
                        nove++
                        if (count == 2) {
                            resultado = n2 * 9
                            num9 += "9"
                            count--
                        } else if (count == 1) {
                            for (nove; nove > 1; nove--) {
                                num9 += "9"
                            }
                            num9n = Number(num9)
                            resultado = num9n * n2
                        }
                    }}></input><input id='mult' type="button" value="X" onClick={() => {
                        n2 = resultado
                        nove = 0
                        num9 = ""
                        if (count == 0) {
                            var res = document.getElementById('res')
                            var result = Number(res.value)
                            n2 = result
                            res.value += 'x'
                            count += 2
                        } else {
                            res = document.getElementById('res')
                            res.value += 'x'
                            count = 2
                        }
                    }}></input>
                </div>
                <div>
                    <input id='btnum' type="button" value="4" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "4"
                        if (count < 0) {
                            count = 1
                        }
                        nove++
                        if (count == 2) {
                            resultado = n2 * 4
                            num9 += "4"
                            count--
                        } else if (count == 1) {
                            for (nove; nove > 1; nove--) {
                                num9 += "4"
                            }
                            num9n = Number(num9)
                            resultado = num9n * n2
                        }
                    }}></input><input id='btnum' type="button" value="5" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "5"
                        if (count < 0) {
                            count = 1
                        }
                        nove++
                        if (count == 2) {
                            resultado = n2 * 5
                            num9 += "5"
                            count--
                        } else if (count == 1) {
                            for (nove; nove > 1; nove--) {
                                num9 += "5"
                            }
                            num9n = Number(num9)
                            resultado = num9n * n2
                        }
                    }}></input><input id='btnum' type="button" value="6" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "6"
                        if (count < 0) {
                            count = 1
                        }
                        nove++
                        if (count == 2) {
                            resultado = n2 * 6
                            num9 += "6"
                            count--
                        } else if (count == 1) {
                            for (nove; nove > 1; nove--) {
                                num9 += "6"
                            }
                            num9n = Number(num9)
                            resultado = num9n * n2
                        }
                    }}></input><input id='menos' type="button" value="-" onClick={() => {
                        /*var res = document.getElementById('res')
                        var result = Number(res.value)
                        res.value += "-"*/
                        window.alert(`num9n: ${num9n} num9: ${num9} nove: ${nove} count: ${count}`)
                    }}></input>
                </div>
                <div>
                    <input id='btnum' type="button" value="1" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "1"
                        if (count < 0) {
                            count = 1
                        }
                        nove++
                        if (count == 2) {
                            resultado = n2 * 1
                            num9 += "1"
                            count--
                        } else if (count == 1) {
                            for (nove; nove > 1; nove--) {
                                num9 += "1"
                            }
                            num9n = Number(num9)
                            resultado = num9n * n2
                        }
                    }}></input><input id='btnum' type="button" value="2" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "2"
                        if (count < 0) {
                            count = 1
                        }
                        nove++
                        if (count == 2) {
                            resultado = n2 * 2
                            num9 += "2"
                            count--
                        } else if (count == 1) {
                            for (nove; nove > 1; nove--) {
                                num9 += "2"
                            }
                            num9n = Number(num9)
                            resultado = num9n * n2
                        }
                    }}></input><input id='btnum' type="button" value="3" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "3"
                        if (count < 0) {
                            count = 1
                        }
                        nove++
                        if (count == 2) {
                            resultado = n2 * 3
                            num9 += "3"
                            count--
                        } else if (count == 1) {
                            for (nove; nove > 1; nove--) {
                                num9 += "3"
                            }
                            num9n = Number(num9)
                            resultado = num9n * n2
                        }
                    }}></input><input id='mais' type="button" value="+" onClick={() => {
                        var res = document.getElementById('res')
                        var result = Number(res.value)
                        res.value += "+"
                    }}></input>
                </div>
                <div>
                    <input id='clear' type="button" value="C" onClick={() => {
                        var res = document.getElementById('res')
                        res.value = ""
                        n2 = 1
                        count = 0
                        num9 = ""
                        num9n = 0
                        nove = 0
                        resultado = 0
                    }}></input><input id='btnum' type="button" value="0" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "0"
                        if (count < 0) {
                            count = 1
                        }
                        nove++
                        if (count == 2) {
                            resultado = n2 * 0
                            num9 += "0"
                            count--
                        } else if (count == 1) {
                            for (nove; nove > 1; nove--) {
                                num9 += "0"
                            }
                            num9n = Number(num9)
                            resultado = num9n * n2
                        }
                    }}></input><input id='comma' type="button" value="," onClick={() => {
                        var res = document.getElementById('res')
                        res.value += ","
                    }}></input><input id='div' type="button" value="÷" onClick={() => {
                        var res = document.getElementById('res')
                        var result = Number(res.value)
                        res.value += "÷"
                    }}></input>
                </div>
            </div>
            <div id='btn'>
                <input id="igual" type="button" value="=" onClick={() => {
                    var res = document.getElementById('res')
                    res.value = resultado
                    n2 = 1
                    count = 0
                    num9 = ""
                    num9n = 0
                    nove = 0
                    resultado = 0
                }}></input>
            </div>
        </section>
        <footer>
            <p>&copy; RaulSCoelho</p>
        </footer>
    </div>)
}

export default Home