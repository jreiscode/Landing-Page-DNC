var Setadireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("leonardo")
var Bruna = window.document.getElementById("bruna")
var Samantha = window.document.getElementById("samantha")
var Setaesquerda = window.document.getElementById("setaesquerda")

function rolarparadireita() {
    Bruna.style ="display:none"
    Samantha.style ="display:flex"
    Setadireita.style = "display:none"
    Setaesquerda.style = "display:flex; margin-top:30%"
}

function rolarparaesquerda() {
    Bruna.style ="display:flex"
    Samantha.style ="display:none"
    Setadireita.style = "display:flex; margin-top:30%"
    Setaesquerda.style = "display:none"
}