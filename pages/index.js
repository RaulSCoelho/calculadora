import Link from 'next/link'

function Home() {
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
                     }}></input><input id='btnum' type="button" value="8" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "8"
                     }}></input><input id='btnum' type="button" value="9" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "9"
                     }}></input><input id='mult' type="button" value="X" onClick={() => {
                        var res = document.getElementById('res')
                        var result = Number(res.value)
                        res.value += 'x'
                     }}></input>
                </div>
                <div>
                    <input id='btnum' type="button" value="4" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "4"
                     }}></input><input id='btnum' type="button" value="5" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "5"
                     }}></input><input id='btnum' type="button" value="6" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "6"
                     }}></input><input id='menos' type="button" value="-" onClick={() => {
                        var res = document.getElementById('res')
                        var result = Number(res.value)
                        res.value += "-"
                     }}></input>
                </div>
                <div>
                    <input id='btnum' type="button" value="1" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "1"
                     }}></input><input id='btnum' type="button" value="2" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "2"
                     }}></input><input id='btnum' type="button" value="3" onClick={() => {
                        var res = document.getElementById('res')
                        res.value += "3"
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
                        var res = document.getElementById('res')
                        res.value += "0"
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
                        res.value = 'Período de teste'
                     }}></input>
            </div>
        </section>
        <footer>
            <p>&copy; RaulSCoelho</p>
        </footer>
    </div>)
}

export default Home