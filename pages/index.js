import Link from 'next/link'

function Home() {
    var resultado = 0
    var multcat = ""
    var multcatnum = 0
    var multquant = 0
    var multcount = 0
    var divcat = ""
    var divcatnum = 0
    var divquant = 0
    var divcount = 0
    var somacat = ""
    var somacatnum = 0
    var somaquant = 0
    var somacount = 0
    var subcat = ""
    var subcatnum = 0
    var subquant = 0
    var subcount = 0
    var n = 1
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
                        if (multcount != 0) {
                            if (multcount < 0) {
                                multcount = 1
                            }
                            multquant++
                            if (multcount == 2) {
                                resultado = n * 7
                                multcat += "7"
                                multcount--
                            } else if (multcount == 1) {
                                for (multquant; multquant > 1; multquant--) {
                                    multcat += "7"
                                }
                                multcatnum = Number(multcat)
                                resultado = n * multcatnum
                            }
                        }
                        //DIVISÃO
                        if (divcount != 0) {
                            if (divcount < 0) {
                                divcount = 2
                            }
                            divquant++
                            if (divcount == 2) {
                                resultado = n / 7
                                divcat += "7"
                                divcount--
                            } else if (divcount == 1) {
                                for (divquant; divquant > 1; divquant--) {
                                    divcat += "7"
                                }
                                divcatnum = Number(divcat)
                                resultado = n / divcatnum
                            }
                        }
                        //SOMA
                        if (somacount != 0) {
                            if (somacount < 0) {
                                somacount = 2
                            }
                            somaquant++
                            if (somacount == 2) {
                                resultado = n + 7
                                somacat += "7"
                                somacount--
                            } else if (somacount == 1) {
                                for (somaquant; somaquant > 1; somaquant--) {
                                    somacat += "7"
                                }
                                somacatnum = Number(somacat)
                                resultado = n + somacatnum
                            }
                        }
                        //SUBTRAÇÃO
                        if (subcount != 0) {
                            if (subcount < 0) {
                                subcount = 2
                            }
                            subquant++
                            if (subcount == 2) {
                                resultado = n - 7
                                subcat += "7"
                                subcount--
                            } else if (subcount == 1) {
                                for (subquant; subquant > 1; subquant--) {
                                    subcat += "7"
                                }
                                subcatnum = Number(subcat)
                                resultado = n - subcatnum
                            }
                        }
                    }}></input><input id='btnum' type="button" value="8" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "8"
                        if (multcount != 0) {
                            if (multcount < 0) {
                                multcount = 1
                            }
                            multquant++
                            if (multcount == 2) {
                                resultado = n * 8
                                multcat += "8"
                                multcount--
                            } else if (multcount == 1) {
                                for (multquant; multquant > 1; multquant--) {
                                    multcat += "8"
                                }
                                multcatnum = Number(multcat)
                                resultado = n * multcatnum
                            }
                        }
                        //DIVISÃO
                        if (divcount != 0) {
                            if (divcount < 0) {
                                divcount = 2
                            }
                            divquant++
                            if (divcount == 2) {
                                resultado = n / 8
                                divcat += "8"
                                divcount--
                            } else if (divcount == 1) {
                                for (divquant; divquant > 1; divquant--) {
                                    divcat += "8"
                                }
                                divcatnum = Number(divcat)
                                resultado = n / divcatnum
                            }
                        }
                        //SOMA
                        if (somacount != 0) {
                            if (somacount < 0) {
                                somacount = 2
                            }
                            somaquant++
                            if (somacount == 2) {
                                resultado = n + 8
                                somacat += "8"
                                somacount--
                            } else if (somacount == 1) {
                                for (somaquant; somaquant > 1; somaquant--) {
                                    somacat += "8"
                                }
                                somacatnum = Number(somacat)
                                resultado = n + somacatnum
                            }
                        }
                        //SUBTRAÇÃO
                        if (subcount != 0) {
                            if (subcount < 0) {
                                subcount = 2
                            }
                            subquant++
                            if (subcount == 2) {
                                resultado = n - 8
                                subcat += "8"
                                subcount--
                            } else if (subcount == 1) {
                                for (subquant; subquant > 1; subquant--) {
                                    subcat += "8"
                                }
                                subcatnum = Number(subcat)
                                resultado = n - subcatnum
                            }
                        }
                    }}></input><input id='btnum' type="button" value="9" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "9"
                        if (multcount != 0) {
                            if (multcount < 0) {
                                multcount = 1
                            }
                            multquant++
                            if (multcount == 2) {
                                resultado = n * 9
                                multcat += "9"
                                multcount--
                            } else if (multcount == 1) {
                                for (multquant; multquant > 1; multquant--) {
                                    multcat += "9"
                                }
                                multcatnum = Number(multcat)
                                resultado = n * multcatnum
                            }
                        }
                        //DIVISÃO
                        if (divcount != 0) {
                            if (divcount < 0) {
                                divcount = 2
                            }
                            divquant++
                            if (divcount == 2) {
                                resultado = n / 9
                                divcat += "9"
                                divcount--
                            } else if (divcount == 1) {
                                for (divquant; divquant > 1; divquant--) {
                                    divcat += "9"
                                }
                                divcatnum = Number(divcat)
                                resultado = n / divcatnum
                            }
                        }
                        //SOMA
                        if (somacount != 0) {
                            if (somacount < 0) {
                                somacount = 2
                            }
                            somaquant++
                            if (somacount == 2) {
                                resultado = n + 9
                                somacat += "9"
                                somacount--
                            } else if (somacount == 1) {
                                for (somaquant; somaquant > 1; somaquant--) {
                                    somacat += "9"
                                }
                                somacatnum = Number(somacat)
                                resultado = n + somacatnum
                            }
                        }
                        //SUBTRAÇÃO
                        if (subcount != 0) {
                            if (subcount < 0) {
                                subcount = 2
                            }
                            subquant++
                            if (subcount == 2) {
                                resultado = n - 9
                                subcat += "9"
                                subcount--
                            } else if (subcount == 1) {
                                for (subquant; subquant > 1; subquant--) {
                                    subcat += "9"
                                }
                                subcatnum = Number(subcat)
                                resultado = n - subcatnum
                            }
                        }
                    }}></input><input id='mult' type="button" value="X" onClick={() => {
                        subcount = 0
                        somacount = 0
                        divcount = 0
                        n = resultado
                        multquant = 0
                        multcat = ""
                        if (multcount == 0) {
                            var res = document.getElementById('res')
                            var result = Number(res.value)
                            if (resultado == 0) {
                                n = result
                            }
                            res.value += 'x'
                            multcount += 2
                        } else {
                            res = document.getElementById('res')
                            res.value += 'x'
                            multcount = 2
                        }
                    }}></input>
                </div>
                <div>
                    <input id='btnum' type="button" value="4" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "4"
                        if (multcount != 0) {
                            if (multcount < 0) {
                                multcount = 1
                            }
                            multquant++
                            if (multcount == 2) {
                                resultado = n * 4
                                multcat += "4"
                                multcount--
                            } else if (multcount == 1) {
                                for (multquant; multquant > 1; multquant--) {
                                    multcat += "4"
                                }
                                multcatnum = Number(multcat)
                                resultado = n * multcatnum
                            }
                        }
                        //DIVISÃO
                        if (divcount != 0) {
                            if (divcount < 0) {
                                divcount = 2
                            }
                            divquant++
                            if (divcount == 2) {
                                resultado = n / 4
                                divcat += "4"
                                divcount--
                            } else if (divcount == 1) {
                                for (divquant; divquant > 1; divquant--) {
                                    divcat += "4"
                                }
                                divcatnum = Number(divcat)
                                resultado = n / divcatnum
                            }
                        }
                        //SOMA
                        if (somacount != 0) {
                            if (somacount < 0) {
                                somacount = 2
                            }
                            somaquant++
                            if (somacount == 2) {
                                resultado = n + 4
                                somacat += "4"
                                somacount--
                            } else if (somacount == 1) {
                                for (somaquant; somaquant > 1; somaquant--) {
                                    somacat += "4"
                                }
                                somacatnum = Number(somacat)
                                resultado = n + somacatnum
                            }
                        }
                        //SUBTRAÇÃO
                        if (subcount != 0) {
                            if (subcount < 0) {
                                subcount = 2
                            }
                            subquant++
                            if (subcount == 2) {
                                resultado = n - 4
                                subcat += "4"
                                subcount--
                            } else if (subcount == 1) {
                                for (subquant; subquant > 1; subquant--) {
                                    subcat += "4"
                                }
                                subcatnum = Number(subcat)
                                resultado = n - subcatnum
                            }
                        }
                    }}></input><input id='btnum' type="button" value="5" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "5"
                        if (multcount != 0) {
                            if (multcount < 0) {
                                multcount = 1
                            }
                            multquant++
                            if (multcount == 2) {
                                resultado = n * 5
                                multcat += "5"
                                multcount--
                            } else if (multcount == 1) {
                                for (multquant; multquant > 1; multquant--) {
                                    multcat += "5"
                                }
                                multcatnum = Number(multcat)
                                resultado = n * multcatnum
                            }
                        }
                        //DIVISÃO
                        if (divcount != 0) {
                            if (divcount < 0) {
                                divcount = 2
                            }
                            divquant++
                            if (divcount == 2) {
                                resultado = n / 5
                                divcat += "5"
                                divcount--
                            } else if (divcount == 1) {
                                for (divquant; divquant > 1; divquant--) {
                                    divcat += "5"
                                }
                                divcatnum = Number(divcat)
                                resultado = n / divcatnum
                            }
                        }
                        //SOMA
                        if (somacount != 0) {
                            if (somacount < 0) {
                                somacount = 2
                            }
                            somaquant++
                            if (somacount == 2) {
                                resultado = n + 5
                                somacat += "5"
                                somacount--
                            } else if (somacount == 1) {
                                for (somaquant; somaquant > 1; somaquant--) {
                                    somacat += "5"
                                }
                                somacatnum = Number(somacat)
                                resultado = n + somacatnum
                            }
                        }
                        //SUBTRAÇÃO
                        if (subcount != 0) {
                            if (subcount < 0) {
                                subcount = 2
                            }
                            subquant++
                            if (subcount == 2) {
                                resultado = n - 5
                                subcat += "5"
                                subcount--
                            } else if (subcount == 1) {
                                for (subquant; subquant > 1; subquant--) {
                                    subcat += "5"
                                }
                                subcatnum = Number(subcat)
                                resultado = n - subcatnum
                            }
                        }
                    }}></input><input id='btnum' type="button" value="6" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "6"
                        if (multcount != 0) {
                            if (multcount < 0) {
                                multcount = 1
                            }
                            multquant++
                            if (multcount == 2) {
                                resultado = n * 6
                                multcat += "6"
                                multcount--
                            } else if (multcount == 1) {
                                for (multquant; multquant > 1; multquant--) {
                                    multcat += "6"
                                }
                                multcatnum = Number(multcat)
                                resultado = n * multcatnum
                            }
                        }
                        //DIVISÃO
                        if (divcount != 0) {
                            if (divcount < 0) {
                                divcount = 2
                            }
                            divquant++
                            if (divcount == 2) {
                                resultado = n / 6
                                divcat += "6"
                                divcount--
                            } else if (divcount == 1) {
                                for (divquant; divquant > 1; divquant--) {
                                    divcat += "6"
                                }
                                divcatnum = Number(divcat)
                                resultado = n / divcatnum
                            }
                        }
                        //SOMA
                        if (somacount != 0) {
                            if (somacount < 0) {
                                somacount = 2
                            }
                            somaquant++
                            if (somacount == 2) {
                                resultado = n + 6
                                somacat += "6"
                                somacount--
                            } else if (somacount == 1) {
                                for (somaquant; somaquant > 1; somaquant--) {
                                    somacat += "6"
                                }
                                somacatnum = Number(somacat)
                                resultado = n + somacatnum
                            }
                        }
                        //SUBTRAÇÃO
                        if (subcount != 0) {
                            if (subcount < 0) {
                                subcount = 2
                            }
                            subquant++
                            if (subcount == 2) {
                                resultado = n - 6
                                subcat += "6"
                                subcount--
                            } else if (subcount == 1) {
                                for (subquant; subquant > 1; subquant--) {
                                    subcat += "6"
                                }
                                subcatnum = Number(subcat)
                                resultado = n - subcatnum
                            }
                        }
                    }}></input><input id='menos' type="button" value="-" onClick={() => {
                        somacount = 0
                        multcount = 0
                        divcount = 0
                        n = resultado
                        subquant = 0
                        subcat = ""
                        if (subcount == 0) {
                            var res = document.getElementById('res')
                            var result = Number(res.value)
                            if (resultado == 0) {
                                n = result
                            }
                            res.value += '-'
                            subcount += 2
                        } else {
                            res = document.getElementById('res')
                            res.value += '-'
                            subcount = 2
                        }
                    }}></input>
                </div>
                <div>
                    <input id='btnum' type="button" value="1" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "1"
                        if (multcount != 0) {
                            if (multcount < 0) {
                                multcount = 1
                            }
                            multquant++
                            if (multcount == 2) {
                                resultado = n * 1
                                multcat += "1"
                                multcount--
                            } else if (multcount == 1) {
                                for (multquant; multquant > 1; multquant--) {
                                    multcat += "1"
                                }
                                multcatnum = Number(multcat)
                                resultado = n * multcatnum
                            }
                        }
                        //DIVISÃO
                        if (divcount != 0) {
                            if (divcount < 0) {
                                divcount = 2
                            }
                            divquant++
                            if (divcount == 2) {
                                resultado = n / 1
                                divcat += "1"
                                divcount--
                            } else if (divcount == 1) {
                                for (divquant; divquant > 1; divquant--) {
                                    divcat += "1"
                                }
                                divcatnum = Number(divcat)
                                resultado = n / divcatnum
                            }
                        }
                        //SOMA
                        if (somacount != 0) {
                            if (somacount < 0) {
                                somacount = 2
                            }
                            somaquant++
                            if (somacount == 2) {
                                resultado = n + 1
                                somacat += "1"
                                somacount--
                            } else if (somacount == 1) {
                                for (somaquant; somaquant > 1; somaquant--) {
                                    somacat += "1"
                                }
                                somacatnum = Number(somacat)
                                resultado = n + somacatnum
                            }
                        }
                        //SUBTRAÇÃO
                        if (subcount != 0) {
                            if (subcount < 0) {
                                subcount = 2
                            }
                            subquant++
                            if (subcount == 2) {
                                resultado = n - 1
                                subcat += "1"
                                subcount--
                            } else if (subcount == 1) {
                                for (subquant; subquant > 1; subquant--) {
                                    subcat += "1"
                                }
                                subcatnum = Number(subcat)
                                resultado = n - subcatnum
                            }
                        }
                    }}></input><input id='btnum' type="button" value="2" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "2"
                        if (multcount != 0) {
                            if (multcount < 0) {
                                multcount = 1
                            }
                            multquant++
                            if (multcount == 2) {
                                resultado = n * 2
                                multcat += "2"
                                multcount--
                            } else if (multcount == 1) {
                                for (multquant; multquant > 1; multquant--) {
                                    multcat += "2"
                                }
                                multcatnum = Number(multcat)
                                resultado = n * multcatnum
                            }
                        }
                        //DIVISÃO
                        if (divcount != 0) {
                            if (divcount < 0) {
                                divcount = 2
                            }
                            divquant++
                            if (divcount == 2) {
                                resultado = n / 2
                                divcat += "2"
                                divcount--
                            } else if (divcount == 1) {
                                for (divquant; divquant > 1; divquant--) {
                                    divcat += "2"
                                }
                                divcatnum = Number(divcat)
                                resultado = n / divcatnum
                            }
                        }
                        //SOMA
                        if (somacount != 0) {
                            if (somacount < 0) {
                                somacount = 2
                            }
                            somaquant++
                            if (somacount == 2) {
                                resultado = n + 2
                                somacat += "2"
                                somacount--
                            } else if (somacount == 1) {
                                for (somaquant; somaquant > 1; somaquant--) {
                                    somacat += "2"
                                }
                                somacatnum = Number(somacat)
                                resultado = n + somacatnum
                            }
                        }
                        //SUBTRAÇÃO
                        if (subcount != 0) {
                            if (subcount < 0) {
                                subcount = 2
                            }
                            subquant++
                            if (subcount == 2) {
                                resultado = n - 2
                                subcat += "2"
                                subcount--
                            } else if (subcount == 1) {
                                for (subquant; subquant > 1; subquant--) {
                                    subcat += "2"
                                }
                                subcatnum = Number(subcat)
                                resultado = n - subcatnum
                            }
                        }
                    }}></input><input id='btnum' type="button" value="3" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "3"
                        if (multcount != 0) {
                            if (multcount < 0) {
                                multcount = 1
                            }
                            multquant++
                            if (multcount == 2) {
                                resultado = n * 3
                                multcat += "3"
                                multcount--
                            } else if (multcount == 1) {
                                for (multquant; multquant > 1; multquant--) {
                                    multcat += "3"
                                }
                                multcatnum = Number(multcat)
                                resultado = n * multcatnum
                            }
                        }
                        //DIVISÃO
                        if (divcount != 0) {
                            if (divcount < 0) {
                                divcount = 2
                            }
                            divquant++
                            if (divcount == 2) {
                                resultado = n / 3
                                divcat += "3"
                                divcount--
                            } else if (divcount == 1) {
                                for (divquant; divquant > 1; divquant--) {
                                    divcat += "3"
                                }
                                divcatnum = Number(divcat)
                                resultado = n / divcatnum
                            }
                        }
                        //SOMA
                        if (somacount != 0) {
                            if (somacount < 0) {
                                somacount = 2
                            }
                            somaquant++
                            if (somacount == 2) {
                                resultado = n + 3
                                somacat += "3"
                                somacount--
                            } else if (somacount == 1) {
                                for (somaquant; somaquant > 1; somaquant--) {
                                    somacat += "3"
                                }
                                somacatnum = Number(somacat)
                                resultado = n + somacatnum
                            }
                        }
                        //SUBTRAÇÃO
                        if (subcount != 0) {
                            if (subcount < 0) {
                                subcount = 2
                            }
                            subquant++
                            if (subcount == 2) {
                                resultado = n - 3
                                subcat += "3"
                                subcount--
                            } else if (subcount == 1) {
                                for (subquant; subquant > 1; subquant--) {
                                    subcat += "3"
                                }
                                subcatnum = Number(subcat)
                                resultado = n - subcatnum
                            }
                        }
                    }}></input><input id='mais' type="button" value="+" onClick={() => {
                        subcount = 0
                        multcount = 0
                        divcount = 0
                        n = resultado
                        somaquant = 0
                        somacat = ""
                        if (somacount == 0) {
                            var res = document.getElementById('res')
                            var result = Number(res.value)
                            if (resultado == 0) {
                                n = result
                            }
                            res.value += '+'
                            somacount += 2
                        } else {
                            res = document.getElementById('res')
                            res.value += '+'
                            somacount = 2
                        }
                    }}></input>
                </div>
                <div>
                    <input id='clear' type="button" value="C" onClick={() => {
                        var res = document.getElementById('res')
                        res.value = ""
                        n = 1
                        multcount = 0
                        multcat = ""
                        multcatnum = 0
                        multquant = 0
                        divcount = 0
                        divcat = ""
                        divcatnum = 0
                        divquant = 0
                        somacount = 0
                        somacat = ""
                        somacatnum = 0
                        somaquant = 0
                        subcount = 0
                        subcat = ""
                        subcatnum = 0
                        subquant = 0
                        resultado = 0
                    }}></input><input id='btnum' type="button" value="0" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "0"
                        if (multcount != 0) {
                            if (multcount < 0) {
                                multcount = 1
                            }
                            multquant++
                            if (multcount == 2) {
                                resultado = n * 0
                                multcat += "0"
                                multcount--
                            } else if (multcount == 1) {
                                for (multquant; multquant > 1; multquant--) {
                                    multcat += "0"
                                }
                                multcatnum = Number(multcat)
                                resultado = n * multcatnum
                            }
                        }
                        //DIVISÃO
                        if (divcount != 0) {
                            if (divcount < 0) {
                                divcount = 2
                            }
                            divquant++
                            if (divcount == 2) {
                                resultado = n / 0
                                divcat += "0"
                                divcount--
                            } else if (divcount == 1) {
                                for (divquant; divquant > 1; divquant--) {
                                    divcat += "0"
                                }
                                divcatnum = Number(divcat)
                                resultado = n / divcatnum
                            }
                        }
                        //SOMA
                        if (somacount != 0) {
                            if (somacount < 0) {
                                somacount = 2
                            }
                            somaquant++
                            if (somacount == 2) {
                                resultado = n + 0
                                somacat += "0"
                                somacount--
                            } else if (somacount == 1) {
                                for (somaquant; somaquant > 1; somaquant--) {
                                    somacat += "0"
                                }
                                somacatnum = Number(somacat)
                                resultado = n + somacatnum
                            }
                        }
                        //SUBTRAÇÃO
                        if (subcount != 0) {
                            if (subcount < 0) {
                                subcount = 2
                            }
                            subquant++
                            if (subcount == 2) {
                                resultado = n - 0
                                subcat += "0"
                                subcount--
                            } else if (subcount == 1) {
                                for (subquant; subquant > 1; subquant--) {
                                    subcat += "0"
                                }
                                subcatnum = Number(subcat)
                                resultado = n - subcatnum
                            }
                        }
                    }}></input><input id='comma' type="button" value="," onClick={() => {
                        var res = document.getElementById('res')
                        res.value += ","
                    }}></input><input id='div' type="button" value="÷" onClick={() => {
                        subcount = 0
                        somacount = 0
                        multcount = 0
                        n = resultado
                        divquant = 0
                        divcat = ""
                        if (divcount == 0) {
                            var res = document.getElementById('res')
                            var result = Number(res.value)
                            if (resultado == 0) {
                                n = result
                            }
                            res.value += '÷'
                            divcount += 2
                        } else {
                            res = document.getElementById('res')
                            res.value += '÷'
                            divcount = 2
                        }
                    }}></input>
                </div>
            </div>
            <div id='btn'>
                <input id="igual" type="button" value="=" onClick={() => {
                    var res = document.getElementById('res')
                    res.value = resultado
                    n = 1
                    multcount = 0
                    multcat = ""
                    multcatnum = 0
                    multquant = 0
                    divcount = 0
                    divcat = ""
                    divcatnum = 0
                    divquant = 0
                    somacount = 0
                    somacat = ""
                    somacatnum = 0
                    somaquant = 0
                    subcount = 0
                    subcat = ""
                    subcatnum = 0
                    subquant = 0
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