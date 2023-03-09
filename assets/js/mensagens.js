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