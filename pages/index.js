import Link from 'next/link'

function Home() {
    var cont = 0
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
                        if(cont < 0){
                            cont = 1
                        }
                        var res = document.getElementById('res')
                        res.value += "7"
                        if(cont > 0){
                            n2*= 7
                            cont--
                        }
                    }}></input><input id='btnum' type="button" value="8" onClick={() => {
                        if(cont < 0){
                            cont = 1
                        }
                        var res = document.getElementById('res')
                        res.value += "8"
                        if(cont > 0){
                            n2*= 8
                            cont--
                        }
                    }}></input><input id='btnum' type="button" value="9" onClick={() => {
                        if(cont < 0){
                            cont = 1
                        }
                        var res = document.getElementById('res')
                        res.value += "9"
                        if(cont > 0){
                            n2*= 9
                            cont--
                        }
                    }}></input><input id='mult' type="button" value="X" onClick={() => {
                        var res = document.getElementById('res')
                        var result = Number(res.value)
                        n2 = result
                        res.value += 'x'
                        cont++
                    }}></input>
                </div>
                <div>
                    <input id='btnum' type="button" value="4" onClick={() => {
                        if(cont < 0){
                            cont = 1
                        }
                        var res = document.getElementById('res')
                        res.value += "4"
                        if(cont > 0){
                            n2*= 4
                            cont--
                        }
                    }}></input><input id='btnum' type="button" value="5" onClick={() => {
                        if(cont < 0){
                            cont = 1
                        }
                        var res = document.getElementById('res')
                        res.value += "5"
                        if(cont > 0){
                            n2*= 5
                            cont--
                        }
                    }}></input><input id='btnum' type="button" value="6" onClick={() => {
                        if(cont < 0){
                            cont = 1
                        }
                        var res = document.getElementById('res')
                        res.value += "6"
                        if(cont > 0){
                            n2*= 6
                            cont--
                        }
                    }}></input><input id='menos' type="button" value="-" onClick={() => {
                        var res = document.getElementById('res')
                        var result = Number(res.value)
                        res.value += "-"
                    }}></input>
                </div>
                <div>
                    <input id='btnum' type="button" value="1" onClick={() => {
                        if(cont < 0){
                            cont = 1
                        }
                        var res = document.getElementById('res')
                        res.value += "1"
                        if(cont > 0){
                            n2*= 1
                            cont--
                        }
                    }}></input><input id='btnum' type="button" value="2" onClick={() => {
                        if(cont < 0){
                            cont = 1
                        }
                        var res = document.getElementById('res')
                        res.value += "2"
                        if(cont > 0){
                            n2*= 2
                            cont--
                        }
                    }}></input><input id='btnum' type="button" value="3" onClick={() => {
                        if(cont < 0){
                            cont = 1
                        }
                        var res = document.getElementById('res')
                        res.value += "3"
                        if(cont > 0){
                            n2*= 3
                            cont--
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
                    }}></input><input id='btnum' type="button" value="0" onClick={() => {
                        if(cont < 0){
                            cont = 1
                        }
                        var res = document.getElementById('res')
                        res.value += "0"
                        if(cont > 0){
                            n2*= 0
                            cont--
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
                    res.value = n2
                }}></input>
            </div>
        </section>
        <footer>
            <p>&copy; RaulSCoelho</p>
        </footer>
    </div>)
}

export default Home