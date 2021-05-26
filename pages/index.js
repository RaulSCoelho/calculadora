import Link from 'next/link'

function Home() {
    return (<div>
        <header>
            <h1>Calculadora</h1>
        </header>
        <section>
            <section id='res'>
                <div id='resultado'>

                </div>
            </section>
            <div id='teclado'>
                <div>
                    <input id='btnum' type="button" value="7" onClick={() => {
                        var res = document.getElementById('resultado')
                        res.innerHTML += "7"
                     }}></input><input id='btnum' type="button" value="8" onClick={() => {
                        var res = document.getElementById('resultado')
                        res.innerHTML += "8"
                     }}></input><input id='btnum' type="button" value="9" onClick={() => {
                        var res = document.getElementById('resultado')
                        res.innerHTML += "9"
                     }}></input><input id='mult' type="button" value="X" onClick={() => {
                        var res = document.getElementById('resultado')
                        res.innerHTML += "x"
                     }}></input>
                </div>
                <div>
                    <input id='btnum' type="button" value="4" onClick={() => {
                        var res = document.getElementById('resultado')
                        res.innerHTML += "4"
                     }}></input><input id='btnum' type="button" value="5" onClick={() => {
                        var res = document.getElementById('resultado')
                        res.innerHTML += "5"
                     }}></input><input id='btnum' type="button" value="6" onClick={() => {
                        var res = document.getElementById('resultado')
                        res.innerHTML += "6"
                     }}></input><input id='menos' type="button" value="-" ></input>
                </div>
                <div>
                    <input id='btnum' type="button" value="1" onClick={() => {
                        var res = document.getElementById('resultado')
                        res.innerHTML += "1"
                     }}></input><input id='btnum' type="button" value="2" onClick={() => {
                        var res = document.getElementById('resultado')
                        res.innerHTML += "2"
                     }}></input><input id='btnum' type="button" value="3" onClick={() => {
                        var res = document.getElementById('resultado')
                        res.innerHTML += "3"
                     }}></input><input id='mais' type="button" value="+" ></input>
                </div>
                <div>
                    <input id='clear' type="button" value="C" onClick={() => {
                        var res = document.getElementById('resultado')
                        res.innerHTML = ""
                     }}></input><input id='btnum' type="button" value="0" ></input><input id='comma' type="button" value="," ></input><input id='div' type="button" value="÷"></input>
                </div>
            </div>
            <div id='btn'>
                <input id="igual" type="button" value="=" onClick={() => { }}></input>
            </div>
        </section>
        <footer>
            <p>&copy; RaulSCoelho</p>
        </footer>
    </div>)
}

export default Home