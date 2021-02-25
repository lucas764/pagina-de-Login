const nome = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const campo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let kayEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    campo.innerHTML = ""

    if(nome.value.length <6){
        warnings += `O nome não é valido <br>`
        entrar = true
    }
    if(!kayEmail.test(email.value)){
        warnings += `O email não é valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `A senha não é valida <br>`
        entrar = true
    }

    if(entrar){
        campo.innerHTML = warnings
    }else{
        campo.innerHTML = "Enviado"
    }
})