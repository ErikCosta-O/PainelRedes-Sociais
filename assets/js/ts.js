function focarXbox(){
    var ts
    const aviso = document.getElementById("avisoXbox")

    ts = document.getElementById("btn1")
    ts.addEventListener('focus', aviso.style.display= "grid")
}
function focarDisc(){
    var ts
    const aviso = document.getElementById("aviso")

    ts = document.getElementById("btn2")
    ts.addEventListener('focus', aviso.style.display= "grid")
}
function sair(){
    var ts
    const aviso = document.getElementById("aviso")

    ts = document.getElementById("btn2")
    ts.addEventListener('mouseleave', aviso.style.display= "none")
}
function sair(){
    var ts
    const aviso = document.getElementById("avisoXbox")

    ts = document.getElementById("btn1")
    ts.addEventListener('mouseleave', aviso.style.display= "none")
}