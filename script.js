let toggleButton = document.getElementById('toggleDark');
let logoIcon = document.querySelector('.logo');
let button = document.querySelector('.botao');

toggleButton.addEventListener('click', function () {
    toggleAlternar()
})

function toggleAlternar() {
    const formulario = document.getElementById('formulario');
    formulario.classList.toggle('darkTheme');
    const logo = document.getElementById('logo');
    logo.classList.toggle('logo-invert')
    const btn = document.getElementById('button');
    btn.classList.toggle('botao-invert')
}