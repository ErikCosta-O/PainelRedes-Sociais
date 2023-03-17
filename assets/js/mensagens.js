function focarXbox(){
    var ts
    const aviso = document.getElementById("aviso2")

    ts = document.getElementById("btn1")
    ts.addEventListener('focus', aviso.style.display= "grid")
}
function focarDisc(){
    var ts
    const aviso = document.getElementById("aviso1")

    ts = document.getElementById("btn2")
    ts.addEventListener('focus', aviso.style.display= "grid")
}
function sair1(){
    var ts
    const aviso = document.getElementById("aviso1")

    ts = document.getElementById("btn2")
    ts.addEventListener('mouseleave', aviso.style.display= "none")
}
function sair2(){
    var ts
    const aviso = document.getElementById("aviso2")

    ts = document.getElementById("btn1")
    ts.addEventListener('mouseleave', aviso.style.display= "none")
}
function claro(){
    const fundo = document.getElementById("fundoSite")
    fundo.addEventListener('click', fundo.style.backgroundColor='#f6fff8',
    fundo.style.color='#011627')
}
function escuro(){
    const fundo = document.getElementById("fundoSite")
    fundo.addEventListener('click', fundo.style.backgroundColor='#3c3744', 
    fundo.style.color='#f6fff8')
}
