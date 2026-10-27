const btnEntrar = document.querySelector("#entrar");
const btnCriar = document.querySelector("#criar");

const body = document.querySelector("body");

btnEntrar.addEventListener('click', function () {
    body.className = "entrar-js";
})

btnCriar.addEventListener('click', function () {
    body.className = "criar-js";
})

